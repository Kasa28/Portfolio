"use strict";

function byId(id) {
  return document.getElementById(id);
}

function getLang() {
  return document.documentElement.lang === "de" ? "de" : "en";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function text(key) {
  const map = {
    de: {
      name: "Bitte gib deinen Namen ein.",
      email: "Bitte gib eine gültige E-Mail-Adresse ein.",
      message: "Bitte gib deine Nachricht ein.",
      privacy: "Bitte akzeptiere die Datenschutzerklärung.",
      failed: "Etwas ist schiefgelaufen. Bitte versuche es später erneut.",
      title: "Vielen Dank für deine Nachricht!",
      body: "Ich freue mich über deine Anfrage und werde mich so schnell wie möglich bei dir melden.",
      close: "Schließen",
    },
    en: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please enter your message.",
      privacy: "Please accept the privacy policy.",
      failed: "Something went wrong. Please try again later.",
      title: "Thank you for your message!",
      body: "I appreciate your inquiry and will get back to you as soon as possible.",
      close: "Close",
    },
  };

  return map[getLang()][key];
}

function setFormError(message = "") {
  const error = byId("formError");
  if (error) error.textContent = message;
}

function getFormEls() {
  return {
    form: byId("contactForm"),
    name: byId("name"),
    email: byId("email"),
    message: byId("message"),
    privacy: byId("privacy"),
    submit: byId("contactSubmitBtn"),
  };
}

function toggleSubmitState() {
  const { name, email, message, privacy, submit } = getFormEls();
  if (!name || !email || !message || !privacy || !submit) return;

  submit.disabled = !(
    name.value.trim() &&
    validateEmail(email.value) &&
    message.value.trim() &&
    privacy.checked
  );
}

function switchProject(tab, tabs, cards) {
  tabs.forEach((item) => item.classList.remove("active"));
  cards.forEach((card) => card.classList.remove("active"));
  tabs.forEach((item) => item.setAttribute("aria-selected", "false"));
  tab.classList.add("active");
  tab.setAttribute("aria-selected", "true");
  byId(tab.dataset.project)?.classList.add("active");
}

function initProjectTabs() {
  const tabs = document.querySelectorAll(".project_tab");
  const cards = document.querySelectorAll(".project_card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchProject(tab, tabs, cards));
  });
}

function toggleBurgerState(burger, card) {
  burger.classList.toggle("is_open");
  card.classList.toggle("show_menu");
  burger.setAttribute("aria-expanded", String(burger.classList.contains("is_open")));
}

function closeBurgerState(burger, card) {
  burger.classList.remove("is_open");
  card.classList.remove("show_menu");
  burger.setAttribute("aria-expanded", "false");
}

function activateMobileLink(link, links) {
  links.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
}

function initBurgerMenu() {
  const burger = byId("burgerMenu");
  const card = byId("flipCard");
  const links = document.querySelectorAll(".mobile_link_section a");

  if (!burger || !card) return;

  burger.addEventListener("click", () => toggleBurgerState(burger, card));

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      activateMobileLink(link, links);

      const target = document.querySelector(link.getAttribute("href"));

      setTimeout(() => {
        closeBurgerState(burger, card);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220);
    });
  });
}

function setActiveButtons(selector, lang) {
  document.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  setActiveButtons(".language_nav_tab", lang);
  setActiveButtons(".language_mobile_tab", lang);

  document.querySelectorAll(".language_switch_icon").forEach((box) => {
    box.dataset.active = lang;
  });

  if (typeof window.applyLanguage === "function") {
    window.applyLanguage(lang);
  }

  toggleSubmitState();
}

function initLanguageSwitch() {
  const savedLang = localStorage.getItem("language") || "en";
  applyLang(savedLang);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      applyLang(button.dataset.lang);
    });
  });
}

function showContactPopup() {
  const popup = byId("contactPopup");
  const title = byId("contactPopupTitle");
  const body = byId("contactPopupText");
  const close = byId("contactPopupClose");

  if (!popup || !title || !body || !close) return;

  title.textContent = text("title");
  body.textContent = text("body");
  close.textContent = text("close");
  popup.classList.add("show");
  popup.setAttribute("aria-hidden", "false");
}

function closeContactPopup() {
  const popup = byId("contactPopup");
  if (!popup) return;
  popup.classList.remove("show");
  popup.setAttribute("aria-hidden", "true");
}

function initContactPopup() {
  const popup = byId("contactPopup");
  const close = byId("contactPopupClose");

  if (close) close.addEventListener("click", closeContactPopup);
  if (popup) popup.addEventListener("click", (e) => e.target === popup && closeContactPopup());
}

function bindField(input, eventName) {
  if (!input) return;

  input.addEventListener(eventName, () => {
    setFormError();
    toggleSubmitState();
  });
}

function initContactForm() {
  const { name, email, message, privacy } = getFormEls();

  bindField(name, "input");
  bindField(email, "input");
  bindField(message, "input");
  bindField(privacy, "change");
  toggleSubmitState();
}

function getSendError(name, email, message, privacy) {
  if (!name) return text("name");
  if (!validateEmail(email)) return text("email");
  if (!message) return text("message");
  return privacy ? "" : text("privacy");
}

async function postForm(name, email, message) {
  const response = await fetch("./send-mail.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result.error || "Send failed");
}

async function sendForm() {
  const { form, name, email, message, privacy, submit } = getFormEls();
  if (!form || !name || !email || !message || !privacy || !submit) return;

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const error = getSendError(nameValue, emailValue, messageValue, privacy.checked);

  setFormError(error);
  if (error) return;
  submit.disabled = true;

  try {
    await postForm(nameValue, emailValue, messageValue);
    form.reset();
    setFormError();
    showContactPopup();
  } catch {
    setFormError(text("failed"));
  } finally {
    toggleSubmitState();
  }
}

function initApp() {
  initProjectTabs();
  initBurgerMenu();
  initLanguageSwitch();
  initContactPopup();
  initContactForm();
}

document.addEventListener("DOMContentLoaded", initApp);
window.sendForm = sendForm;
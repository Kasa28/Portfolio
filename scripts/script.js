"use strict";

const TEXTS = {
  de: {
    name: "Bitte gib deinen Namen ein.",
    email: "Bitte gib eine gültige E-Mail-Adresse ein.",
    message: "Bitte schreibe mindestens 10 Zeichen.",
    privacy: "Bitte akzeptiere die Datenschutzerklärung.",
    failed: "Etwas ist schiefgelaufen. Bitte versuche es später erneut.",
    title: "Vielen Dank für deine Nachricht!",
    body: "Ich freue mich über deine Anfrage und werde mich so schnell wie möglich bei dir melden.",
    close: "Schließen",
  },
  en: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Please write at least 10 characters.",
    privacy: "Please accept the privacy policy.",
    failed: "Something went wrong. Please try again later.",
    title: "Thank you for your message!",
    body: "I appreciate your inquiry and will get back to you as soon as possible.",
    close: "Close",
  },
};

const touched = { name: false, email: false, message: false, privacy: false };

const byId = (id) => document.getElementById(id);
const getLang = () => document.documentElement.lang === "de" ? "de" : "en";
const text = (key) => TEXTS[getLang()][key];

function validateEmail(email) {
  const value = String(email).trim();
  if (value.includes("..")) return false;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
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

function isValidMessage(message) {
  return message.value.trim().length >= 10;
}

function isFormValid(name, email, message, privacy) {
  return !!(
    name.value.trim() &&
    validateEmail(email.value) &&
    isValidMessage(message) &&
    privacy.checked
  );
}

function toggleSubmitState() {
  const { name, email, message, privacy, submit } = getFormEls();
  if (!name || !email || !message || !privacy || !submit) return;
  submit.disabled = !isFormValid(name, email, message, privacy);
}

function resetProjectTabs(tabs, cards) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  cards.forEach((card) => card.classList.remove("active"));
  tabs.forEach((tab) => tab.setAttribute("aria-selected", "false"));
}

function switchProject(tab, tabs, cards) {
  resetProjectTabs(tabs, cards);
  tab.classList.add("active");
  tab.setAttribute("aria-selected", "true");
  byId(tab.dataset.project)?.classList.add("active");
}

function initProjectTabs() {
  const tabs = document.querySelectorAll(".project_tab");
  const cards = document.querySelectorAll(".project_card");
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => switchProject(tab, tabs, cards))
  );
}

function updateBurgerAria(burger) {
  const isOpen = burger.classList.contains("is_open");
  burger.setAttribute("aria-expanded", String(isOpen));
}

function toggleBurgerState(burger, card) {
  burger.classList.toggle("is_open");
  card.classList.toggle("show_menu");
  updateBurgerAria(burger);
}

function closeBurgerState(burger, card) {
  burger.classList.remove("is_open");
  card.classList.remove("show_menu");
  updateBurgerAria(burger);
}

function activateMobileLink(link, links) {
  links.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
}

function scrollToTarget(link) {
  const target = document.querySelector(link.getAttribute("href"));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleMobileLinkClick(link, links, burger, card) {
  activateMobileLink(link, links);
  setTimeout(() => {
    closeBurgerState(burger, card);
    scrollToTarget(link);
  }, 220);
}

function initBurgerMenu() {
  const burger = byId("burgerMenu");
  const card = byId("flipCard");
  const links = document.querySelectorAll(".mobile_link_section a");
  if (!burger || !card) return;
  burger.addEventListener("click", () => toggleBurgerState(burger, card));
  links.forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    handleMobileLinkClick(link, links, burger, card);
  }));
}

function setActiveButtons(selector, lang) {
  document.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function setLanguageEgg(lang) {
  document.querySelectorAll(".language_switch_icon").forEach((box) => {
    box.dataset.active = lang;
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
  setActiveButtons(".language_nav_tab", lang);
  setActiveButtons(".language_mobile_tab", lang);
  setLanguageEgg(lang);
  if (typeof window.applyLanguage === "function") window.applyLanguage(lang);
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

function setPopupText(title, body, close) {
  title.textContent = text("title");
  body.textContent = text("body");
  close.textContent = text("close");
}

function showContactPopup() {
  const popup = byId("contactPopup");
  const title = byId("contactPopupTitle");
  const body = byId("contactPopupText");
  const close = byId("contactPopupClose");
  if (!popup || !title || !body || !close) return;
  setPopupText(title, body, close);
  popup.classList.add("show");
  popup.setAttribute("aria-hidden", "false");
}

function closeContactPopup() {
  const popup = byId("contactPopup");
  if (!popup) return;
  popup.classList.remove("show");
  popup.setAttribute("aria-hidden", "true");
}

function handlePopupOverlayClick(event, popup) {
  if (event.target === popup) closeContactPopup();
}

function initContactPopup() {
  const popup = byId("contactPopup");
  const close = byId("contactPopupClose");
  if (close) close.addEventListener("click", closeContactPopup);
  if (popup) popup.addEventListener("click", (e) => {
    handlePopupOverlayClick(e, popup);
  });
}

function getFieldKey(field) {
  if (field?.id === "name") return "name";
  if (field?.id === "email") return "email";
  if (field?.id === "message") return "message";
  if (field?.id === "privacy") return "privacy";
  return "";
}

function getFieldError(field) {
  const { name, email, message, privacy } = getFormEls();
  if (field === name) return name.value.trim() ? "" : text("name");
  if (field === email) return validateEmail(email.value) ? "" : text("email");
  if (field === message) return isValidMessage(message) ? "" : text("message");
  if (field === privacy) return privacy.checked ? "" : text("privacy");
  return "";
}

function getTouchedFormError() {
  const { name, email, message, privacy } = getFormEls();
  if (touched.name && !name.value.trim()) return text("name");
  if (touched.email && !validateEmail(email.value)) return text("email");
  if (touched.message && !isValidMessage(message)) return text("message");
  if (touched.privacy && !privacy.checked) return text("privacy");
  return "";
}

function bindSubmitOnly(input, eventName) {
  if (!input) return;
  input.addEventListener(eventName, () => {
    const key = getFieldKey(input);
    toggleSubmitState();
    if (!key || !touched[key]) return;
    setFormError(getTouchedFormError());
  });
}

function bindField(input, eventName) {
  if (!input) return;
  input.addEventListener(eventName, () => {
    const key = getFieldKey(input);
    if (key) touched[key] = true;
    setFormError(getFieldError(input) || getTouchedFormError());
    toggleSubmitState();
  });
}

function initContactForm() {
  const { name, email, message, privacy } = getFormEls();
  bindSubmitOnly(name, "input");
  bindSubmitOnly(email, "input");
  bindSubmitOnly(message, "input");
  bindField(name, "blur");
  bindField(email, "blur");
  bindField(message, "blur");
  bindField(privacy, "change");
  toggleSubmitState();
}

function getSendError(name, email, message, privacy) {
  if (!name) return text("name");
  if (!validateEmail(email)) return text("email");
  if (message.trim().length < 10) return text("message");
  if (!privacy) return text("privacy");
  return "";
}

async function postForm(name, email, message) {
  const response = await fetch("./send-mail.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || "Send failed");
  }
}

function getTrimmedFormValues(name, email, message) {
  return {
    nameValue: name.value.trim(),
    emailValue: email.value.trim(),
    messageValue: message.value.trim(),
  };
}

function getSendPayload() {
  const { name, email, message, privacy } = getFormEls();
  return {
    ...getTrimmedFormValues(name, email, message),
    privacyValue: privacy.checked,
  };
}

function markAllTouched() {
  touched.name = true;
  touched.email = true;
  touched.message = true;
  touched.privacy = true;
}

function resetTouched() {
  touched.name = false;
  touched.email = false;
  touched.message = false;
  touched.privacy = false;
}

async function submitValidForm(form, submit, payload) {
  submit.disabled = true;
  await postForm(payload.nameValue, payload.emailValue, payload.messageValue);
  form.reset();
  resetTouched();
  setFormError();
  showContactPopup();
}

async function sendForm() {
  const { form, submit } = getFormEls();
  const payload = getSendPayload();
  const error = getSendError(
    payload.nameValue,
    payload.emailValue,
    payload.messageValue,
    payload.privacyValue
  );
  if (!form || !submit) return;
  if (error) markAllTouched();
  setFormError(error);
  if (error) return;
  try {
    await submitValidForm(form, submit, payload);
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
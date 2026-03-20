"use strict";

function initProjectTabs() {
  const tabs = document.querySelectorAll(".project_tab");
  const cards = document.querySelectorAll(".project_card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.project;

      tabs.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      cards.forEach((card) => {
        card.classList.remove("active");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add("active");
      }
    });
  });
}

function initBurgerMenu() {
  const burgerMenu = document.getElementById("burgerMenu");
  const flipCard = document.getElementById("flipCard");
  const mobileLinks = document.querySelectorAll(".mobile_link_section a");

  if (!burgerMenu || !flipCard) return;

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is_open");
    flipCard.classList.toggle("show_menu");

    const isOpen = burgerMenu.classList.contains("is_open");
    burgerMenu.setAttribute("aria-expanded", String(isOpen));
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("is_open");
      flipCard.classList.remove("show_menu");
      burgerMenu.setAttribute("aria-expanded", "false");
    });
  });
}

function initLanguageSwitch() {
  const switchers = document.querySelectorAll(".language_switch_icon");

  switchers.forEach((switcher) => {
    const buttons = switcher.querySelectorAll("[data-lang]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLang = button.dataset.lang;

        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        switcher.dataset.active = selectedLang;
        document.documentElement.lang = selectedLang;
      });
    });
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function getCurrentLanguage() {
  return document.documentElement.lang === "de" ? "de" : "en";
}

function setFormError(message) {
  const formError = document.getElementById("formError");
  if (!formError) return;
  formError.textContent = message;
}

function clearFormError() {
  const formError = document.getElementById("formError");
  if (!formError) return;
  formError.textContent = "";
}

function showContactPopup() {
  const popup = document.getElementById("contactPopup");
  const title = document.getElementById("contactPopupTitle");
  const text = document.getElementById("contactPopupText");
  const closeButton = document.getElementById("contactPopupClose");
  const lang = getCurrentLanguage();

  if (!popup || !title || !text || !closeButton) return;

  if (lang === "de") {
    title.textContent = "Vielen Dank für deine Nachricht!";
    text.textContent = "Ich freue mich über deine Anfrage und werde mich so schnell wie möglich bei dir melden.";
    closeButton.textContent = "Schließen";
  } else {
    title.textContent = "Thank you for your message!";
    text.textContent = "I appreciate your inquiry and will get back to you as soon as possible.";
    closeButton.textContent = "Close";
  }

  popup.classList.add("show");
  popup.setAttribute("aria-hidden", "false");
}

function closeContactPopup() {
  const popup = document.getElementById("contactPopup");
  if (!popup) return;
  popup.classList.remove("show");
  popup.setAttribute("aria-hidden", "true");
}

async function sendForm() {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const privacyInput = document.getElementById("privacy");
  const submitButton = document.getElementById("contactSubmitBtn");
  const lang = getCurrentLanguage();

  if (!form || !nameInput || !emailInput || !messageInput || !privacyInput || !submitButton) {
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const privacyAccepted = privacyInput.checked;

  clearFormError();

  if (!name) {
    setFormError(lang === "de"
      ? "Bitte gib deinen Namen ein."
      : "Please enter your name.");
    return;
  }

  if (!validateEmail(email)) {
    setFormError(lang === "de"
      ? "Bitte gib eine gültige E-Mail-Adresse ein."
      : "Please enter a valid email address.");
    return;
  }

  if (!message) {
    setFormError(lang === "de"
      ? "Bitte gib deine Nachricht ein."
      : "Please enter your message.");
    return;
  }

  if (!privacyAccepted) {
    setFormError(lang === "de"
      ? "Bitte akzeptiere die Datenschutzerklärung."
      : "Please accept the privacy policy.");
    return;
  }

  submitButton.disabled = true;

  try {
    const response = await fetch("./send-mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Send failed");
    }

    form.reset();
    clearFormError();
    showContactPopup();
  } catch (error) {
    setFormError(lang === "de"
      ? "Etwas ist schiefgelaufen. Bitte versuche es später erneut."
      : "Something went wrong. Please try again later.");
  } finally {
    submitButton.disabled = false;
  }
}

function initContactPopup() {
  const popup = document.getElementById("contactPopup");
  const closeButton = document.getElementById("contactPopupClose");

  if (closeButton) {
    closeButton.addEventListener("click", closeContactPopup);
  }

  if (popup) {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closeContactPopup();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initProjectTabs();
  initBurgerMenu();
  initLanguageSwitch();
  initContactPopup();
});

window.sendForm = sendForm;
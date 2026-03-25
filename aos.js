"use strict";

function setAos(selector, animation, delay = 0) {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.setAttribute("data-aos", animation);
    element.setAttribute("data-aos-delay", String(delay * index));
  });
}

function setSingleAos(selector, animation, delay = 0) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.setAttribute("data-aos", animation);
  element.setAttribute("data-aos-delay", String(delay));
}

function initWhyMeAos() {
  setSingleAos(".why_me_section .section_title", "fade-down");
  setSingleAos(".why_me_location", "fade-right", 100);
  setSingleAos(".why_me_text", "fade-left", 180);
  setSingleAos(".section_cta_row", "zoom-in", 260);
}

function initSkillsAos() {
  setSingleAos(".skills_section .section_title", "fade-up");
  setAos(".skill_icon_item", "fade-up", 90);
  setSingleAos(".skills_text_container", "zoom-in-up", 180);
  setAos(".learning_item", "fade-up", 120);
}

function initAos() {
  initWhyMeAos();
  initSkillsAos();
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out-cubic",
  });
}

document.addEventListener("DOMContentLoaded", initAos);
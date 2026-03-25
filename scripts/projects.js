"use strict";

function hideTabs(items) {
  items.forEach((item) => {
    item.classList.remove("active");
    item.setAttribute("aria-selected", "false");
  });
}

function showCard(tab) {
  const target = document.getElementById(tab.dataset.project);
  if (target) target.classList.add("active");
}

function activateTab(tab, tabs, cards) {
  hideTabs(tabs);
  hideTabs(cards);
  tab.classList.add("active");
  tab.setAttribute("aria-selected", "true");
  showCard(tab);
}

function initProjectTabs() {
  const tabs = [...document.querySelectorAll(".project_tab")];
  const cards = [...document.querySelectorAll(".project_card")];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab, tabs, cards));
  });
}

document.addEventListener("DOMContentLoaded", initProjectTabs);
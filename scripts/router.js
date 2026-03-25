"use strict";

function handleRoute() {
  const isLegalRoute = window.location.hash === "#legal";
  document.body.classList.toggle("legal-route", isLegalRoute);
}

window.addEventListener("DOMContentLoaded", handleRoute);
window.addEventListener("hashchange", handleRoute);
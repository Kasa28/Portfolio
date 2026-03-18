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

document.addEventListener("DOMContentLoaded", () => {
  initProjectTabs();
});


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

document.addEventListener("DOMContentLoaded", initProjectTabs);
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const flipCard = document.getElementById("flipCard");
  const mobileLinks = document.querySelectorAll(".mobile_link_section a");

  if (burgerMenu && flipCard) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is_open");
      flipCard.classList.toggle("show_menu");

      const isOpen = burgerMenu.classList.contains("is_open");
      burgerMenu.setAttribute("aria-expanded", String(isOpen));
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("is_open");
      flipCard.classList.remove("show_menu");
      burgerMenu.setAttribute("aria-expanded", "false");
    });
  });
});
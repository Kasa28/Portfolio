function showProject(ev) {
  const projectTabs = ev.target.dataset.project;
  const contentTabs = ev.target.dataset.content;
  const targetId = ev.target.dataset.target;

  showHeaderTab(projectTabs, ev);
  showContentTab(contentTabs, targetId);
}

function showHeaderTab(projectTabs, ev) {
  const tab = document.getElementsByClassName(projectTabs);

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
    tab[i].ariaSelected = "false";
  }

  ev.target.parentElement.classList.add("active");
  ev.target.parentElement.ariaSelected = "true";
}

function showContentTab(contentTabs, targetId) {
  const tab = document.getElementsByClassName(contentTabs);

  for (let i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
    tab[i].ariaSelected = "false";
  }

  document.getElementById(targetId).style.display = "flex";
  document.getElementById(targetId).ariaSelected = "true";
}

function scrollToTarget(targetId, ev) {
  ev.preventDefault();

  const target = document.getElementById(targetId);
  target.scrollIntoView({ behavior: "smooth" });

  window.addEventListener(
    "scrollend",
    () => {
      bounceWholePage();
    },
    { once: true }
  );
}

function bounceWholePage() {
  const main = document.querySelector("main");
  main.classList.add("bounce_page");

  setTimeout(() => {
    main.classList.remove("bounce_page");
  }, 500);
}
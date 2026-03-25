function showProject(event) {
  const button = event.currentTarget;
  const projectTabs = button.dataset.project;
  const contentTabs = button.dataset.content;
  const targetId = button.dataset.target;
  showHeaderTab(projectTabs, button);
  showContentTab(contentTabs, targetId);
}

function showHeaderTab(projectTabs, button) {
  const tabs = document.getElementsByClassName(projectTabs);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    tabs[i].ariaSelected = "false";
  }
  button.parentElement.classList.add("active");
  button.parentElement.ariaSelected = "true";
}

function showContentTab(contentTabs, targetId) {
  const tabs = document.getElementsByClassName(contentTabs);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].ariaSelected = "false";
  }
  const target = document.getElementById(targetId);
  target.style.display = "flex";
  target.ariaSelected = "true";
}

function scrollToTarget(event, targetId) {
  event.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth" });
  window.addEventListener("scrollend", bounceWholePage, { once: true });
}

function bounceWholePage() {
  const main = document.querySelector("main");
  if (!main) return;
  main.classList.add("bounce_page");
  setTimeout(() => main.classList.remove("bounce_page"), 500);
}
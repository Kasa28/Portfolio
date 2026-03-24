"use strict";

const translations = {
  en: {
    "brand.role": "developer",

    "nav.whyMe": "Why me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.name": "Kseniya Küntzle",
    "hero.role": "FRONTEND DEVELOPER",

    "whyMe.title": "Why me",
    "whyMe.location": "I am located in Heilbronn",
    "whyMe.text":
      "I’m a frontend developer with a strong eye for clean UI and a love for building smooth, responsive experiences. I enjoy turning ideas into structured, maintainable code — and I’m always curious to learn and improve.",
    "whyMe.button": "Let's talk",

    "skills.title": "My Skills",
    "skills.learningTitle": "I am currently learning",
    "skills.learningText":
      "I’m passionate about continuous learning. Every new challenge is an opportunity to grow, improve, and develop new skills.",

    "projects.title": "My Projects",
    "projects.tech": "Technologies",
    "projects.live": "Live Test",
    "projects.tabJoin": "1. Join",
    "projects.tabElPollo": "2. El Pollo Loco",
    "projects.tabOngoing": "3. Ongoing Project",

    "projects.join.aboutTitle": "About the project",
    "projects.join.duration": "Duration: 1.5 months",
    "projects.join.aboutText":
      "Join is a task management application inspired by Kanban and created as a collaborative team project. Users can create, organize, and manage tasks using drag-and-drop functionality, assign users and categories, edit task cards, and add subtasks.",
    "projects.join.processTitle": "How I have organised my work process",
    "projects.join.processText":
      "Within our two-member team, we divided the project into epics and assigned responsibilities to each of us. We managed user stories, features, and tasks using Git branching. Once a feature was completed, we merged our work together to ensure no code was lost. This approach kept the development process structured and made collaboration smooth and efficient.",
    "projects.join.teamTitle": "My group work experience",
    "projects.join.teamText":
      "I really enjoyed working collaboratively within our team. We held daily meetings to track progress and stay aligned throughout the development process. We supported each other when needed and worked together on testing at the end of the project.",

    "projects.elpollo.aboutTitle": "About the project",
    "projects.elpollo.duration": "Duration: 1 month",
    "projects.elpollo.aboutText":
      "El Pollo Loco is a 2D jump-and-run game based on object-oriented programming. Players guide Pepe through different levels, collecting items and battling enemies by throwing spicy salsa bottles to defeat the final boss.",
    "projects.elpollo.processTitle": "How I have organised my work process",
    "projects.elpollo.processText":
      "The project was structured into multiple user stories, allowing a clear and organized development process. Object-oriented programming helped me structure the code by connecting methods to relevant classes and applying core OOP principles such as encapsulation, abstraction, inheritance, and polymorphism.",
    "projects.elpollo.learnedTitle": "My lessons learned",
    "projects.elpollo.learnedText":
      "Designing and implementing classes and methods significantly improved my development skills. It enabled me to write more modular, flexible, and reusable code, and deepened my understanding of scalable application structure.",

    "projects.ongoing.aboutTitle": "About the projects",
    "projects.ongoing.duration": "Duration: ongoing",
    "projects.ongoing.aboutText":
      "My upcoming projects will focus on showcasing my skills in Angular and TypeScript.",
    "projects.ongoing.memoryTitle": "Memory Game",
    "projects.ongoing.memoryText":
      "I am currently expanding my frontend expertise by working with TypeScript and SCSS to build more scalable and maintainable applications.",
    "projects.ongoing.pollTitle": "Poll App",
    "projects.ongoing.pollText":
      "One of my next projects is a real-time poll application built with Angular and Supabase, where users can create surveys and track live results as they update instantly.",

    "references.titleMain": "Need a teamplayer?",
    "references.titleSub": "Here’s what my colleagues say about me",
    "references.project": "Project",
    "references.linkedin": "LinkedIn Profile",
    "references.maya":
      "Working with Kseniya was a great experience. She is reliable, structured, and a strong team player.",
    "references.laura":
      "Kseniya is thoughtful and supportive, with creativity, patience, and a strong drive to improve.",
    "references.elli":
      "Kseniya is motivated, reliable, and has a great eye for clean design. She’s a valuable team member.",

    "contact.title": "Contact me",
    "contact.text":
      "Ready for the next project? I look forward to hearing from you and building clean, modern, and user-friendly web experiences together.",
    "contact.nameLabel": "Your name",
    "contact.emailLabel": "Your Email",
    "contact.messageLabel": "Your Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "Your Email",
    "contact.messagePlaceholder": "Your Message",
    "contact.policyPrefix": "I've read the",
    "contact.policyLink": "privacy policy",
    "contact.policySuffix": "and agree to the processing of my data as outlined.",
    "contact.send": "Send",

    "footer.legal": "Legal notice"
  },

  de: {
    "brand.role": "developer",

    "nav.whyMe": "Warum ich",
    "nav.skills": "Skills",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    "hero.name": "Kseniya Küntzle",
    "hero.role": "FRONTEND ENTWICKLERIN",

    "whyMe.title": "Warum ich",
    "whyMe.location": "Ich bin in Heilbronn",
    "whyMe.text":
      "Ich bin Frontend-Entwicklerin mit einem starken Blick für saubere Benutzeroberflächen und einer Leidenschaft für flüssige, responsive Nutzererlebnisse. Ich liebe es, Ideen in strukturierten und wartbaren Code umzusetzen und möchte mich ständig weiterentwickeln.",
    "whyMe.button": "Lass uns sprechen",

    "skills.title": "Meine Skills",
    "skills.learningTitle": "Ich lerne aktuell",
    "skills.learningText":
      "Ich lerne mit Leidenschaft weiter. Jede neue Herausforderung ist eine Chance zu wachsen, mich zu verbessern und neue Fähigkeiten zu entwickeln.",

    "projects.title": "Meine Projekte",
    "projects.tech": "Technologien",
    "projects.live": "Live Test",
    "projects.tabJoin": "1. Join",
    "projects.tabElPollo": "2. El Pollo Loco",
    "projects.tabOngoing": "3. Laufendes Projekt",

    "projects.join.aboutTitle": "Über das Projekt",
    "projects.join.duration": "Dauer: 1,5 Monate",
    "projects.join.aboutText":
      "Join ist eine Aufgabenverwaltungs-Anwendung, inspiriert von Kanban und als gemeinsames Teamprojekt entstanden. Nutzer können Aufgaben per Drag-and-Drop erstellen, organisieren und verwalten, Benutzer und Kategorien zuweisen, Task-Karten bearbeiten und Subtasks hinzufügen.",
    "projects.join.processTitle": "Wie ich meinen Arbeitsprozess organisiert habe",
    "projects.join.processText":
      "In unserem Zweierteam haben wir das Projekt in Epics aufgeteilt und Verantwortlichkeiten verteilt. Wir haben User Stories, Features und Tasks mit Git Branching organisiert. Sobald ein Feature fertig war, haben wir unsere Arbeit zusammengeführt, damit kein Code verloren geht. So blieb der Entwicklungsprozess strukturiert und die Zusammenarbeit lief reibungslos.",
    "projects.join.teamTitle": "Meine Erfahrung in der Teamarbeit",
    "projects.join.teamText":
      "Ich habe die Zusammenarbeit in unserem Team sehr genossen. Wir hatten tägliche Meetings, um den Fortschritt zu verfolgen und während des gesamten Entwicklungsprozesses abgestimmt zu bleiben. Wir haben uns gegenseitig unterstützt und am Ende gemeinsam getestet.",

    "projects.elpollo.aboutTitle": "Über das Projekt",
    "projects.elpollo.duration": "Dauer: 1 Monat",
    "projects.elpollo.aboutText":
      "El Pollo Loco ist ein 2D-Jump-and-Run-Spiel auf Basis objektorientierter Programmierung. Spieler steuern Pepe durch verschiedene Level, sammeln Gegenstände und bekämpfen Gegner, indem sie scharfe Salsa-Flaschen werfen, um den Endboss zu besiegen.",
    "projects.elpollo.processTitle": "Wie ich meinen Arbeitsprozess organisiert habe",
    "projects.elpollo.processText":
      "Das Projekt wurde in mehrere User Stories gegliedert, was einen klaren und organisierten Entwicklungsprozess ermöglicht hat. Objektorientierte Programmierung half mir, den Code besser zu strukturieren, indem Methoden sinnvollen Klassen zugeordnet und zentrale OOP-Prinzipien wie Kapselung, Abstraktion, Vererbung und Polymorphismus angewendet wurden.",
    "projects.elpollo.learnedTitle": "Was ich gelernt habe",
    "projects.elpollo.learnedText":
      "Das Entwerfen und Implementieren von Klassen und Methoden hat meine Entwicklungsfähigkeiten deutlich verbessert. Dadurch konnte ich modulareren, flexibleren und wiederverwendbaren Code schreiben und mein Verständnis für skalierbare Anwendungsstrukturen vertiefen.",

    "projects.ongoing.aboutTitle": "Über die Projekte",
    "projects.ongoing.duration": "Dauer: laufend",
    "projects.ongoing.aboutText":
      "Meine kommenden Projekte werden sich darauf konzentrieren, meine Fähigkeiten in Angular und TypeScript zu zeigen.",
    "projects.ongoing.memoryTitle": "Memory Game",
    "projects.ongoing.memoryText":
      "Ich erweitere aktuell meine Frontend-Kenntnisse mit TypeScript und SCSS, um skalierbarere und wartbarere Anwendungen zu entwickeln.",
    "projects.ongoing.pollTitle": "Poll App",
    "projects.ongoing.pollText":
      "Eines meiner nächsten Projekte ist eine Echtzeit-Umfrage-App mit Angular und Supabase, bei der Nutzer Umfragen erstellen und Live-Ergebnisse in Echtzeit verfolgen können.",

    "references.titleMain": "Du suchst eine Teamplayerin?",
    "references.titleSub": "Das sagen meine Kolleginnen über mich",
    "references.project": "Projekt",
    "references.linkedin": "LinkedIn Profil",
    "references.maya":
      "Die Zusammenarbeit mit Kseniya war eine tolle Erfahrung. Sie ist zuverlässig, strukturiert und eine starke Teamplayerin.",
    "references.laura":
      "Kseniya ist aufmerksam und unterstützend, mit Kreativität, Geduld und dem starken Wunsch, sich weiterzuentwickeln.",
    "references.elli":
      "Kseniya ist motiviert, zuverlässig und hat ein gutes Gespür für sauberes Design. Sie ist eine wertvolle Teamkollegin.",

    "contact.title": "Kontakt",
    "contact.text":
      "Bereit für das nächste Projekt? Ich freue mich darauf, von dir zu hören und gemeinsam saubere, moderne und benutzerfreundliche Web-Erlebnisse zu entwickeln.",
    "contact.nameLabel": "Dein Name",
    "contact.emailLabel": "Deine E-Mail",
    "contact.messageLabel": "Deine Nachricht",
    "contact.namePlaceholder": "Dein Name",
    "contact.emailPlaceholder": "Deine E-Mail",
    "contact.messagePlaceholder": "Deine Nachricht",
    "contact.policyPrefix": "Ich habe die",
    "contact.policyLink": "Datenschutzerklärung",
    "contact.policySuffix": "gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
    "contact.send": "Senden",

    "footer.legal": "Impressum"
  }
};

function setText(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value) element.textContent = value;
  });
}

function setPlaceholders(lang) {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = translations[lang]?.[key];
    if (value) element.placeholder = value;
  });
}

function syncButtons(lang) {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function syncEgg(lang) {
  document.querySelectorAll(".language_switch_icon").forEach((switcher) => {
    switcher.dataset.active = lang;
  });
}

function applyLanguage(lang) {
  setText(lang);
  setPlaceholders(lang);
  syncButtons(lang);
  syncEgg(lang);
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
}

function initLanguageSwitch() {
  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
}

window.applyLanguage = applyLanguage;
document.addEventListener("DOMContentLoaded", initLanguageSwitch);
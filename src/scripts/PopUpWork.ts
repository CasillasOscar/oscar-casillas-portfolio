const popup = document.getElementById("popup-work");
const popupContent = document.getElementById("popup-work-content");
const titleEl = document.getElementById("work-title");
const objectiveContainer = document.getElementById("work-objective-container");
const objectiveEl = document.getElementById("work-objective");
const functionsContainer = document.getElementById("work-functions-container");
const functionsList = document.getElementById("work-functions");
const techContainer = document.getElementById("work-technologies");
const urlContainer = document.getElementById("work-url-container");
const urlLink = document.getElementById("work-url") as HTMLAnchorElement;

function openPopup(data: any) {
  if (!popup || !popupContent) return;

  if (titleEl) titleEl.textContent = data.title;

  // Gestionar Objetivo
  if (data.objective) {
    if (objectiveContainer) objectiveContainer.classList.remove("hidden");
    if (objectiveEl) objectiveEl.textContent = data.objective;
  } else {
    if (objectiveContainer) objectiveContainer.classList.add("hidden");
  }

  // Gestionar Funciones
  if (data.jobFunctions && data.jobFunctions.length > 0) {
    if (functionsContainer) functionsContainer.classList.remove("hidden");
    if (functionsList) {
      functionsList.innerHTML = data.jobFunctions
        .map((func: string) => `<li>${func}</li>`)
        .join("");
    }
  } else {
    if (functionsContainer) functionsContainer.classList.add("hidden");
  }

  if (techContainer) {
    techContainer.innerHTML = data.technologies
      .map(
        (tech: string) =>
          `<span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800 text-gray-300 text-sm font-medium flex items-center gap-1 hover:border-gray-500 transition-colors cursor-default">
        ${tech}
      </span>`
      )
      .join("");
  }

  if (data.url) {
    urlContainer?.classList.remove("hidden");
    if (urlLink) urlLink.href = data.url;
  } else {
    urlContainer?.classList.add("hidden");
  }

  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.remove("opacity-0");
    popupContent.classList.remove("scale-95");
    popupContent.classList.add("scale-100");
  }, 10);
}

function closePopup() {
  if (!popup || !popupContent) return;
  popup.classList.add("opacity-0");
  popupContent.classList.remove("scale-100");
  popupContent.classList.add("scale-95");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 300);
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const btn = target.closest(".view-work-btn");

  if (btn) {
    const data = {
      title: btn.getAttribute("data-title"),
      objective: btn.getAttribute("data-objective"),
      technologies: JSON.parse(btn.getAttribute("data-technologies") || "[]"),
      url: btn.getAttribute("data-url"),
      jobFunctions: JSON.parse(btn.getAttribute("data-jobFunctions") || "[]"),
    };
    openPopup(data);
  }

  if (target === popup || target.closest("#close-popup-work")) {
    closePopup();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popup?.classList.contains("hidden")) {
    closePopup();
  }
});
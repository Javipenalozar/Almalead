const modules = [
  {
    id: "m1",
    title: "Fundamentos ontologicos y el observador",
    description: "Lenguaje, emociones y cuerpo como base del observador ontologico.",
    hours: 1,
    type: "O-L-E-C",
  },
  {
    id: "m2",
    title: "Lenguaje que crea realidad",
    description: "Actos linguisticos, declaraciones, pedidos, ofertas, promesas y juicios fundados.",
    hours: 1,
    type: "Ontologia",
  },
  {
    id: "m3",
    title: "Emocion y cuerpo",
    description: "Apertura al aprendizaje, estados emocionales y corporalidad que habilita accion.",
    hours: 1,
    type: "Emocional",
  },
  {
    id: "m4",
    title: "Diseno de futuro y coordinacion de acciones",
    description: "Acciones sostenibles, compromisos, promesas cumplidas e indicadores simples.",
    hours: 1,
    type: "Accion",
  },
  {
    id: "m5",
    title: "Escucha profunda y feedback que transforma",
    description: "Conversaciones poderosas, retroalimentacion y cuidado del vinculo.",
    hours: 1,
    type: "Conversacion",
  },
  {
    id: "m6",
    title: "PNL etica al servicio del proceso",
    description: "Anclajes y reencuadres usados con responsabilidad dentro del acompanamiento.",
    hours: 1,
    type: "Herramientas",
  },
  {
    id: "m7",
    title: "Coaching emocional aplicado",
    description: "Ansiedad, estres, limites y gestion emocional dentro del marco del coaching.",
    hours: 1,
    type: "Aplicacion",
  },
  {
    id: "m8",
    title: "Coaching educativo",
    description: "Habitos, aprendizaje, evaluacion y acompanamiento de procesos formativos.",
    hours: 1,
    type: "Educativo",
  },
  {
    id: "m9",
    title: "Etica profesional y consentimiento informado",
    description: "Limites del coaching, consentimiento informado y derivacion responsable.",
    hours: 1,
    type: "Etica",
  },
  {
    id: "m10",
    title: "Practica supervisada I",
    description: "Casos guiados, role plays, grabaciones y retroalimentacion supervisada.",
    hours: 1,
    type: "Supervision",
  },
  {
    id: "m11",
    title: "Practica supervisada II",
    description: "Casos del participante, evidencias y feedback con metricas de progreso.",
    hours: 1,
    type: "Supervision",
  },
  {
    id: "m12",
    title: "Integracion, evaluacion y certificacion",
    description: "Evaluacion final, carpeta de entregables y cierre del proceso de certificacion.",
    hours: 1,
    type: "Cierre",
  },
];

const resources = [
  ["Marco O-L-E-C", "Observador, Lenguaje, Emocion y Cuerpo como eje metodologico.", "Guia"],
  ["Practica supervisada", "Role plays, grabaciones, feedback y casos reales de la cohorte.", "Lab"],
  ["Metricas de progreso", "Conversaciones poderosas semanales, promesas cumplidas y acciones diarias de 5 minutos.", "Tablero"],
  ["Marco etico", "Limites del coaching, consentimiento informado y derivacion responsable.", "PDF"],
];

let practices = [
  ["Role play O-L-E-C", "2026-02-17", "Completada", "Observador, lenguaje, emocion y cuerpo"],
  ["Grabacion de conversacion poderosa", "2026-03-03", "En revision", "Pendiente de feedback supervisado"],
  ["Caso del participante", "2026-03-17", "Pendiente", "Subir consentimiento informado"],
];

const state = {
  completed: JSON.parse(localStorage.getItem("almalead.completed") || "[]"),
  reflection: localStorage.getItem("almalead.reflection") || "",
  filter: "all",
};

const moduleList = document.querySelector("#moduleList");
const resourceList = document.querySelector("#resourceList");
const practiceRows = document.querySelector("#practiceRows");
const certChecklist = document.querySelector("#certChecklist");
const radialProgress = document.querySelector(".radial-progress");
const overallProgress = document.querySelector("#overallProgress");
const hoursCount = document.querySelector("#hoursCount");
const practiceCount = document.querySelector("#practiceCount");
const certStatus = document.querySelector("#certStatus");
const reflection = document.querySelector("#reflection");
const saveState = document.querySelector("#saveState");

function persist() {
  localStorage.setItem("almalead.completed", JSON.stringify(state.completed));
}

function calculateProgress() {
  const completedHours = modules
    .filter((module) => state.completed.includes(module.id))
    .reduce((sum, module) => sum + module.hours, 0);
  const totalHours = modules.reduce((sum, module) => sum + module.hours, 0);
  const modulePercent = completedHours / totalHours;
  const practicePercent = practices.filter((practice) => practice[2] === "Completada").length / 12;
  const blended = Math.round((modulePercent * 0.75 + practicePercent * 0.25) * 100);

  return { completedHours, totalHours, blended };
}

function renderModules() {
  moduleList.innerHTML = "";
  const filtered = modules.filter((module) => {
    const done = state.completed.includes(module.id);
    if (state.filter === "done") return done;
    if (state.filter === "pending") return !done;
    return true;
  });

  filtered.forEach((module) => {
    const done = state.completed.includes(module.id);
    const card = document.createElement("article");
    card.className = `module-card ${done ? "done" : ""}`;
    card.innerHTML = `
      <div>
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <div class="module-meta">
          <span class="pill">Modulo ${modules.findIndex((item) => item.id === module.id) + 1}</span>
          <span class="pill">${module.type}</span>
          <span class="pill">${done ? "Completado" : "En curso"}</span>
        </div>
      </div>
      <div class="module-actions">
        <strong>${done ? "100%" : "0%"}</strong>
        <button class="module-toggle" type="button" aria-label="Cambiar estado de ${module.title}" data-module="${module.id}">
          <span></span>
        </button>
      </div>
    `;
    moduleList.appendChild(card);
  });
}

function renderResources() {
  resourceList.innerHTML = resources
    .map(([title, description, type]) => `
      <article class="resource-card">
        <div>
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
        <span class="pill">${type}</span>
      </article>
    `)
    .join("");
}

function renderPractices() {
  practiceRows.innerHTML = practices
    .map(([activity, date, status, note]) => {
      const className = status === "Completada" ? "done" : status === "En revision" ? "review" : "pending";
      return `
        <tr>
          <td>${activity}</td>
          <td>${date}</td>
          <td><span class="status ${className}">${status}</span></td>
          <td>${note}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCertification() {
  const { completedHours, totalHours, blended } = calculateProgress();
  const donePractices = practices.filter((practice) => practice[2] === "Completada").length;
  const items = [
    ["12 modulos completados", completedHours >= totalHours],
    ["Asistencia minima 80-85%", completedHours >= 10],
    ["12 practicas documentadas", donePractices >= 12],
    ["Bitacora reflexiva activa", reflection.value.trim().length > 20],
    ["Evaluacion final habilitada", blended >= 85],
  ];

  certChecklist.innerHTML = items
    .map(([label, checked]) => `
      <div class="check-item">
        <span>${label}</span>
        <strong>${checked ? "Listo" : "Pendiente"}</strong>
      </div>
    `)
    .join("");
}

function renderMetrics() {
  const { completedHours, totalHours, blended } = calculateProgress();
  const donePractices = practices.filter((practice) => practice[2] === "Completada").length;

  radialProgress.style.setProperty("--percent", blended);
  overallProgress.textContent = `${blended}%`;
  hoursCount.textContent = `${completedHours}/${totalHours}`;
  practiceCount.textContent = `${donePractices}/12`;
  certStatus.textContent = blended >= 85 ? "Certificable" : "En curso";
}

function renderAll() {
  renderModules();
  renderResources();
  renderPractices();
  renderMetrics();
  renderCertification();
}

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-module]");
  if (toggle) {
    const moduleId = toggle.dataset.module;
    state.completed = state.completed.includes(moduleId)
      ? state.completed.filter((id) => id !== moduleId)
      : [...state.completed, moduleId];
    persist();
    renderAll();
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderModules();
  }

  if (event.target.matches("[data-open-panel='agenda']")) {
    document.querySelector("#agendaPanel").classList.add("open");
    document.querySelector("#agendaPanel").setAttribute("aria-hidden", "false");
  }

  if (event.target.matches(".close-panel") || event.target.id === "agendaPanel") {
    document.querySelector("#agendaPanel").classList.remove("open");
    document.querySelector("#agendaPanel").setAttribute("aria-hidden", "true");
  }
});

document.querySelector("#saveReflection").addEventListener("click", () => {
  localStorage.setItem("almalead.reflection", reflection.value);
  saveState.textContent = "Bitacora guardada en este navegador.";
  renderCertification();
});

document.querySelector("#addPractice").addEventListener("click", () => {
  const next = practices.length + 1;
  practices = [
    ...practices,
    [`Evidencia registrada ${next}`, new Date().toISOString().slice(0, 10), "En revision", "Pendiente de feedback academico"],
  ];
  renderAll();
});

document.querySelector("#exportSnapshot").addEventListener("click", async (event) => {
  const { completedHours, totalHours, blended } = calculateProgress();
  const snapshot = `Almalead - resumen academico\nAvance: ${blended}%\nModulos: ${completedHours}/${totalHours}\nPracticas: ${practices.length}\nEstado: ${certStatus.textContent}`;
  try {
    await navigator.clipboard.writeText(snapshot);
    event.target.textContent = "Resumen copiado";
  } catch {
    event.target.textContent = "No se pudo copiar";
  }
  setTimeout(() => {
    event.target.textContent = "Exportar resumen";
  }, 1600);
});

reflection.value = state.reflection;
renderAll();

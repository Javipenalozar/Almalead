const modules = [
  {
    id: "m1",
    title: "Fundamentos de coaching Almalead",
    description: "Etica, contrato, presencia, rol del coach y limites de acompanamiento.",
    hours: 10,
    type: "Base",
  },
  {
    id: "m2",
    title: "Escucha profunda y preguntas poderosas",
    description: "Practicas para distinguir hechos, interpretaciones, emociones y necesidades.",
    hours: 12,
    type: "Laboratorio",
  },
  {
    id: "m3",
    title: "Liderazgo consciente",
    description: "Autoconocimiento, proposito, toma de decisiones y conversaciones dificiles.",
    hours: 14,
    type: "Modulo central",
  },
  {
    id: "m4",
    title: "Diseno de procesos de transformacion",
    description: "Objetivos, indicadores, sesiones, acuerdos y cierre del proceso.",
    hours: 12,
    type: "Aplicacion",
  },
  {
    id: "m5",
    title: "Practica supervisada",
    description: "Casos reales, retroalimentacion, bitacora y criterios de desempeno.",
    hours: 16,
    type: "Supervision",
  },
  {
    id: "m6",
    title: "Evaluacion final y certificacion",
    description: "Sesion observada, entrevista academica y carpeta de evidencias.",
    hours: 8,
    type: "Cierre",
  },
];

const resources = [
  ["Manual del estudiante", "Guia PDF con reglas academicas, rubricas y cronograma.", "PDF"],
  ["Plantilla de bitacora", "Documento editable para registrar aprendizajes semanales.", "DOC"],
  ["Bibliografia esencial", "Lecturas base de coaching, liderazgo y presencia.", "Lista"],
  ["Grabaciones de clase", "Repositorio de sesiones sincrono y material complementario.", "Video"],
];

let practices = [
  ["Sesion de diagnostico", "2026-07-02", "Completada", "Aprobada por mentora"],
  ["Conversacion de objetivos", "2026-07-08", "En revision", "Pendiente de retroalimentacion"],
  ["Practica con coachee externo", "2026-07-16", "Pendiente", "Subir consentimiento"],
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
          <span class="pill">${module.hours} horas</span>
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
    ["72 horas academicas", completedHours >= totalHours],
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
    [`Practica registrada ${next}`, new Date().toISOString().slice(0, 10), "En revision", "Pendiente de lectura academica"],
  ];
  renderAll();
});

document.querySelector("#exportSnapshot").addEventListener("click", async (event) => {
  const { completedHours, totalHours, blended } = calculateProgress();
  const snapshot = `Almalead - resumen academico\nAvance: ${blended}%\nHoras: ${completedHours}/${totalHours}\nPracticas: ${practices.length}\nEstado: ${certStatus.textContent}`;
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

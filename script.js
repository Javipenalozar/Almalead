const modules = [
  {
    id: "m1",
    title: "Fundamentos ontologicos y el observador",
    description: "Lenguaje, emociones y cuerpo como base del observador ontologico.",
    evaluation: "Mapa personal del observador: lenguaje, emocion y cuerpo.",
    hours: 1,
    type: "O-L-E-C",
  },
  {
    id: "m2",
    title: "Lenguaje que crea realidad",
    description: "Actos linguisticos, declaraciones, pedidos, ofertas, promesas y juicios fundados.",
    evaluation: "Analisis de actos linguisticos en una conversacion real.",
    hours: 1,
    type: "Ontologia",
  },
  {
    id: "m3",
    title: "Emocion y cuerpo",
    description: "Apertura al aprendizaje, estados emocionales y corporalidad que habilita accion.",
    evaluation: "Bitacora de estados emocionales y practica corporal aplicada.",
    hours: 1,
    type: "Emocional",
  },
  {
    id: "m4",
    title: "Diseno de futuro y coordinacion de acciones",
    description: "Acciones sostenibles, compromisos, promesas cumplidas e indicadores simples.",
    evaluation: "Diseno de futuro con promesas, pedidos y acciones medibles.",
    hours: 1,
    type: "Accion",
  },
  {
    id: "m5",
    title: "Escucha profunda y feedback que transforma",
    description: "Conversaciones poderosas, retroalimentacion y cuidado del vinculo.",
    evaluation: "Registro de feedback y escucha profunda en role play.",
    hours: 1,
    type: "Conversacion",
  },
  {
    id: "m6",
    title: "PNL etica al servicio del proceso",
    description: "Anclajes y reencuadres usados con responsabilidad dentro del acompanamiento.",
    evaluation: "Caso breve con reencuadre o anclaje usado eticamente.",
    hours: 1,
    type: "Herramientas",
  },
  {
    id: "m7",
    title: "Coaching emocional aplicado",
    description: "Ansiedad, estres, limites y gestion emocional dentro del marco del coaching.",
    evaluation: "Plan de acompanamiento emocional con limites y derivacion responsable.",
    hours: 1,
    type: "Aplicacion",
  },
  {
    id: "m8",
    title: "Coaching educativo",
    description: "Habitos, aprendizaje, evaluacion y acompanamiento de procesos formativos.",
    evaluation: "Diseno de habito o ruta de aprendizaje con indicadores.",
    hours: 1,
    type: "Educativo",
  },
  {
    id: "m9",
    title: "Etica profesional y consentimiento informado",
    description: "Limites del coaching, consentimiento informado y derivacion responsable.",
    evaluation: "Entrega de consentimiento informado y analisis de limites.",
    hours: 1,
    type: "Etica",
  },
  {
    id: "m10",
    title: "Practica supervisada I",
    description: "Casos guiados, role plays, grabaciones y retroalimentacion supervisada.",
    evaluation: "Grabacion de caso guiado con autoevaluacion y feedback.",
    hours: 1,
    type: "Supervision",
  },
  {
    id: "m11",
    title: "Practica supervisada II",
    description: "Casos del participante, evidencias y feedback con metricas de progreso.",
    evaluation: "Caso real del participante con evidencias y metricas.",
    hours: 1,
    type: "Supervision",
  },
  {
    id: "m12",
    title: "Integracion, evaluacion y certificacion",
    description: "Evaluacion final, carpeta de entregables y cierre del proceso de certificacion.",
    evaluation: "Carpeta final de evidencias y evaluacion integradora.",
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
  approvals: JSON.parse(localStorage.getItem("almalead.approvals") || "null"),
  reflection: localStorage.getItem("almalead.reflection") || "",
  filter: "all",
};

if (!state.approvals) {
  const completed = JSON.parse(localStorage.getItem("almalead.completed") || "[]");
  state.approvals = Object.fromEntries(
    modules.map((module, index) => {
      const legacyApproved = completed.includes(module.id);
      return [module.id, legacyApproved ? "approved" : index === 0 ? "available" : "locked"];
    }),
  );
}

const moduleList = document.querySelector("#moduleList");
const evaluationList = document.querySelector("#evaluationList");
const resourceList = document.querySelector("#resourceList");
const practiceRows = document.querySelector("#practiceRows");
const certChecklist = document.querySelector("#certChecklist");
const approvalRows = document.querySelector("#approvalRows");
const radialProgress = document.querySelector(".radial-progress");
const overallProgress = document.querySelector("#overallProgress");
const hoursCount = document.querySelector("#hoursCount");
const practiceCount = document.querySelector("#practiceCount");
const certStatus = document.querySelector("#certStatus");
const reflection = document.querySelector("#reflection");
const saveState = document.querySelector("#saveState");

function persist() {
  localStorage.setItem("almalead.approvals", JSON.stringify(state.approvals));
}

function getModuleStatus(moduleId) {
  return state.approvals[moduleId] || "locked";
}

function getStatusLabel(status) {
  const labels = {
    approved: "Aprobado",
    submitted: "Evaluacion enviada",
    available: "Disponible",
    locked: "Bloqueado",
  };
  return labels[status] || "Bloqueado";
}

function syncUnlockedModules() {
  modules.forEach((module, index) => {
    const status = getModuleStatus(module.id);
    const previous = modules[index - 1];
    if (index === 0 && status === "locked") {
      state.approvals[module.id] = "available";
    }
    if (previous && getModuleStatus(previous.id) === "approved" && status === "locked") {
      state.approvals[module.id] = "available";
    }
  });
}

function calculateProgress() {
  const completedHours = modules
    .filter((module) => getModuleStatus(module.id) === "approved")
    .reduce((sum, module) => sum + module.hours, 0);
  const totalHours = modules.reduce((sum, module) => sum + module.hours, 0);
  const modulePercent = completedHours / totalHours;
  const practicePercent = practices.filter((practice) => practice[2] === "Completada").length / 12;
  const blended = Math.round((modulePercent * 0.75 + practicePercent * 0.25) * 100);

  return { completedHours, totalHours, blended };
}

function renderModules() {
  syncUnlockedModules();
  moduleList.innerHTML = "";
  const filtered = modules.filter((module) => {
    const done = getModuleStatus(module.id) === "approved";
    if (state.filter === "done") return done;
    if (state.filter === "pending") return !done;
    return true;
  });

  filtered.forEach((module) => {
    const status = getModuleStatus(module.id);
    const done = status === "approved";
    const card = document.createElement("article");
    card.className = `module-card ${done ? "done" : ""} ${status === "locked" ? "locked" : ""}`;
    card.innerHTML = `
      <div>
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <div class="module-meta">
          <span class="pill">Modulo ${modules.findIndex((item) => item.id === module.id) + 1}</span>
          <span class="pill">${module.type}</span>
          <span class="pill">${getStatusLabel(status)}</span>
        </div>
      </div>
      <div class="module-actions">
        <strong>${done ? "100%" : status === "submitted" ? "En revision" : status === "available" ? "Abierto" : "Cerrado"}</strong>
        <button class="ghost-button module-submit" type="button" data-submit-module="${module.id}" ${status === "locked" || status === "approved" || status === "submitted" ? "disabled" : ""}>
          Enviar evaluacion
        </button>
      </div>
    `;
    moduleList.appendChild(card);
  });
}

function renderEvaluations() {
  syncUnlockedModules();
  evaluationList.innerHTML = modules
    .map((module, index) => {
      const status = getModuleStatus(module.id);
      return `
        <article class="evaluation-card ${status}">
          <div>
            <span class="pill">Modulo ${index + 1}</span>
            <h3>${module.title}</h3>
            <p>${module.evaluation}</p>
          </div>
          <div class="evaluation-actions">
            <span class="status ${status === "approved" ? "done" : status === "submitted" ? "review" : "pending"}">${getStatusLabel(status)}</span>
            <button class="primary-button" type="button" data-submit-module="${module.id}" ${status === "available" ? "" : "disabled"}>
              Enviar
            </button>
          </div>
        </article>
      `;
    })
    .join("");
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

function renderApprovals() {
  syncUnlockedModules();
  approvalRows.innerHTML = modules
    .map((module, index) => {
      const status = getModuleStatus(module.id);
      const canApprove = status === "submitted";
      return `
        <tr>
          <td>Modulo ${index + 1}: ${module.title}</td>
          <td>${module.evaluation}</td>
          <td><span class="status ${status === "approved" ? "done" : status === "submitted" ? "review" : "pending"}">${getStatusLabel(status)}</span></td>
          <td>
            <button class="primary-button table-action" type="button" data-approve-module="${module.id}" ${canApprove ? "" : "disabled"}>
              Aprobar paso
            </button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderAll() {
  renderModules();
  renderEvaluations();
  renderResources();
  renderPractices();
  renderMetrics();
  renderCertification();
  renderApprovals();
}

document.addEventListener("click", (event) => {
  const submitButton = event.target.closest("[data-submit-module]");
  if (submitButton && !submitButton.disabled) {
    const moduleId = submitButton.dataset.submitModule;
    if (getModuleStatus(moduleId) === "available") {
      state.approvals[moduleId] = "submitted";
      persist();
      renderAll();
    }
  }

  const approveButton = event.target.closest("[data-approve-module]");
  if (approveButton && !approveButton.disabled) {
    const moduleId = approveButton.dataset.approveModule;
    state.approvals[moduleId] = "approved";
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

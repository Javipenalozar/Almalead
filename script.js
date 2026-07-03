const modules = [
  {
    id: "m1",
    title: "Fundamentos ontológicos y el observador",
    description: "Lenguaje, emociones y cuerpo como base del observador ontológico.",
    evaluation: "Mapa personal del observador: lenguaje, emoción y cuerpo.",
    hours: 1,
    type: "O-L-E-C",
  },
  {
    id: "m2",
    title: "Lenguaje que crea realidad",
    description: "Actos lingüísticos, declaraciones, pedidos, ofertas, promesas y juicios fundados.",
    evaluation: "Análisis de actos lingüísticos en una conversación real.",
    hours: 1,
    type: "Ontología",
  },
  {
    id: "m3",
    title: "Emoción y cuerpo",
    description: "Apertura al aprendizaje, estados emocionales y corporalidad que habilita acción.",
    evaluation: "Bitácora de estados emocionales y práctica corporal aplicada.",
    hours: 1,
    type: "Emocional",
  },
  {
    id: "m4",
    title: "Diseño de futuro y coordinación de acciones",
    description: "Acciones sostenibles, compromisos, promesas cumplidas e indicadores simples.",
    evaluation: "Diseño de futuro con promesas, pedidos y acciones medibles.",
    hours: 1,
    type: "Acción",
  },
  {
    id: "m5",
    title: "Escucha profunda y retroalimentación transformadora",
    description: "Conversaciones poderosas, retroalimentación y cuidado del vínculo.",
    evaluation: "Registro de retroalimentación y escucha profunda en una práctica de rol.",
    hours: 1,
    type: "Conversación",
  },
  {
    id: "m6",
    title: "PNL ética al servicio del proceso",
    description: "Anclajes y reencuadres usados con responsabilidad dentro del acompañamiento.",
    evaluation: "Caso breve con reencuadre o anclaje usado éticamente.",
    hours: 1,
    type: "Herramientas",
  },
  {
    id: "m7",
    title: "Coaching emocional aplicado",
    description: "Ansiedad, estrés, límites y gestión emocional dentro del marco del coaching.",
    evaluation: "Plan de acompañamiento emocional con límites y derivación responsable.",
    hours: 1,
    type: "Aplicación",
  },
  {
    id: "m8",
    title: "Coaching educativo",
    description: "Hábitos, aprendizaje, evaluación y acompañamiento de procesos formativos.",
    evaluation: "Diseño de hábito o ruta de aprendizaje con indicadores.",
    hours: 1,
    type: "Educativo",
  },
  {
    id: "m9",
    title: "Ética profesional y consentimiento informado",
    description: "Límites del coaching, consentimiento informado y derivación responsable.",
    evaluation: "Entrega de consentimiento informado y análisis de límites.",
    hours: 1,
    type: "Ética",
  },
  {
    id: "m10",
    title: "Práctica supervisada I",
    description: "Casos guiados, prácticas de rol, grabaciones y retroalimentación supervisada.",
    evaluation: "Grabación de caso guiado con autoevaluación y retroalimentación.",
    hours: 1,
    type: "Supervisión",
  },
  {
    id: "m11",
    title: "Práctica supervisada II",
    description: "Casos del participante, evidencias y retroalimentación con métricas de progreso.",
    evaluation: "Caso real del participante con evidencias y métricas.",
    hours: 1,
    type: "Supervisión",
  },
  {
    id: "m12",
    title: "Integración, evaluación y certificación",
    description: "Evaluación final, carpeta de entregables y cierre del proceso de certificación.",
    evaluation: "Carpeta final de evidencias y evaluación integradora.",
    hours: 1,
    type: "Cierre",
  },
];

const cohortSchedule = {
  startsOn: "2026-04-21",
  classWeekday: "martes",
  classTime: "7:00 p. m.",
  timezone: "America/Bogota",
};

const moduleSchedule = [
  ["2026-04-28", "2026-04-29T00:00:00-05:00"],
  ["2026-05-05", "2026-05-06T00:00:00-05:00"],
  ["2026-05-12", "2026-05-13T00:00:00-05:00"],
  ["2026-05-19", "2026-05-20T00:00:00-05:00"],
  ["2026-05-26", "2026-05-27T00:00:00-05:00"],
  ["2026-06-02", "2026-06-03T00:00:00-05:00"],
  ["2026-06-09", "2026-06-10T00:00:00-05:00"],
  ["2026-06-16", "2026-06-17T00:00:00-05:00"],
  ["2026-06-23", "2026-06-24T00:00:00-05:00"],
  ["2026-06-30", "2026-07-01T00:00:00-05:00"],
  ["2026-07-07", "2026-07-08T00:00:00-05:00"],
  ["2026-07-14", "2026-07-15T00:00:00-05:00"],
];

modules.forEach((module, index) => {
  const [classDate, unlockAt] = moduleSchedule[index];
  module.classDate = classDate;
  module.unlockAt = unlockAt;
});

const resources = [
  ["Marco O-L-E-C", "Observador, Lenguaje, Emoción y Cuerpo como eje metodológico.", "Guía"],
  ["Práctica supervisada", "Prácticas de rol, grabaciones, retroalimentación y casos reales de la cohorte.", "Laboratorio"],
  ["Métricas de progreso", "Conversaciones poderosas semanales, promesas cumplidas y acciones diarias de 5 minutos.", "Tablero"],
  ["Marco ético", "Límites del coaching, consentimiento informado y derivación responsable.", "PDF"],
];

let practices = [
  ["Práctica de rol O-L-E-C", "2026-05-06", "Completada", "Observador, lenguaje, emoción y cuerpo"],
  ["Grabación de conversación poderosa", "2026-05-20", "En revisión", "Pendiente de retroalimentación supervisada"],
  ["Caso del participante", "2026-06-03", "Pendiente", "Subir consentimiento informado"],
];

const calendarEvents = [
  ["Mar 21 abr", "Inicio de cohorte", "Bienvenida y encuadre del proceso · 7:00 p. m.", "Apertura"],
  ["Mar 28 abr", "Módulo 1", "Fundamentos ontológicos y el observador · 7:00 p. m.", "Clase"],
  ["Mié 29 abr", "Activación módulo 1", "Disponible desde las 00:00 h", "Aula"],
  ["Mar 7 jul", "Módulo 11", "Práctica supervisada II · 7:00 p. m.", "Clase"],
  ["Mié 8 jul", "Activación módulo 11", "Disponible desde las 00:00 h", "Aula"],
];

const lessons = [
  ["Módulo 1", "El observador ontológico", "Video · Guía PDF · práctica guiada", 100],
  ["Módulo 2", "Actos lingüísticos y juicios", "Clase grabada · plantilla de conversación", 100],
  ["Módulo 3", "Emoción, cuerpo y aprendizaje", "Audio somático · bitácora emocional", 100],
  ["Módulo 4", "Diseño de futuro", "Workbook · caso aplicado · evaluación", 42],
  ["Módulo 5", "Escucha y retroalimentación", "Práctica de rol · rúbrica de escucha", 0],
  ["Módulo 6", "PNL ética aplicada", "Lectura · práctica de reencuadre", 0],
];

const journalEntries = [
  ["Observador", "Detecté que mi juicio principal aparece cuando el coachee duda de su decisión.", "Hace 2 días"],
  ["Lenguaje", "Convertí una queja en pedido concreto con condición de satisfacción.", "Hace 5 días"],
  ["Emoción", "Trabajé apertura al aprendizaje antes de la práctica supervisada.", "Hace 1 semana"],
];

const evidenceItems = [
  ["Grabación de conversación", "video/mp4", "Módulo 5", "En revisión"],
  ["Bitácora emocional", "application/pdf", "Módulo 3", "Aprobada"],
  ["Audio de práctica", "audio/m4a", "Módulo 2", "Aprobada"],
  ["Consentimiento informado", "application/pdf", "Módulo 9", "Pendiente"],
];

const students = [
  ["Mariana Rojas", "1020304050", "Módulo 5", "En revisión", 38],
  ["Carlos Méndez", "1002457812", "Módulo 3", "Activo", 25],
  ["Laura Pérez", "52788441", "Módulo 2", "Aprobado", 18],
  ["Andrés Gómez", "79881234", "Módulo 1", "Pendiente", 8],
];

const defaultPreEnrollments = [
  {
    document: "1020304050",
    email: "estudiante@almalead.com",
    name: "Estudiante Almalead",
    initials: "EA",
    cohort: "Certificación en Coaching 2026",
    status: "pending",
  },
];

const defaultStaff = [
  {
    name: "Mariana Torres",
    email: "mariana@almalead.com",
    role: "coach",
    assignment: "Mentora de cohorte y supervisión grupal",
    status: "active",
  },
  {
    name: "Dirección Académica",
    email: "admin@almalead.com",
    role: "admin",
    assignment: "Aprobaciones, evaluaciones y certificación",
    status: "active",
  },
];

const state = {
  approvals: JSON.parse(localStorage.getItem("almalead.approvals") || "null"),
  reflection: localStorage.getItem("almalead.reflection") || "",
  preEnrollments: JSON.parse(localStorage.getItem("almalead.preEnrollments") || "null") || defaultPreEnrollments,
  staff: JSON.parse(localStorage.getItem("almalead.staff") || "null") || defaultStaff,
  filter: "all",
};

const demoUsers = {
  estudiante: { password: "almalead2026", name: "Estudiante Almalead", initials: "EA" },
  admin: { password: "admin2026", name: "Dirección Académica", initials: "DA" },
};

const preEnrollments = state.preEnrollments;

if (!state.approvals) {
  const completed = JSON.parse(localStorage.getItem("almalead.completed") || "[]");
  state.approvals = Object.fromEntries(
    modules.map((module, index) => {
      const legacyApproved = completed.includes(module.id);
      return [module.id, legacyApproved ? "approved" : "locked"];
    }),
  );
}

const moduleList = document.querySelector("#moduleList");
const loginForm = document.querySelector("#loginForm");
const loginState = document.querySelector("#loginState");
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
const logoutButton = document.querySelector("#logoutButton");
const profileButton = document.querySelector(".profile-button");
const profileName = document.querySelector("#profileName");
const passwordEye = document.querySelector(".password-eye");
const registerForm = document.querySelector("#registerForm");
const registerState = document.querySelector("#registerState");
const recoveryForm = document.querySelector("#recoveryForm");
const recoveryState = document.querySelector("#recoveryState");
const calendarList = document.querySelector("#calendarList");
const lessonGrid = document.querySelector("#lessonGrid");
const journalList = document.querySelector("#journalList");
const evidenceLibrary = document.querySelector("#evidenceLibrary");
const studentGrid = document.querySelector("#studentGrid");
const preEnrollmentForm = document.querySelector("#preEnrollmentForm");
const preEnrollmentState = document.querySelector("#preEnrollmentState");
const preEnrollmentList = document.querySelector("#preEnrollmentList");
const staffForm = document.querySelector("#staffForm");
const staffState = document.querySelector("#staffState");
const staffList = document.querySelector("#staffList");

function applySession(user) {
  document.body.classList.remove("auth-locked");
  if (user) {
    profileName.textContent = user.name;
    profileButton.querySelector("span").textContent = user.initials;
  }
}

function restoreSession() {
  const savedUser = JSON.parse(sessionStorage.getItem("almalead.session") || "null");
  if (savedUser) applySession(savedUser);
}

function openAuthPanel(panelId) {
  document.querySelectorAll(".auth-panel").forEach((panel) => {
    const isTarget = panel.id === panelId;
    panel.classList.toggle("open", isTarget);
    panel.setAttribute("aria-hidden", String(!isTarget));
  });
}

function closeAuthPanels() {
  document.querySelectorAll(".auth-panel").forEach((panel) => {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  });
}

function persist() {
  localStorage.setItem("almalead.approvals", JSON.stringify(state.approvals));
}

function persistRoster() {
  localStorage.setItem("almalead.preEnrollments", JSON.stringify(state.preEnrollments));
  localStorage.setItem("almalead.staff", JSON.stringify(state.staff));
}

function formatDate(dateInput, options = {}) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "short",
    timeZone: cohortSchedule.timezone,
    ...options,
  }).format(new Date(`${dateInput}T12:00:00-05:00`));
}

function formatUnlockDate(unlockAt) {
  const date = unlockAt.slice(0, 10);
  return `${formatDate(date, { weekday: "short" })} · 00:00 h`;
}

function isModuleUnlocked(module) {
  return new Date(module.unlockAt).getTime() <= Date.now();
}

function getModuleStatus(moduleId) {
  const module = modules.find((item) => item.id === moduleId);
  const savedStatus = state.approvals[moduleId] || "locked";
  if (!module) return savedStatus;
  if (savedStatus === "approved" || savedStatus === "submitted") return savedStatus;
  return isModuleUnlocked(module) ? "available" : "locked";
}

function getStatusLabel(status) {
  const labels = {
    approved: "Aprobado",
    submitted: "Evaluación enviada",
    available: "Disponible",
    locked: "Bloqueado",
  };
  return labels[status] || "Bloqueado";
}

function syncUnlockedModules() {
  modules.forEach((module) => {
    const savedStatus = state.approvals[module.id] || "locked";
    if (savedStatus === "approved" || savedStatus === "submitted") return;
    if (isModuleUnlocked(module)) {
      state.approvals[module.id] = "available";
    } else {
      state.approvals[module.id] = "locked";
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
          <span class="pill">Módulo ${modules.findIndex((item) => item.id === module.id) + 1}</span>
          <span class="pill">${module.type}</span>
          <span class="pill">Clase ${formatDate(module.classDate)}</span>
          <span class="pill">Activa ${formatUnlockDate(module.unlockAt)}</span>
          <span class="pill">${getStatusLabel(status)}</span>
        </div>
      </div>
      <div class="module-actions">
        <strong>${done ? "100%" : status === "submitted" ? "En revisión" : status === "available" ? "Abierto" : "Cerrado"}</strong>
        <button class="ghost-button module-submit" type="button" data-submit-module="${module.id}" ${status === "locked" || status === "approved" || status === "submitted" ? "disabled" : ""}>
          Enviar evaluación
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
            <span class="pill">Módulo ${index + 1}</span>
            <span class="pill">Disponible ${formatUnlockDate(module.unlockAt)}</span>
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

function renderCalendar() {
  calendarList.innerHTML = calendarEvents
    .map(([day, title, detail, type]) => `
      <article class="calendar-item">
        <time>${day}</time>
        <div>
          <strong>${title}</strong>
          <span>${detail}</span>
        </div>
        <em>${type}</em>
      </article>
    `)
    .join("");
}

function renderLessons() {
  lessonGrid.innerHTML = lessons
    .map(([moduleName, title, content, progress]) => `
      <article class="lesson-card">
        <div>
          <span class="pill">${moduleName}</span>
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
        <div class="lesson-progress" style="--lesson-progress: ${progress}">
          <strong>${progress}%</strong>
        </div>
      </article>
    `)
    .join("");
}

function renderJournal() {
  journalList.innerHTML = journalEntries
    .map(([dimension, text, date]) => `
      <article class="journal-card">
        <span>${dimension}</span>
        <p>${text}</p>
        <time>${date}</time>
      </article>
    `)
    .join("");
}

function renderEvidenceLibrary() {
  evidenceLibrary.innerHTML = evidenceItems
    .map(([title, type, moduleName, status]) => {
      const className = status === "Aprobada" ? "done" : status === "En revisión" ? "review" : "pending";
      return `
        <article class="evidence-file">
          <div class="file-icon">${type.includes("video") ? "▶" : type.includes("audio") ? "♪" : "PDF"}</div>
          <div>
            <strong>${title}</strong>
            <span>${moduleName} · ${type}</span>
          </div>
          <span class="status ${className}">${status}</span>
        </article>
      `;
    })
    .join("");
}

function renderStudents() {
  studentGrid.innerHTML = students
    .map(([name, documentId, moduleName, status, progress]) => `
      <article class="student-card">
        <div class="student-avatar">${name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
        <div>
          <h3>${name}</h3>
          <p>Documento ${documentId}</p>
          <span>${moduleName} · ${status}</span>
        </div>
        <strong>${progress}%</strong>
      </article>
    `)
    .join("");
}

function getRoleLabel(role) {
  const labels = {
    admin: "Administrador",
    coach: "Coach",
    professor: "Profesor",
    mentor: "Mentor",
  };
  return labels[role] || "Equipo";
}

function renderPreEnrollments() {
  preEnrollmentList.innerHTML = state.preEnrollments
    .map((item) => `
      <article class="admin-list-item">
        <div>
          <strong>${item.name}</strong>
          <span>Documento ${item.document} · ${item.email}</span>
          <small>${item.cohort}</small>
        </div>
        <span class="status ${item.status === "claimed" ? "done" : "review"}">${item.status === "claimed" ? "Acceso creado" : "Pendiente"}</span>
      </article>
    `)
    .join("");
}

function renderStaff() {
  staffList.innerHTML = state.staff
    .map((member) => `
      <article class="admin-list-item">
        <div>
          <strong>${member.name}</strong>
          <span>${member.email} · ${getRoleLabel(member.role)}</span>
          <small>${member.assignment}</small>
        </div>
        <span class="status ${member.status === "active" ? "done" : "review"}">${member.status === "active" ? "Activo" : "Invitado"}</span>
      </article>
    `)
    .join("");
}

function renderPractices() {
  practiceRows.innerHTML = practices
    .map(([activity, date, status, note]) => {
      const className = status === "Completada" ? "done" : status === "En revisión" ? "review" : "pending";
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
    ["12 módulos aprobados", completedHours >= totalHours],
    ["Asistencia mínima 80-85%", completedHours >= 10],
    ["12 prácticas documentadas", donePractices >= 12],
    ["Bitácora reflexiva activa", reflection.value.trim().length > 20],
    ["Evaluación final habilitada", blended >= 85],
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
          <td>Módulo ${index + 1}: ${module.title}</td>
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
  renderCalendar();
  renderModules();
  renderLessons();
  renderEvaluations();
  renderResources();
  renderJournal();
  renderPractices();
  renderEvidenceLibrary();
  renderMetrics();
  renderCertification();
  renderStudents();
  renderPreEnrollments();
  renderStaff();
  renderApprovals();
}

document.addEventListener("click", (event) => {
  const authOpenButton = event.target.closest("[data-auth-open]");
  if (authOpenButton) {
    openAuthPanel(authOpenButton.dataset.authOpen);
  }

  if (event.target.closest("[data-auth-close]")) {
    closeAuthPanels();
  }

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
  saveState.textContent = "Bitácora guardada en este navegador.";
  renderCertification();
});

document.querySelector("#addPractice").addEventListener("click", () => {
  const next = practices.length + 1;
  practices = [
    ...practices,
    [`Evidencia registrada ${next}`, new Date().toISOString().slice(0, 10), "En revisión", "Pendiente de retroalimentación académica"],
  ];
  renderAll();
});

document.querySelector("#exportSnapshot").addEventListener("click", async (event) => {
  const { completedHours, totalHours, blended } = calculateProgress();
  const snapshot = `Almalead - resumen académico\nAvance: ${blended}%\nMódulos: ${completedHours}/${totalHours}\nPrácticas: ${practices.length}\nEstado: ${certStatus.textContent}`;
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

preEnrollmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(preEnrollmentForm);
  const name = String(formData.get("name") || "").trim();
  const documentId = String(formData.get("document") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const cohort = String(formData.get("cohort") || "").trim();
  const exists = state.preEnrollments.some((item) => item.document === documentId || item.email.toLowerCase() === email);

  if (exists) {
    preEnrollmentState.textContent = "Ya existe una preinscripción con ese documento o correo.";
    preEnrollmentState.className = "admin-inline-state error";
    return;
  }

  state.preEnrollments = [
    ...state.preEnrollments,
    {
      document: documentId,
      email,
      name,
      initials: name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase(),
      cohort,
      status: "pending",
    },
  ];
  preEnrollments.length = 0;
  preEnrollments.push(...state.preEnrollments);
  persistRoster();
  preEnrollmentState.textContent = "Preinscripción guardada. El estudiante ya puede crear su acceso.";
  preEnrollmentState.className = "admin-inline-state success";
  renderPreEnrollments();
});

staffForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(staffForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const role = String(formData.get("role") || "coach");
  const assignment = String(formData.get("assignment") || "").trim();
  const exists = state.staff.some((member) => member.email.toLowerCase() === email);

  if (exists) {
    staffState.textContent = "Ese correo ya pertenece al equipo académico.";
    staffState.className = "admin-inline-state error";
    return;
  }

  state.staff = [...state.staff, { name, email, role, assignment, status: "invited" }];
  persistRoster();
  staffState.textContent = "Invitación creada. En producción se enviará por Supabase Auth.";
  staffState.className = "admin-inline-state success";
  renderStaff();
});

reflection.value = state.reflection;
renderAll();
restoreSession();

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const username = String(formData.get("username") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const user = demoUsers[username];

  if (!user || user.password !== password) {
    loginState.textContent = "Usuario o contraseña incorrectos.";
    loginState.className = "login-state error";
    return;
  }

  const sessionUser = { name: user.name, initials: user.initials };
  sessionStorage.setItem("almalead.session", JSON.stringify(sessionUser));
  loginState.textContent = "Acceso aprobado. Entrando al portal...";
  loginState.className = "login-state success";
  applySession(sessionUser);
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const documentId = String(formData.get("document") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirm") || "");
  const preEnrollment = preEnrollments.find(
    (item) => item.document === documentId && item.email.toLowerCase() === email,
  );

  if (!preEnrollment) {
    registerState.textContent = "No encontramos una preinscripción con ese documento y correo.";
    registerState.className = "auth-panel-state error";
    return;
  }

  if (password !== confirm) {
    registerState.textContent = "Las contraseñas no coinciden.";
    registerState.className = "auth-panel-state error";
    return;
  }

  demoUsers[email] = {
    password,
    name: preEnrollment.name,
    initials: preEnrollment.initials,
  };
  preEnrollment.status = "claimed";
  state.preEnrollments = [...preEnrollments];
  persistRoster();
  renderPreEnrollments();
  registerState.textContent = "Acceso activado. Ya puedes ingresar con tu correo y contraseña.";
  registerState.className = "auth-panel-state success";
});

recoveryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = String(new FormData(recoveryForm).get("email") || "").trim().toLowerCase();
  const isKnown = Boolean(demoUsers[email]) || preEnrollments.some((item) => item.email.toLowerCase() === email);
  recoveryState.textContent = isKnown
    ? "En producción enviaremos el enlace seguro de recuperación a tu correo."
    : "Si el correo existe en Almalead, recibirá instrucciones de recuperación.";
  recoveryState.className = "auth-panel-state success";
});

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("almalead.session");
  loginForm.reset();
  loginState.textContent = "Acceso demo: estudiante / almalead2026";
  loginState.className = "login-state";
  document.body.classList.add("auth-locked");
});

passwordEye.addEventListener("click", () => {
  const passwordInput = document.querySelector("#password");
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordEye.setAttribute("aria-label", isVisible ? "Mostrar contraseña" : "Ocultar contraseña");
});

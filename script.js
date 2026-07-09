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

const evaluationGuides = Object.fromEntries(modules.map((module, index) => {
  const number = index + 1;
  const slug = module.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return [module.id, {
    resourceName: `Guía evaluación módulo ${number} - ${slug}.pdf`,
    expectedFormat: number >= 10 ? "Video, audio, documento o carpeta ZIP" : "Documento, audio, imagen o video",
    instructions: `Desarrolla la actividad: ${module.evaluation} Usa los conceptos del módulo, registra evidencia concreta de tu práctica y agrega una reflexión breve sobre aprendizajes, dificultades y próximos compromisos.`,
    rubric: [
      "Comprensión del contenido central del módulo.",
      "Aplicación práctica en una conversación, caso o experiencia real.",
      "Claridad de evidencias, reflexión personal y próximos pasos.",
    ],
  }];
}));

const defaultAdminMaterials = [
  {
    title: "Guía complementaria de práctica",
    description: "Revisa este material antes de la próxima clase y registra una reflexión breve en tu bitácora.",
    section: "materiales",
    moduleId: "m1",
    fileName: "guia-practica.pdf",
    status: "Publicado",
    createdAt: "2026-07-06",
  },
  {
    title: "Grabación clase módulo 4",
    description: "Clase virtual sobre diseño de futuro, promesas y coordinación de acciones.",
    section: "grabaciones",
    moduleId: "m4",
    fileName: "grabacion-modulo-4.mp4",
    status: "Publicado",
    createdAt: "2026-07-07",
  },
  {
    title: "Plantilla de conversación",
    description: "Formato para observar actos lingüísticos, pedidos, ofertas, promesas y juicios fundados.",
    section: "lecciones",
    moduleId: "m2",
    fileName: "plantilla-conversacion.docx",
    status: "Publicado",
    createdAt: "2026-07-07",
  },
];

const defaultAdminExams = [
  {
    title: "Evaluación práctica módulo 4",
    moduleId: "m4",
    moduleName: "Diseño de futuro y coordinación de acciones",
    dueDate: "2026-07-08",
    deliveryType: "Mixta: texto, archivo, audio, video o imagen",
    instructions: "Entrega una conversación grabada, una reflexión escrita y las evidencias del compromiso diseñado con tu coachee.",
    fileName: "Sin archivo adjunto",
    status: "Borrador",
  },
];

const defaultPractices = [
  ["Práctica de rol O-L-E-C", "2026-05-06", "Completada", "Observador, lenguaje, emoción y cuerpo"],
  ["Grabación de conversación poderosa", "2026-05-20", "En revisión", "Pendiente de retroalimentación supervisada"],
  ["Caso del participante", "2026-06-03", "Pendiente", "Subir consentimiento informado"],
];

let practices = JSON.parse(localStorage.getItem("almalead.practices") || "null") || defaultPractices;

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
  {
    moduleId: "m1",
    dimension: "Observador",
    text: "Detecté que mi juicio principal aparece cuando el coachee duda de su decisión.",
    createdAt: "2026-07-05",
  },
  {
    moduleId: "m2",
    dimension: "Lenguaje",
    text: "Convertí una queja en pedido concreto con condición de satisfacción.",
    createdAt: "2026-07-02",
  },
  {
    moduleId: "m3",
    dimension: "Emoción",
    text: "Trabajé apertura al aprendizaje antes de la práctica supervisada.",
    createdAt: "2026-06-28",
  },
];

const defaultEvidenceItems = [
  ["Grabación de conversación", "video/mp4", "Módulo 5", "En revisión"],
  ["Bitácora emocional", "application/pdf", "Módulo 3", "Aprobada"],
  ["Audio de práctica", "audio/m4a", "Módulo 2", "Aprobada"],
  ["Consentimiento informado", "application/pdf", "Módulo 9", "Pendiente"],
];

let evidenceItems = JSON.parse(localStorage.getItem("almalead.evidenceItems") || "null") || defaultEvidenceItems;

const students = [
  ["Mariana Rojas", "1020304050", "Módulo 5", "En revisión", 38],
  ["Carlos Méndez", "1002457812", "Módulo 3", "Activo", 25],
  ["Laura Pérez", "52788441", "Módulo 2", "Aprobado", 18],
  ["Andrés Gómez", "79881234", "Módulo 1", "Pendiente", 8],
];

const studentProfiles = [
  {
    id: "mariana-rojas",
    name: "Mariana Rojas",
    document: "1020304050",
    email: "mariana.rojas@almalead.com",
    mentor: "Mariana Torres",
    progress: 38,
    currentModule: 5,
    approvedModules: [1, 2, 3],
    submittedModules: [4],
    blockedModules: [5],
    practicesDone: 4,
    practicesRequired: 12,
    attendance: 86,
    evidences: [
      ["Grabación de práctica de rol", "En revisión", "Módulo 5"],
      ["Bitácora emocional", "Aprobada", "Módulo 3"],
      ["Consentimiento informado", "Pendiente", "Módulo 9"],
    ],
    pending: ["Aprobar entrega del módulo 4", "Subir consentimiento informado", "Registrar 8 prácticas adicionales"],
    nextAction: "Revisar entrega del módulo 4 y liberar ruta del módulo 5.",
    risk: "Medio",
    lastActivity: "Hace 2 días",
  },
  {
    id: "carlos-mendez",
    name: "Carlos Méndez",
    document: "1002457812",
    email: "carlos.mendez@almalead.com",
    mentor: "Mariana Torres",
    progress: 25,
    currentModule: 3,
    approvedModules: [1, 2],
    submittedModules: [],
    blockedModules: [4],
    practicesDone: 2,
    practicesRequired: 12,
    attendance: 78,
    evidences: [
      ["Bitácora emocional", "En revisión", "Módulo 3"],
      ["Audio de conversación", "Pendiente", "Módulo 2"],
    ],
    pending: ["Completar bitácora emocional", "Subir audio de conversación", "Recuperar asistencia de una sesión"],
    nextAction: "Agendar seguimiento de 20 minutos para destrabar módulo 3.",
    risk: "Alto",
    lastActivity: "Hace 5 días",
  },
  {
    id: "laura-perez",
    name: "Laura Pérez",
    document: "52788441",
    email: "laura.perez@almalead.com",
    mentor: "Mariana Torres",
    progress: 18,
    currentModule: 2,
    approvedModules: [1, 2],
    submittedModules: [],
    blockedModules: [],
    practicesDone: 2,
    practicesRequired: 12,
    attendance: 92,
    evidences: [
      ["Audio de práctica", "Aprobada", "Módulo 2"],
      ["Mapa del observador", "Aprobada", "Módulo 1"],
    ],
    pending: ["Iniciar módulo 3", "Registrar práctica corporal", "Crear entrada O-L-E-C semanal"],
    nextAction: "Enviar recordatorio suave para iniciar el módulo 3.",
    risk: "Bajo",
    lastActivity: "Ayer",
  },
  {
    id: "andres-gomez",
    name: "Andrés Gómez",
    document: "79881234",
    email: "andres.gomez@almalead.com",
    mentor: "Por asignar",
    progress: 8,
    currentModule: 1,
    approvedModules: [],
    submittedModules: [1],
    blockedModules: [2],
    practicesDone: 0,
    practicesRequired: 12,
    attendance: 64,
    evidences: [
      ["Mapa personal del observador", "En revisión", "Módulo 1"],
      ["Bitácora inicial", "Pendiente", "Módulo 1"],
    ],
    pending: ["Aprobar módulo 1", "Completar bitácora inicial", "Asignar mentor académico"],
    nextAction: "Contactar al estudiante y asignar mentor antes de liberar módulo 2.",
    risk: "Alto",
    lastActivity: "Hace 9 días",
  },
];

const defaultSubmissionReviews = [
  {
    id: "sub-mariana-m4",
    studentId: "mariana-rojas",
    studentName: "Mariana Rojas",
    moduleName: "Módulo 4",
    title: "Diseño de futuro con promesas medibles",
    fileName: "mariana-rojas-modulo-4-video.mp4",
    mimeType: "video/mp4",
    storagePath: "1020304050/modulo-4/mariana-rojas-modulo-4-video.mp4",
    submittedAt: "2026-07-01",
    status: "En revisión",
    score: null,
    maxScore: 100,
    feedback: "Pendiente de revisión académica.",
    recommendations: "Revisar precisión de compromisos, pedidos y condiciones de satisfacción.",
    internalNotes: "Priorizar esta revisión antes de liberar el módulo 5.",
    visibleToStudent: false,
  },
  {
    id: "sub-carlos-m3",
    studentId: "carlos-mendez",
    studentName: "Carlos Méndez",
    moduleName: "Módulo 3",
    title: "Bitácora emocional y práctica corporal",
    fileName: "carlos-mendez-bitacora.pdf",
    mimeType: "application/pdf",
    storagePath: "1002457812/modulo-3/carlos-mendez-bitacora.pdf",
    submittedAt: "2026-06-26",
    status: "En revisión",
    score: 82,
    maxScore: 100,
    feedback: "Buen reconocimiento emocional. Falta conectar la práctica corporal con compromisos observables.",
    recommendations: "Agregar una práctica corporal diaria y evidenciar cambios observables.",
    internalNotes: "Revisar asistencia antes de aprobar el módulo.",
    visibleToStudent: true,
  },
  {
    id: "sub-laura-m2",
    studentId: "laura-perez",
    studentName: "Laura Pérez",
    moduleName: "Módulo 2",
    title: "Audio de conversación poderosa",
    fileName: "laura-perez-audio-m2.m4a",
    mimeType: "audio/m4a",
    storagePath: "52788441/modulo-2/laura-perez-audio-m2.m4a",
    submittedAt: "2026-06-18",
    status: "Calificada",
    score: 94,
    maxScore: 100,
    feedback: "Excelente escucha y reformulación. Mantener claridad en condiciones de satisfacción.",
    recommendations: "Sostener la misma estructura en conversaciones de mayor complejidad.",
    internalNotes: "Puede apoyar a pares en práctica de escucha.",
    visibleToStudent: true,
  },
];

const defaultCoachMessages = [
  {
    coach: "Javi",
    subject: "Duda sobre mi proceso de certificación",
    message: "Hola, tengo una inquietud sobre mi avance y quisiera orientación.",
    emailTo: "coaching@javipenaloza.com",
    sentAt: "2026-07-07",
    status: "Borrador local",
  },
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
  grades: JSON.parse(localStorage.getItem("almalead.grades") || "{}"),
  studentGrades: JSON.parse(localStorage.getItem("almalead.studentGrades") || "{}"),
  reflection: localStorage.getItem("almalead.reflection") || "",
  journalEntries: JSON.parse(localStorage.getItem("almalead.journalEntries") || "null") || journalEntries,
  preEnrollments: JSON.parse(localStorage.getItem("almalead.preEnrollments") || "null") || defaultPreEnrollments,
  staff: JSON.parse(localStorage.getItem("almalead.staff") || "null") || defaultStaff,
  adminMaterials: JSON.parse(localStorage.getItem("almalead.adminMaterials") || "null") || defaultAdminMaterials,
  adminExams: JSON.parse(localStorage.getItem("almalead.adminExams") || "null") || defaultAdminExams,
  submissionReviews: JSON.parse(localStorage.getItem("almalead.submissionReviews") || "null") || defaultSubmissionReviews,
  coachMessages: JSON.parse(localStorage.getItem("almalead.coachMessages") || "null") || defaultCoachMessages,
  selectedStudentId: localStorage.getItem("almalead.selectedStudentId") || "mariana-rojas",
  selectedSubmissionId: localStorage.getItem("almalead.selectedSubmissionId") || "sub-mariana-m4",
  selectedEvaluationModuleId: null,
  filter: "all",
};

const demoUsers = {
  estudiante: { password: "almalead2026", name: "Estudiante Almalead", initials: "EA", role: "student" },
  admin: { password: "admin2026", name: "Dirección Académica", initials: "DA", role: "admin" },
  profe: { password: "profe2026", name: "Profesor Almalead", initials: "PA", role: "professor" },
};

const preEnrollments = state.preEnrollments;
let currentUserRole = "student";

const savedStudentProfiles = JSON.parse(localStorage.getItem("almalead.studentProfiles") || "null");
if (savedStudentProfiles?.length) {
  studentProfiles.splice(0, studentProfiles.length, ...savedStudentProfiles);
}

function canAccessRole(roleOnly) {
  if (!roleOnly) return true;
  if (roleOnly === "staff") return ["admin", "professor", "coach", "mentor"].includes(currentUserRole);
  return currentUserRole === roleOnly;
}

function applyRoleVisibility() {
  document.querySelectorAll("[data-role-only]").forEach((element) => {
    const allowed = canAccessRole(element.dataset.roleOnly);
    element.hidden = !allowed;
    element.setAttribute("aria-hidden", String(!allowed));
  });
}

if (!state.approvals) {
  const completed = JSON.parse(localStorage.getItem("almalead.completed") || "[]");
  state.approvals = Object.fromEntries(
    modules.map((module, index) => {
      const legacyApproved = completed.includes(module.id);
      return [module.id, legacyApproved ? "approved" : "locked"];
    }),
  );
}

state.adminMaterials = state.adminMaterials.map((item) => {
  if (item.moduleId) return item;
  const title = item.title.toLowerCase();
  if (title.includes("módulo 4") || title.includes("modulo 4")) return { ...item, moduleId: "m4" };
  if (title.includes("conversación") || title.includes("conversacion")) return { ...item, moduleId: "m2" };
  return { ...item, moduleId: "general" };
});

state.adminExams = state.adminExams.map((item) => {
  if (item.moduleId) return item;
  const module = modules.find((moduleItem) => moduleItem.title === item.moduleName);
  return { ...item, moduleId: module?.id || "m4", moduleName: module?.title || item.moduleName };
});

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
const gpaDisplay = document.querySelector("#gpaDisplay");
const reflection = document.querySelector("#reflection");
const journalModule = document.querySelector("#journalModule");
const journalDimension = document.querySelector("#journalDimension");
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
const journalPromptList = document.querySelector("#journalPromptList");
const journalRecordSummary = document.querySelector("#journalRecordSummary");
const downloadJournalRecord = document.querySelector("#downloadJournalRecord");
const journalEditorPanel = document.querySelector("#journalEditorPanel");
const evidenceLibrary = document.querySelector("#evidenceLibrary");
const studentGrid = document.querySelector("#studentGrid");
const preEnrollmentForm = document.querySelector("#preEnrollmentForm");
const preEnrollmentState = document.querySelector("#preEnrollmentState");
const preEnrollmentList = document.querySelector("#preEnrollmentList");
const staffForm = document.querySelector("#staffForm");
const staffState = document.querySelector("#staffState");
const staffList = document.querySelector("#staffList");
const navLinks = [...document.querySelectorAll(".nav-list a")];
const portalSections = [...document.querySelectorAll(".portal-section")];
const topbarTitle = document.querySelector(".topbar h1");
const topbarCopy = document.querySelector(".topbar-copy");
const toast = document.querySelector("#toast");
const syncCalendar = document.querySelector("#syncCalendar");
const newJournalEntry = document.querySelector("#newJournalEntry");
const topbarMaterials = document.querySelector("#topbarMaterials");
const topbarPending = document.querySelector("#topbarPending");
const topbarProfile = document.querySelector("#topbarProfile");
const quickActionPanel = document.querySelector("#quickActionPanel");
const quickActionEyebrow = document.querySelector("#quickActionEyebrow");
const quickActionTitle = document.querySelector("#quickActionTitle");
const quickActionList = document.querySelector("#quickActionList");
const studentUploadButton = document.querySelector("#studentUploadButton");
const studentEvidenceInput = document.querySelector("#studentEvidenceInput");
const practiceForm = document.querySelector("#practiceForm");
const practiceType = document.querySelector("#practiceType");
const practiceModule = document.querySelector("#practiceModule");
const practiceObserved = document.querySelector("#practiceObserved");
const practiceFormat = document.querySelector("#practiceFormat");
const practiceContext = document.querySelector("#practiceContext");
const practiceFileInput = document.querySelector("#practiceFileInput");
const practiceFileLabel = document.querySelector("#practiceFileLabel");
const cancelPractice = document.querySelector("#cancelPractice");
const practiceFormState = document.querySelector("#practiceFormState");
const focusPreEnrollment = document.querySelector("#focusPreEnrollment");
const examTitle = document.querySelector("#examTitle");
const examModule = document.querySelector("#examModule");
const examDueDate = document.querySelector("#examDueDate");
const examDeliveryType = document.querySelector("#examDeliveryType");
const examInstructions = document.querySelector("#examInstructions");
const examFileInput = document.querySelector("#examFileInput");
const examFileLabel = document.querySelector("#examFileLabel");
const saveExamDraft = document.querySelector("#saveExamDraft");
const publishExam = document.querySelector("#publishExam");
const examState = document.querySelector("#examState");
const materialTitle = document.querySelector("#materialTitle");
const materialSection = document.querySelector("#materialSection");
const materialModule = document.querySelector("#materialModule");
const materialText = document.querySelector("#materialText");
const materialFileInput = document.querySelector("#materialFileInput");
const materialFileLabel = document.querySelector("#materialFileLabel");
const saveMaterialDraft = document.querySelector("#saveMaterialDraft");
const publishMaterial = document.querySelector("#publishMaterial");
const materialState = document.querySelector("#materialState");
const materialAdminList = document.querySelector("#materialAdminList");
const requestReviewChanges = document.querySelector("#requestReviewChanges");
const approveReviewedModule = document.querySelector("#approveReviewedModule");
const reviewState = document.querySelector("#reviewState");
const adminStudentList = document.querySelector("#adminStudentList");
const studentProgressDetail = document.querySelector("#studentProgressDetail");
const cohortRiskSummary = document.querySelector("#cohortRiskSummary");
const studentGradeList = document.querySelector("#studentGradeList");
const submissionReviewList = document.querySelector("#submissionReviewList");
const exportEvidenceReport = document.querySelector("#exportEvidenceReport");
const gradingTitle = document.querySelector("#gradingTitle");
const gradingMeta = document.querySelector("#gradingMeta");
const gradingScore = document.querySelector("#gradingScore");
const gradingMaxScore = document.querySelector("#gradingMaxScore");
const gradingFeedback = document.querySelector("#gradingFeedback");
const gradingRecommendations = document.querySelector("#gradingRecommendations");
const gradingInternalNotes = document.querySelector("#gradingInternalNotes");
const downloadSubmission = document.querySelector("#downloadSubmission");
const publishGrade = document.querySelector("#publishGrade");
const gradeState = document.querySelector("#gradeState");
const coachMessageForm = document.querySelector("#coachMessageForm");
const coachRecipient = document.querySelector("#coachRecipient");
const coachSubject = document.querySelector("#coachSubject");
const coachMessage = document.querySelector("#coachMessage");
const copyCoachMessage = document.querySelector("#copyCoachMessage");
const coachMessageState = document.querySelector("#coachMessageState");
const coachMessageList = document.querySelector("#coachMessageList");
const evaluationModal = document.querySelector("#evaluationModal");
const closeEvaluationModal = document.querySelector("#closeEvaluationModal");
const evaluationModalEyebrow = document.querySelector("#evaluationModalEyebrow");
const evaluationModalTitle = document.querySelector("#evaluationModalTitle");
const evaluationModalDescription = document.querySelector("#evaluationModalDescription");
const evaluationResourceName = document.querySelector("#evaluationResourceName");
const evaluationExpectedFormat = document.querySelector("#evaluationExpectedFormat");
const evaluationModalStatus = document.querySelector("#evaluationModalStatus");
const evaluationInstructions = document.querySelector("#evaluationInstructions");
const evaluationRubric = document.querySelector("#evaluationRubric");
const evaluationFileInput = document.querySelector("#evaluationFileInput");
const evaluationFileLabel = document.querySelector("#evaluationFileLabel");
const evaluationStudentComment = document.querySelector("#evaluationStudentComment");
const downloadEvaluationGuide = document.querySelector("#downloadEvaluationGuide");
const confirmEvaluationSubmission = document.querySelector("#confirmEvaluationSubmission");
const evaluationModalState = document.querySelector("#evaluationModalState");

function applySession(user) {
  document.body.classList.remove("auth-locked");
  if (user) {
    currentUserRole = user.role || "student";
    document.body.dataset.role = currentUserRole;
    profileName.textContent = user.name;
    profileButton.querySelector("span").textContent = user.initials;
  }
  applyRoleVisibility();
  showSection(location.hash.replace("#", "") || "resumen", { updateHash: false, instant: true });
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
  localStorage.setItem("almalead.grades", JSON.stringify(state.grades));
  localStorage.setItem("almalead.studentGrades", JSON.stringify(state.studentGrades));
  localStorage.setItem("almalead.journalEntries", JSON.stringify(state.journalEntries));
}

function calculateGPA() {
  const graded = modules.filter((m) => state.grades[m.id] != null);
  if (graded.length === 0) return { gpa: 0, count: 0, total: modules.length };
  const sum = graded.reduce((acc, m) => acc + state.grades[m.id], 0);
  return { gpa: +(sum / graded.length).toFixed(2), count: graded.length, total: modules.length };
}

function persistRoster() {
  localStorage.setItem("almalead.preEnrollments", JSON.stringify(state.preEnrollments));
  localStorage.setItem("almalead.staff", JSON.stringify(state.staff));
}

function persistStudentWork() {
  localStorage.setItem("almalead.practices", JSON.stringify(practices));
  localStorage.setItem("almalead.evidenceItems", JSON.stringify(evidenceItems));
}

function persistAdminContent() {
  localStorage.setItem("almalead.adminMaterials", JSON.stringify(state.adminMaterials));
  localStorage.setItem("almalead.adminExams", JSON.stringify(state.adminExams));
  localStorage.setItem("almalead.submissionReviews", JSON.stringify(state.submissionReviews));
  localStorage.setItem("almalead.coachMessages", JSON.stringify(state.coachMessages));
}

function persistAcademicProfiles() {
  localStorage.setItem("almalead.studentProfiles", JSON.stringify(studentProfiles));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function showSection(sectionId, options = {}) {
  const requestedSection = portalSections.find((section) => section.id === sectionId);
  const restrictedTo = requestedSection?.dataset.roleOnly;
  const targetId = requestedSection && canAccessRole(restrictedTo) ? sectionId : "resumen";
  portalSections.forEach((section) => {
    section.classList.toggle("active", section.id === targetId);
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${targetId}`);
  });

  const activeSection = document.querySelector(`#${targetId}`);
  if (activeSection) {
    topbarTitle.textContent = activeSection.dataset.sectionTitle || "Proceso de certificación Almalead";
    topbarCopy.textContent = activeSection.dataset.sectionCopy || "Coaching ontológico, emocional y educativo con ciencia aplicada, práctica y ética.";
  }

  if (options.updateHash !== false || targetId !== sectionId) {
    history.replaceState(null, "", `#${targetId}`);
  }
  window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
}

function closeQuickActionPanel() {
  quickActionPanel.hidden = true;
  quickActionPanel.classList.remove("open");
}

function openQuickActionPanel(kind) {
  const pendingModules = modules
    .filter((module) => ["available", "submitted"].includes(getModuleStatus(module.id)))
    .slice(0, 4);
  const pendingItems = pendingModules.length ? pendingModules.map((module) => {
    const moduleNumber = modules.findIndex((item) => item.id === module.id) + 1;
    const status = getModuleStatus(module.id);
    return `
      <button type="button" data-quick-section="evaluaciones">
        <strong>Módulo ${moduleNumber}: ${module.title}</strong>
        <span>${status === "submitted" ? "Entrega enviada, pendiente de revisión." : "Disponible para revisar guía y adjuntar evidencia."}</span>
      </button>
    `;
  }).join("") : `
    <article>
      <strong>Sin pendientes críticos</strong>
      <span>Por ahora no hay evaluaciones disponibles o en revisión.</span>
    </article>
  `;

  const quickLinks = `
    <button type="button" data-quick-section="materiales">
      <strong>Materiales</strong>
      <span>Guías, grabaciones y recursos publicados.</span>
    </button>
    <button type="button" data-quick-section="evaluaciones">
      <strong>Evaluaciones</strong>
      <span>Guías, entregas y calificaciones.</span>
    </button>
    <button type="button" data-quick-section="bitacora">
      <strong>Bitácora O-L-E-C</strong>
      <span>Crear o revisar reflexiones guardadas.</span>
    </button>
    <button type="button" data-quick-section="mensajes">
      <strong>Mensajes a coaches</strong>
      <span>Enviar dudas a Javi, Jedi o Nico.</span>
    </button>
  `;

  quickActionEyebrow.textContent = kind === "pending" ? "Pendientes" : "Buscar";
  quickActionTitle.textContent = kind === "pending" ? "Pendientes académicos" : "Búsqueda rápida";
  quickActionList.innerHTML = kind === "pending" ? pendingItems : quickLinks;
  quickActionPanel.hidden = false;
  quickActionPanel.classList.add("open");
}

function getFileSummary(fileList) {
  const files = [...(fileList || [])];
  if (!files.length) return "Sin archivo adjunto";
  if (files.length === 1) return files[0].name;
  return `${files.length} archivos seleccionados`;
}

function getTodayISO() {
  return new Date().toISOString().slice(0, 10);
}

function getTimestampLabel(date = new Date()) {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: cohortSchedule.timezone,
  }).format(date);
}

function getRiskClass(risk) {
  if (risk === "Alto") return "danger";
  if (risk === "Medio") return "review";
  return "done";
}

function getStudentProfile(studentId) {
  return studentProfiles.find((student) => student.id === studentId) || studentProfiles[0];
}

function getSelectedSubmission() {
  return state.submissionReviews.find((submission) => submission.id === state.selectedSubmissionId)
    || state.submissionReviews[0];
}

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getStudentSubmissions(student) {
  const studentName = normalizeText(student.name);
  return state.submissionReviews.filter((submission) => (
    submission.studentId === student.id
    || normalizeText(submission.studentName) === studentName
    || submission.storagePath?.startsWith(`${student.document}/`)
  ));
}

function getModuleNumberFromText(value = "") {
  const match = value.match(/m[oó]dulo\s*(\d+)/i);
  return match ? Number(match[1]) : null;
}

function getStudentModuleStatus(student, moduleNumber) {
  if (student.approvedModules.includes(moduleNumber)) return { label: "Aprobado", className: "done" };
  if (student.submittedModules.includes(moduleNumber)) return { label: "En revisión", className: "review" };
  if (student.blockedModules.includes(moduleNumber)) return { label: "Bloqueado", className: "pending" };
  if (moduleNumber === student.currentModule) return { label: "Disponible", className: "review" };
  return { label: "Pendiente", className: "pending" };
}

function getStudentEvidenceForModule(student, moduleNumber) {
  const moduleLabel = `Módulo ${moduleNumber}`;
  const profileEvidence = student.evidences
    .filter(([, , evidenceModule]) => getModuleNumberFromText(evidenceModule) === moduleNumber)
    .map(([title, status, evidenceModule]) => ({
      title,
      status,
      moduleName: evidenceModule,
      type: "Registro del perfil",
    }));

  const submissions = getStudentSubmissions(student)
    .filter((submission) => getModuleNumberFromText(submission.moduleName) === moduleNumber)
    .map((submission) => ({
      id: submission.id,
      title: submission.title,
      status: submission.visibleToStudent ? `Publicado ${submission.score}/${submission.maxScore}` : submission.status,
      moduleName: moduleLabel,
      type: getMaterialTypeLabel(submission.fileName, "evaluaciones"),
      fileName: submission.fileName,
      storagePath: submission.storagePath,
    }));

  return [...submissions, ...profileEvidence];
}

function renderEvidenceMiniCards(items) {
  if (!items.length) {
    return `
      <div class="approval-file-card empty">
        <strong>Sin entrega asociada</strong>
        <span>El estudiante aún no ha subido archivo, test, audio, video o evidencia para este módulo.</span>
      </div>
    `;
  }

  return items.map((item) => `
    <div class="approval-file-card">
      <strong>${item.title}</strong>
      <span>${item.type} · ${item.fileName || item.moduleName}</span>
      <small>${item.status}${item.storagePath ? ` · ${item.storagePath}` : ""}</small>
    </div>
  `).join("");
}

function focusSubmissionReview(submissionId) {
  if (!submissionId) return;
  state.selectedSubmissionId = submissionId;
  localStorage.setItem("almalead.selectedSubmissionId", state.selectedSubmissionId);
  renderSubmissionReviewCenter();
  document.querySelector(".review-center-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function downloadTextFile(fileName, content) {
  const type = fileName.endsWith(".ics") ? "text/calendar;charset=utf-8" : "text/plain;charset=utf-8";
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function formatICSDate(dateInput, hour = "190000") {
  return `${dateInput.replaceAll("-", "")}T${hour}`;
}

function buildCalendarICS() {
  const events = [
    {
      date: cohortSchedule.startsOn,
      title: "Inicio de cohorte Almalead",
      description: "Bienvenida y encuadre del proceso de certificación.",
      startHour: "190000",
      endHour: "210000",
    },
    ...modules.flatMap((module, index) => {
      const moduleNumber = index + 1;
      const unlockDate = module.unlockAt.slice(0, 10);
      return [
        {
          date: module.classDate,
          title: `Clase módulo ${moduleNumber}: ${module.title}`,
          description: module.description,
          startHour: "190000",
          endHour: "210000",
        },
        {
          date: unlockDate,
          title: `Activación módulo ${moduleNumber}`,
          description: `Materiales y evaluación del módulo ${moduleNumber} disponibles desde las 00:00 h Colombia.`,
          startHour: "000000",
          endHour: "003000",
        },
      ];
    }),
  ];

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Almalead//Portal Academico//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Almalead - Certificación Coaching",
    ...events.flatMap((event, index) => [
      "BEGIN:VEVENT",
      `UID:almalead-${index + 1}@javipenaloza.com`,
      `DTSTAMP:${formatICSDate(getTodayISO(), "120000")}`,
      `DTSTART;TZID=America/Bogota:${formatICSDate(event.date, event.startHour)}`,
      `DTEND;TZID=America/Bogota:${formatICSDate(event.date, event.endHour)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      "END:VEVENT",
    ]),
    "END:VCALENDAR",
  ].join("\r\n");
}

function getStudentModuleRows(student) {
  return modules.map((module, index) => {
    const moduleNumber = index + 1;
    let status = "Bloqueado";
    let className = "pending";
    if (student.approvedModules.includes(moduleNumber)) {
      status = "Aprobado";
      className = "done";
    } else if (student.submittedModules.includes(moduleNumber)) {
      status = "En revisión";
      className = "review";
    } else if (moduleNumber === student.currentModule && !student.blockedModules.includes(moduleNumber)) {
      status = "Disponible";
      className = "review";
    }

    return `
      <tr>
        <td>Módulo ${moduleNumber}</td>
        <td>${module.title}</td>
        <td><span class="status ${className}">${status}</span></td>
      </tr>
    `;
  }).join("");
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
  const { gpa, count } = calculateGPA();
  const gpaBanner = `
    <div class="gpa-banner">
      <span>Promedio acumulado</span>
      <strong>${gpa.toFixed(1)} / 5.0</strong>
      <span>${count} de ${modules.length} guías calificadas</span>
    </div>
  `;
  const publishedExams = state.adminExams.filter((exam) => exam.status === "Publicado");
  const moduleCards = modules
    .map((module, index) => {
      const status = getModuleStatus(module.id);
      const grade = state.grades[module.id];
      const gradeDisplay = grade != null ? `<span class="grade-badge">${grade.toFixed(1)}</span>` : "";
      const exams = publishedExams.filter((exam) => exam.moduleId === module.id);
      const canSubmit = status === "available";
      const guide = evaluationGuides[module.id];
      const examList = exams.length
        ? exams.map((exam) => `
            <button class="evaluation-resource" type="button" data-submit-exam="${exam.title}">
              <span>${getMaterialTypeLabel(exam.fileName, "evaluaciones")}</span>
              <strong>${exam.title}</strong>
              <small>Qué envías: ${exam.deliveryType}. Recurso base: ${exam.fileName}. Fecha límite: ${exam.dueDate}.</small>
            </button>
          `).join("")
        : `
            <button class="evaluation-resource" type="button" data-submit-module="${module.id}" ${status === "locked" || status === "approved" || status === "submitted" ? "disabled" : ""}>
              <span>Guía del módulo</span>
              <strong>${guide.resourceName}</strong>
              <small>Qué envías: ${guide.expectedFormat}. Actividad: ${module.evaluation}</small>
            </button>
          `;
      const buttonLabel = status === "submitted"
        ? "En revisión"
        : status === "approved"
          ? "Aprobado"
          : "Ver guía y adjuntar";
      const buttonAttributes = exams.length
        ? `data-submit-exam="${exams[0].title}"`
        : `data-submit-module="${module.id}"`;

      return `
        <article class="evaluation-card ${status} ${exams.length ? "" : "empty"}">
          <div>
            <span class="pill">Módulo ${index + 1}</span>
            <span class="pill">Disponible ${formatUnlockDate(module.unlockAt)}</span>
            <h3>${module.title}</h3>
            <p>${exams.length ? "Evaluación publicada por dirección académica." : "Guía base del módulo lista para desarrollar."} El envío queda en revisión para que el equipo académico califique y deje retroalimentación.</p>
            <div class="evaluation-flow">
              <span>1. Revisa la guía</span>
              <span>2. Realiza la actividad</span>
              <span>3. Adjunta evidencia</span>
            </div>
            <div class="evaluation-resource-list">
              ${examList}
            </div>
          </div>
          <div class="evaluation-actions">
            ${gradeDisplay}
            <span class="status ${status === "approved" ? "done" : status === "submitted" ? "review" : "pending"}">${getStatusLabel(status)}</span>
            <button class="primary-button" type="button" ${buttonAttributes} ${canSubmit ? "" : "disabled"}>
              ${buttonLabel}
            </button>
          </div>
        </article>
      `;
    });

  evaluationList.innerHTML = gpaBanner + moduleCards.join("");
}

function getEvaluationGuide(moduleId) {
  const module = modules.find((item) => item.id === moduleId);
  if (!module) return null;
  return {
    module,
    moduleNumber: modules.findIndex((item) => item.id === module.id) + 1,
    guide: evaluationGuides[module.id],
    status: getModuleStatus(module.id),
  };
}

function getExamEvaluation(examTitle) {
  const exam = state.adminExams.find((item) => item.title === examTitle && item.status === "Publicado");
  if (!exam) return null;
  const module = modules.find((item) => item.id === exam.moduleId) || modules.find((item) => item.title === exam.moduleName);
  if (!module) return null;
  const moduleNumber = modules.findIndex((item) => item.id === module.id) + 1;
  return {
    exam,
    module,
    moduleNumber,
    guide: {
      resourceName: exam.fileName || `Evaluación módulo ${moduleNumber}.pdf`,
      expectedFormat: exam.deliveryType,
      instructions: exam.instructions,
      rubric: [
        "Cumplimiento de las instrucciones publicadas por dirección académica.",
        "Evidencia clara, verificable y correspondiente al módulo.",
        "Reflexión sobre aprendizajes, aplicación práctica y próximos pasos.",
      ],
    },
    status: getModuleStatus(module.id),
  };
}

function openEvaluationModal(moduleId, examTitle = "") {
  const evaluation = examTitle ? getExamEvaluation(examTitle) : getEvaluationGuide(moduleId);
  if (!evaluation) return;

  state.selectedEvaluationModuleId = evaluation.module.id;
  state.selectedEvaluationExamTitle = examTitle;
  evaluationFileInput.value = "";
  evaluationFileLabel.textContent = "Seleccionar archivo de entrega";
  evaluationStudentComment.value = "";
  evaluationModalEyebrow.textContent = examTitle ? `Evaluación publicada · Módulo ${evaluation.moduleNumber}` : `Evaluación módulo ${evaluation.moduleNumber}`;
  evaluationModalTitle.textContent = examTitle || evaluation.module.title;
  evaluationModalDescription.textContent = examTitle ? evaluation.module.title : evaluation.module.evaluation;
  evaluationResourceName.textContent = evaluation.guide.resourceName;
  evaluationExpectedFormat.textContent = evaluation.guide.expectedFormat;
  evaluationModalStatus.textContent = getStatusLabel(evaluation.status);
  evaluationInstructions.textContent = evaluation.guide.instructions;
  evaluationRubric.innerHTML = evaluation.guide.rubric.map((item) => `<li>${item}</li>`).join("");
  evaluationModalState.textContent = "Descarga o revisa la guía, realiza el trabajo y adjunta tu evidencia para enviarla a revisión.";
  evaluationModalState.className = "admin-inline-state";
  evaluationModal.classList.add("open");
  evaluationModal.setAttribute("aria-hidden", "false");
}

function closeEvaluationModalPanel() {
  evaluationModal.classList.remove("open");
  evaluationModal.setAttribute("aria-hidden", "true");
}

function buildEvaluationGuideText(evaluation) {
  return [
    "Almalead - Guía de evaluación",
    `Módulo ${evaluation.moduleNumber}: ${evaluation.module.title}`,
    "",
    `Actividad: ${evaluation.module.evaluation}`,
    "",
    "Instrucciones:",
    evaluation.guide.instructions,
    "",
    "Criterios de revisión:",
    ...evaluation.guide.rubric.map((item) => `- ${item}`),
    "",
    `Formato esperado: ${evaluation.guide.expectedFormat}`,
    "La entrega quedará en revisión hasta que dirección académica publique calificación, comentarios y recomendaciones.",
  ].join("\n");
}

function renderStudentGrades() {
  const publishedGrades = state.submissionReviews.filter((submission) => submission.visibleToStudent);

  if (!publishedGrades.length) {
    studentGradeList.innerHTML = `
      <article class="grade-item">
        <div>
          <strong>Aún no hay calificaciones publicadas</strong>
          <span>Cuando el profesor revise tus entregas, aparecerán aquí con retroalimentación.</span>
        </div>
      </article>
    `;
    return;
  }

  studentGradeList.innerHTML = publishedGrades
    .map((submission) => `
      <article class="grade-item">
        <div>
          <strong>${submission.moduleName}: ${submission.title}</strong>
          <span>${submission.feedback}</span>
          <span>Recomendación: ${submission.recommendations || "Sin recomendaciones adicionales."}</span>
        </div>
        <strong>${submission.score}/${submission.maxScore}</strong>
      </article>
    `)
    .join("");
}

function renderResources() {
  const publishedMaterials = state.adminMaterials.filter((item) => (
    item.status === "Publicado"
    && ["materiales", "grabaciones", "lecciones", "evaluaciones", "bitacora"].includes(item.section)
  ));

  if (!publishedMaterials.length) {
    resourceList.innerHTML = `
      <article class="resource-card empty">
        <div>
          <span class="pill">Biblioteca</span>
          <h3>Sin materiales publicados</h3>
          <p>Dirección académica aún no ha subido documentos, videos, audios, guías o grabaciones para estudiantes.</p>
        </div>
      </article>
    `;
    return;
  }

  resourceList.innerHTML = publishedMaterials
    .map((item) => {
      const moduleLabel = item.moduleId === "general"
        ? "General"
        : `Módulo ${modules.findIndex((module) => module.id === item.moduleId) + 1}`;
      const type = getMaterialTypeLabel(item.fileName, item.section);
      return `
      <article class="resource-card" data-open-resource="${item.title}">
        <div>
          <div class="resource-meta">
            <span class="pill">${moduleLabel}</span>
            <span class="pill">${item.section}</span>
            <span class="pill">${type}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <small>${item.fileName}</small>
        </div>
        <button class="ghost-button" type="button">Abrir</button>
      </article>
    `;
    })
    .join("");
}

function renderCoachMessages() {
  coachMessageList.innerHTML = state.coachMessages
    .map((item) => `
      <article class="admin-list-item">
        <div>
          <strong>${item.coach} · ${item.subject}</strong>
          <span>${item.emailTo} · ${item.sentAt}</span>
          <small>${item.message}</small>
        </div>
        <span class="status review">${item.status}</span>
      </article>
    `)
    .join("");
}

function renderAdminMaterials() {
  materialAdminList.innerHTML = state.adminMaterials
    .map((item) => {
      const moduleLabel = item.moduleId === "general"
        ? "General"
        : `Módulo ${modules.findIndex((module) => module.id === item.moduleId) + 1}`;
      return `
        <article class="admin-list-item">
          <div>
            <strong>${item.title}</strong>
            <span>${moduleLabel} · ${item.section} · ${getMaterialTypeLabel(item.fileName, item.section)} · ${item.fileName}</span>
            <small>${item.description}</small>
          </div>
          <span class="status ${item.status === "Publicado" ? "done" : "review"}">${item.status}</span>
        </article>
      `;
    })
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

function getMaterialTypeLabel(fileName = "", section = "") {
  const value = `${fileName} ${section}`.toLowerCase();
  if (section === "grabaciones" || /\.(mp4|mov|webm|m4v)\b/.test(value)) return "Video";
  if (/\.(mp3|wav|m4a|aac|ogg)\b/.test(value)) return "Audio";
  if (/\.(pdf)\b/.test(value)) return "PDF";
  if (/\.(doc|docx|txt)\b/.test(value)) return "Documento";
  if (/\.(ppt|pptx)\b/.test(value)) return "Presentación";
  if (/\.(xls|xlsx)\b/.test(value)) return "Hoja de cálculo";
  if (/\.(jpg|jpeg|png|webp|heic)\b/.test(value)) return "Imagen";
  if (/\.(zip|rar)\b/.test(value)) return "Comprimido";
  return section === "evaluaciones" ? "Evaluación" : "Recurso";
}

function getLessonMaterials(moduleId) {
  return state.adminMaterials.filter((item) => (
    item.status === "Publicado"
    && (item.moduleId === moduleId || item.moduleId === "general")
    && ["lecciones", "materiales", "grabaciones"].includes(item.section)
  ));
}

function getModuleProgressForLesson(module) {
  const status = getModuleStatus(module.id);
  if (status === "approved") return 100;
  if (status === "submitted") return 70;
  if (status === "available") return 42;
  return 0;
}

function renderLessons() {
  lessonGrid.innerHTML = modules
    .map((module, index) => {
      const progress = getModuleProgressForLesson(module);
      const materials = getLessonMaterials(module.id);
      const resourceMarkup = materials.length
        ? materials.map((item) => `
            <button class="lesson-resource" type="button" data-open-resource="${item.title}">
              <span>${getMaterialTypeLabel(item.fileName, item.section)}</span>
              <strong>${item.title}</strong>
              <small>${item.fileName}</small>
            </button>
          `).join("")
        : `
            <div class="lesson-resource empty">
              <span>Pendiente</span>
              <strong>Sin recursos publicados</strong>
              <small>Dirección académica aún no ha subido material para este módulo.</small>
            </div>
          `;

      return `
      <article class="lesson-card ${materials.length ? "" : "empty"}">
        <div>
          <span class="pill">Módulo ${index + 1}</span>
          <h3>${module.title}</h3>
          <p>${materials.length} recurso${materials.length === 1 ? "" : "s"} publicado${materials.length === 1 ? "" : "s"} por dirección académica.</p>
          <div class="lesson-resource-list">
            ${resourceMarkup}
          </div>
        </div>
        <div class="lesson-progress" style="--lesson-progress: ${progress}">
          <strong>${progress}%</strong>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderJournal() {
  const prompts = state.adminMaterials.filter((item) => (
    item.status === "Publicado"
    && item.section === "bitacora"
  ));
  const entries = state.journalEntries.map((entry, index) => ({
    ...entry,
    id: entry.id || `legacy-journal-${index}`,
    createdAtLabel: entry.createdAtLabel || entry.createdAt,
  }));

  journalPromptList.innerHTML = prompts.length
    ? prompts.map((item) => {
      const moduleLabel = item.moduleId === "general"
        ? "General"
        : `Módulo ${modules.findIndex((module) => module.id === item.moduleId) + 1}`;
      return `
        <article class="journal-prompt-card">
          <span>${moduleLabel}</span>
          <strong>${item.title}</strong>
          <p>${item.description}</p>
          <small>${item.fileName}</small>
        </article>
      `;
    }).join("")
    : `
      <article class="journal-prompt-card empty">
        <span>Pendiente</span>
        <strong>Sin consignas de bitácora publicadas</strong>
        <p>Dirección académica puede publicar una guía, pregunta o plantilla desde el panel admin.</p>
      </article>
    `;

  journalRecordSummary.textContent = entries.length
    ? `${entries.length} entrada${entries.length === 1 ? "" : "s"} guardada${entries.length === 1 ? "" : "s"} en tu record personal.`
    : "Sin entradas guardadas.";

  journalList.innerHTML = entries.length ? entries
    .map((entry) => {
      const moduleLabel = entry.moduleId === "general"
        ? "General"
        : `Módulo ${modules.findIndex((module) => module.id === entry.moduleId) + 1}`;
      return `
      <article class="journal-card">
        <div>
          <span>${moduleLabel} · ${entry.dimension}</span>
          <p>${entry.text}</p>
          <time>${entry.createdAtLabel}</time>
        </div>
        <button class="ghost-button" type="button" data-open-journal-entry="${entry.id}">Abrir entrada</button>
      </article>
    `;
    })
    .join("") : `
      <article class="journal-card empty">
        <div>
          <span>Sin registros todavía</span>
          <p>Cuando guardes una reflexión, quedará en este historial para que puedas revisarla durante todo tu proceso.</p>
          <time>Record personal Almalead</time>
        </div>
      </article>
    `;
}

function buildJournalRecordText() {
  return [
    "Almalead - Record personal de bitácora",
    `Generado: ${getTimestampLabel()}`,
    "",
    ...state.journalEntries.flatMap((entry, index) => {
      const moduleLabel = entry.moduleId === "general"
        ? "General"
        : `Módulo ${modules.findIndex((module) => module.id === entry.moduleId) + 1}`;
      return [
        `Entrada ${state.journalEntries.length - index}`,
        `Fecha: ${entry.createdAtLabel || entry.createdAt}`,
        `Módulo: ${moduleLabel}`,
        `Dimensión: ${entry.dimension}`,
        "",
        entry.text,
        "",
        "-----",
        "",
      ];
    }),
  ].join("\n");
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
    .map(([name, documentId, moduleName, status, progress]) => {
      const profile = studentProfiles.find((student) => student.document === documentId);
      return `
      <article class="student-card" ${profile ? `data-view-student="${profile.id}"` : ""}>
        <div class="student-avatar">${name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
        <div>
          <h3>${name}</h3>
          <p>Documento ${documentId}</p>
          <span>${moduleName} · ${status}</span>
        </div>
        <strong>${progress}%</strong>
      </article>
    `;
    })
    .join("");
}

function renderAdminStudentProgress() {
  const selectedStudent = getStudentProfile(state.selectedStudentId);
  const studentSubmissions = getStudentSubmissions(selectedStudent);
  const visibleMovements = [
    ...studentSubmissions.map((submission) => ({
      title: `${submission.moduleName}: ${submission.title}`,
      detail: `${submission.fileName} · ${submission.status} · ${submission.submittedAt}`,
      status: submission.visibleToStudent ? "Calificación publicada" : "Pendiente de revisión",
    })),
    ...selectedStudent.evidences.map(([title, status, moduleName]) => ({
      title: `${moduleName}: ${title}`,
      detail: "Registro asociado al perfil académico",
      status,
    })),
  ];
  const riskCounts = studentProfiles.reduce(
    (counts, student) => {
      counts[student.risk] = (counts[student.risk] || 0) + 1;
      return counts;
    },
    {},
  );

  cohortRiskSummary.textContent = `${studentProfiles.length} estudiantes · ${riskCounts.Alto || 0} en riesgo alto`;

  adminStudentList.innerHTML = studentProfiles
    .map((student) => `
      <button class="student-progress-button ${student.id === selectedStudent.id ? "active" : ""}" type="button" data-admin-student="${student.id}">
        <span>${student.name}</span>
        <strong>${student.progress}%</strong>
        <small>Módulo ${student.currentModule} · Riesgo ${student.risk}</small>
      </button>
    `)
    .join("");

  studentProgressDetail.innerHTML = `
    <div class="student-detail-header">
      <div>
        <p class="eyebrow">Ficha académica</p>
        <h3>${selectedStudent.name}</h3>
        <span>${selectedStudent.email} · Documento ${selectedStudent.document}</span>
      </div>
      <span class="status ${getRiskClass(selectedStudent.risk)}">Riesgo ${selectedStudent.risk}</span>
    </div>
    <div class="student-kpi-grid">
      <article>
        <span>Avance</span>
        <strong>${selectedStudent.progress}%</strong>
      </article>
      <article>
        <span>Asistencia</span>
        <strong>${selectedStudent.attendance}%</strong>
      </article>
      <article>
        <span>Prácticas</span>
        <strong>${selectedStudent.practicesDone}/${selectedStudent.practicesRequired}</strong>
      </article>
      <article>
        <span>Módulo actual</span>
        <strong>${selectedStudent.currentModule}/12</strong>
      </article>
    </div>
    <div class="student-progress-bar" aria-label="Avance de ${selectedStudent.name}">
      <span style="width: ${selectedStudent.progress}%"></span>
    </div>
    <div class="student-detail-grid">
      <section>
        <h4>Pendientes críticos</h4>
        <ul>
          ${selectedStudent.pending.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section>
        <h4>Evidencias</h4>
        <ul>
          ${selectedStudent.evidences.map(([title, status, moduleName]) => `<li>${title} · ${moduleName} · ${status}</li>`).join("")}
        </ul>
      </section>
    </div>
    <div class="student-record-panel">
      <div class="student-record-heading">
        <div>
          <h4>Expediente académico y movimientos</h4>
          <p>Entregas, evidencias y acciones visibles para revisión del equipo académico.</p>
        </div>
        <span class="pill">${studentSubmissions.length} entrega${studentSubmissions.length === 1 ? "" : "s"} cargada${studentSubmissions.length === 1 ? "" : "s"}</span>
      </div>
      <div class="student-submission-cards">
        ${studentSubmissions.length ? studentSubmissions.map((submission) => `
          <article class="student-submission-card">
            <span class="pill">${submission.moduleName}</span>
            <h5>${submission.title}</h5>
            <p>${getMaterialTypeLabel(submission.fileName, "evaluaciones")} · ${submission.fileName}</p>
            <small>${submission.storagePath} · ${submission.submittedAt}</small>
            <button class="ghost-button" type="button" data-open-student-submission="${submission.id}">Revisar y calificar</button>
          </article>
        `).join("") : `
          <article class="student-submission-card empty">
            <h5>Sin entregas cargadas</h5>
            <p>Cuando el estudiante suba una evaluación, práctica, audio, video, imagen o documento aparecerá aquí.</p>
          </article>
        `}
      </div>
      <div class="student-timeline">
        ${visibleMovements.map((movement) => `
          <article>
            <span>${movement.status}</span>
            <strong>${movement.title}</strong>
            <small>${movement.detail}</small>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="student-next-action">
      <strong>Próxima acción sugerida</strong>
      <p>${selectedStudent.nextAction}</p>
      <div class="admin-actions">
        <button class="ghost-button" type="button" data-student-reminder="${selectedStudent.id}">Enviar recordatorio</button>
        <button class="primary-button" type="button" data-student-followup="${selectedStudent.id}">Registrar seguimiento</button>
      </div>
      <span>Última actividad: ${selectedStudent.lastActivity} · Mentor: ${selectedStudent.mentor}</span>
    </div>
    <div class="practice-table-wrap compact-table">
      <table class="practice-table student-module-table">
        <thead>
          <tr>
            <th>Módulo</th>
            <th>Contenido</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>${getStudentModuleRows(selectedStudent)}</tbody>
      </table>
    </div>
  `;
}

function renderSubmissionReviewCenter() {
  const selectedSubmission = getSelectedSubmission();

  submissionReviewList.innerHTML = state.submissionReviews
    .map((submission) => `
      <button class="submission-review-button ${submission.id === selectedSubmission.id ? "active" : ""}" type="button" data-select-submission="${submission.id}">
        <span>${submission.studentName}</span>
        <strong>${submission.moduleName}</strong>
        <small>${submission.title} · ${submission.fileName}</small>
        <em>${submission.visibleToStudent ? `Publicado ${submission.score}/${submission.maxScore}` : submission.status}</em>
      </button>
    `)
    .join("");

  gradingTitle.textContent = `${selectedSubmission.studentName} · ${selectedSubmission.moduleName}`;
  gradingMeta.textContent = [
    selectedSubmission.title,
    selectedSubmission.practiceType ? `Tipo: ${selectedSubmission.practiceType}` : "",
    selectedSubmission.observed ? `Observado/caso: ${selectedSubmission.observed}` : "",
    selectedSubmission.practiceFormat ? `Formato: ${selectedSubmission.practiceFormat}` : selectedSubmission.mimeType,
    `Ruta: ${selectedSubmission.storagePath}`,
  ].filter(Boolean).join(" · ");
  gradingScore.value = selectedSubmission.score ?? 90;
  gradingMaxScore.value = selectedSubmission.maxScore || 100;
  gradingFeedback.value = selectedSubmission.feedback || "";
  gradingRecommendations.value = selectedSubmission.recommendations || "";
  gradingInternalNotes.value = selectedSubmission.internalNotes || "";
  gradeState.textContent = selectedSubmission.visibleToStudent
    ? "Esta calificación ya está visible para el estudiante."
    : "Pendiente por publicar al estudiante.";
  gradeState.className = `admin-inline-state ${selectedSubmission.visibleToStudent ? "success" : ""}`;
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
    .map((practice) => {
      const [activity, date, status, note, fileName = "", format = ""] = practice;
      const className = status === "Completada" ? "done" : status === "En revisión" ? "review" : "pending";
      return `
        <tr>
          <td>${activity}</td>
          <td>${date}</td>
          <td><span class="status ${className}">${status}</span></td>
          <td>${format ? `${format} · ` : ""}${fileName ? `${fileName} · ` : ""}${note}</td>
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
    ["Bitácora reflexiva activa", state.journalEntries.some((entry) => entry.text?.trim().length > 20)],
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
  const { gpa } = calculateGPA();

  radialProgress.style.setProperty("--percent", blended);
  overallProgress.textContent = `${blended}%`;
  hoursCount.textContent = `${completedHours}/${totalHours}`;
  practiceCount.textContent = `${donePractices}/12`;
  document.querySelector("#gpaDisplay").textContent = `${gpa.toFixed(1)} / 5.0`;
}

function renderApprovals() {
  syncUnlockedModules();
  const selectedStudent = getStudentProfile(state.selectedStudentId);
  const studentSubmissions = getStudentSubmissions(selectedStudent);
  const selectedStudentGrades = state.studentGrades[selectedStudent.id] || {};
  const reviewedModules = modules.filter((module) => selectedStudentGrades[module.id] != null);
  const gpa = reviewedModules.length
    ? reviewedModules.reduce((sum, module) => sum + selectedStudentGrades[module.id], 0) / reviewedModules.length
    : 0;
  approvalRows.innerHTML = modules
    .map((module, index) => {
      const moduleNumber = index + 1;
      const status = getStudentModuleStatus(selectedStudent, moduleNumber);
      const evidence = getStudentEvidenceForModule(selectedStudent, moduleNumber);
      const primarySubmission = studentSubmissions.find((submission) => getModuleNumberFromText(submission.moduleName) === moduleNumber);
      const canReview = Boolean(primarySubmission);
      const canApprove = canReview || selectedStudent.submittedModules.includes(moduleNumber);
      const grade = selectedStudentGrades[module.id];
      const gradeValue = grade != null ? grade.toFixed(1) : "";
      return `
        <tr>
          <td>
            <strong>Módulo ${moduleNumber}</strong>
            <span>${module.title}</span>
          </td>
          <td>
            <strong>${module.evaluation}</strong>
            <span>Revisión de ${selectedStudent.name}</span>
          </td>
          <td>
            <div class="approval-evidence-stack">
              ${renderEvidenceMiniCards(evidence)}
            </div>
          </td>
          <td>
            <input type="number" class="grade-input" data-student-grade-module="${selectedStudent.id}:${module.id}" min="0" max="5" step="0.1" value="${gradeValue}" placeholder="—" ${canApprove ? "" : "disabled"} />
          </td>
          <td><span class="status ${status.className}">${status.label}</span></td>
          <td>
            <div class="approval-actions">
              <button class="ghost-button table-action" type="button" data-open-student-submission="${primarySubmission?.id || ""}" ${canReview ? "" : "disabled"}>
                Ver entrega
              </button>
              <button class="primary-button table-action" type="button" data-approve-student-module="${selectedStudent.id}:${module.id}" ${canApprove ? "" : "disabled"}>
                Aprobar con contexto
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("") + `
    <tr class="gpa-row">
      <td colspan="3"><strong>Promedio académico publicado (${reviewedModules.length} guías)</strong></td>
      <td><strong class="gpa-value">${gpa.toFixed(1)}</strong></td>
      <td colspan="2"></td>
    </tr>`;
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
  renderAdminMaterials();
  renderAdminStudentProgress();
  renderSubmissionReviewCenter();
  renderStudentGrades();
  renderCoachMessages();
  renderApprovals();
}

document.addEventListener("click", (event) => {
  const navLink = event.target.closest(".nav-list a");
  if (navLink) {
    event.preventDefault();
    closeQuickActionPanel();
    showSection(navLink.getAttribute("href").replace("#", ""));
  }

  const quickSectionButton = event.target.closest("[data-quick-section]");
  if (quickSectionButton) {
    closeQuickActionPanel();
    showSection(quickSectionButton.dataset.quickSection);
  }

  if (!event.target.closest("#quickActionPanel") && !event.target.closest("#topbarMaterials") && !event.target.closest("#topbarPending")) {
    closeQuickActionPanel();
  }

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
      openEvaluationModal(moduleId);
    }
  }

  const gradeInput = event.target.closest("[data-grade-module]");
  if (gradeInput) return;

  const studentSubmissionButton = event.target.closest("[data-open-student-submission]");
  if (studentSubmissionButton && !studentSubmissionButton.disabled) {
    focusSubmissionReview(studentSubmissionButton.dataset.openStudentSubmission);
  }

  const submitExamButton = event.target.closest("[data-submit-exam]");
  if (submitExamButton && !submitExamButton.disabled) {
    const exam = state.adminExams.find((item) => item.title === submitExamButton.dataset.submitExam);
    if (exam) openEvaluationModal(exam.moduleId, exam.title);
  }

  const approveButton = event.target.closest("[data-approve-module]");
  if (approveButton && !approveButton.disabled) {
    const moduleId = approveButton.dataset.approveModule;
    const gradeField = document.querySelector(`[data-grade-module="${moduleId}"]`);
    if (gradeField && gradeField.value) {
      state.grades[moduleId] = Math.min(5, Math.max(0, parseFloat(gradeField.value)));
    }
    state.approvals[moduleId] = "approved";
    persist();
    renderAll();
  }

  const approveStudentModuleButton = event.target.closest("[data-approve-student-module]");
  if (approveStudentModuleButton && !approveStudentModuleButton.disabled) {
    const [studentId, moduleId] = approveStudentModuleButton.dataset.approveStudentModule.split(":");
    const selectedStudent = getStudentProfile(studentId);
    const moduleNumber = modules.findIndex((module) => module.id === moduleId) + 1;
    const gradeField = document.querySelector(`[data-student-grade-module="${studentId}:${moduleId}"]`);
    if (gradeField && gradeField.value) {
      state.studentGrades[studentId] = state.studentGrades[studentId] || {};
      state.studentGrades[studentId][moduleId] = Math.min(5, Math.max(0, parseFloat(gradeField.value)));
    }
    selectedStudent.approvedModules = [...new Set([...selectedStudent.approvedModules, moduleNumber])].sort((a, b) => a - b);
    selectedStudent.submittedModules = selectedStudent.submittedModules.filter((item) => item !== moduleNumber);
    selectedStudent.blockedModules = selectedStudent.blockedModules.filter((item) => item !== moduleNumber + 1);
    selectedStudent.progress = Math.max(selectedStudent.progress, Math.round((selectedStudent.approvedModules.length / modules.length) * 100));
    selectedStudent.lastActivity = "Ahora";
    persist();
    persistAcademicProfiles();
    renderAll();
    showToast(`Módulo ${moduleNumber} aprobado para ${selectedStudent.name}`);
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderModules();
  }

  const resourceButton = event.target.closest("[data-open-resource]");
  if (resourceButton) {
    const material = state.adminMaterials.find((item) => item.title === resourceButton.dataset.openResource);
    if (!material) return;
    const moduleLabel = material.moduleId === "general"
      ? "General"
      : `Módulo ${modules.findIndex((module) => module.id === material.moduleId) + 1}`;
    downloadTextFile(`${material.title.replaceAll(" ", "-").toLowerCase()}-recurso.txt`, [
      "Almalead - Recurso académico",
      `Título: ${material.title}`,
      `Módulo: ${moduleLabel}`,
      `Tipo: ${getMaterialTypeLabel(material.fileName, material.section)}`,
      `Archivo: ${material.fileName}`,
      "",
      material.description,
      "",
      "En producción este botón abrirá o descargará el archivo privado desde Supabase Storage.",
    ].join("\n"));
    showToast(`Recurso abierto: ${material.title}`);
  }

  const journalEntryButton = event.target.closest("[data-open-journal-entry]");
  if (journalEntryButton) {
    const entry = state.journalEntries.find((item) => (
      item.id === journalEntryButton.dataset.openJournalEntry
      || `legacy-journal-${state.journalEntries.indexOf(item)}` === journalEntryButton.dataset.openJournalEntry
    ));
    if (!entry) return;
    const moduleLabel = entry.moduleId === "general"
      ? "General"
      : `Módulo ${modules.findIndex((module) => module.id === entry.moduleId) + 1}`;
    downloadTextFile(`almalead-bitacora-${entry.id || getTodayISO()}.txt`, [
      "Almalead - Entrada de bitácora",
      `Fecha: ${entry.createdAtLabel || entry.createdAt}`,
      `Módulo: ${moduleLabel}`,
      `Dimensión: ${entry.dimension}`,
      "",
      entry.text,
    ].join("\n"));
    showToast("Entrada de bitácora abierta.");
  }

  if (event.target.matches("[data-open-panel='agenda']")) {
    document.querySelector("#agendaPanel").classList.add("open");
    document.querySelector("#agendaPanel").setAttribute("aria-hidden", "false");
  }

  if (event.target.matches(".close-panel") || event.target.id === "agendaPanel") {
    document.querySelector("#agendaPanel").classList.remove("open");
    document.querySelector("#agendaPanel").setAttribute("aria-hidden", "true");
  }

  const reviewButton = event.target.closest("[data-review-submission]");
  if (reviewButton) {
    reviewState.textContent = `Revisando: ${reviewButton.dataset.reviewSubmission}. Puedes aprobar o solicitar ajustes.`;
    reviewState.className = "admin-inline-state success";
    showSection("admin");
  }

  const adminStudentButton = event.target.closest("[data-admin-student]");
  if (adminStudentButton) {
    state.selectedStudentId = adminStudentButton.dataset.adminStudent;
    localStorage.setItem("almalead.selectedStudentId", state.selectedStudentId);
    renderAdminStudentProgress();
  }

  const studentCard = event.target.closest("[data-view-student]");
  if (studentCard) {
    state.selectedStudentId = studentCard.dataset.viewStudent;
    localStorage.setItem("almalead.selectedStudentId", state.selectedStudentId);
    renderAdminStudentProgress();
    showSection("admin");
  }

  const reminderButton = event.target.closest("[data-student-reminder]");
  if (reminderButton) {
    const student = getStudentProfile(reminderButton.dataset.studentReminder);
    showToast(`Recordatorio preparado para ${student.name}.`);
  }

  const followupButton = event.target.closest("[data-student-followup]");
  if (followupButton) {
    const student = getStudentProfile(followupButton.dataset.studentFollowup);
    showToast(`Seguimiento registrado para ${student.name}.`);
    student.lastActivity = "Ahora";
    renderAdminStudentProgress();
  }

  const submissionButton = event.target.closest("[data-select-submission]");
  if (submissionButton) {
    state.selectedSubmissionId = submissionButton.dataset.selectSubmission;
    localStorage.setItem("almalead.selectedSubmissionId", state.selectedSubmissionId);
    renderSubmissionReviewCenter();
  }
});

window.addEventListener("hashchange", () => {
  if (!document.body.classList.contains("auth-locked")) {
    showSection(location.hash.replace("#", "") || "resumen", { updateHash: false });
  }
});

document.addEventListener("change", (event) => {
  const gradeInput = event.target.closest("[data-grade-module]");
  if (gradeInput) {
    const moduleId = gradeInput.dataset.gradeModule;
    const value = parseFloat(gradeInput.value);
    if (!isNaN(value)) {
      state.grades[moduleId] = Math.min(5, Math.max(0, value));
    } else {
      delete state.grades[moduleId];
    }
    persist();
    renderMetrics();
    renderEvaluations();
    renderApprovals();
  }
});

document.querySelector("#saveReflection").addEventListener("click", () => {
  const text = reflection.value.trim();
  if (!text) {
    saveState.textContent = "Escribe una reflexión antes de guardar.";
    saveState.className = "save-state error";
    return;
  }
  state.reflection = text;
  const createdAt = new Date();
  state.journalEntries = [
    {
      id: `journal-${createdAt.getTime()}`,
      moduleId: journalModule.value,
      dimension: journalDimension.value,
      text,
      createdAt: createdAt.toISOString(),
      createdAtLabel: getTimestampLabel(createdAt),
      source: "Registro del participante",
    },
    ...state.journalEntries,
  ];
  localStorage.setItem("almalead.reflection", state.reflection);
  persist();
  saveState.textContent = "Entrada de bitácora guardada.";
  saveState.className = "save-state success";
  reflection.value = "";
  renderJournal();
  renderCertification();
});

downloadJournalRecord.addEventListener("click", () => {
  if (!state.journalEntries.length) {
    showToast("Aún no hay entradas de bitácora para descargar.");
    return;
  }
  downloadTextFile("almalead-record-bitacora.txt", buildJournalRecordText());
});

syncCalendar.addEventListener("click", (event) => {
  downloadTextFile("almalead-agenda-certificacion.ics", buildCalendarICS());
  event.target.textContent = "Agenda descargada";
  showToast("Agenda descargada. Ábrela para agregarla a Google Calendar, Apple Calendar u Outlook.");
  setTimeout(() => {
    event.target.textContent = "Sincronizar agenda";
  }, 1800);
});

newJournalEntry.addEventListener("click", () => {
  showSection("bitacora");
  journalEditorPanel.classList.add("is-active");
  journalEditorPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  reflection.focus();
  saveState.textContent = "Nueva entrada abierta. Escribe el cuerpo de tu reflexión y guarda tu record.";
  saveState.className = "save-state";
  clearTimeout(newJournalEntry.timeoutId);
  newJournalEntry.timeoutId = setTimeout(() => {
    journalEditorPanel.classList.remove("is-active");
  }, 2600);
});

topbarMaterials.addEventListener("click", () => {
  openQuickActionPanel("search");
});

topbarPending.addEventListener("click", () => {
  openQuickActionPanel("pending");
});

topbarProfile.addEventListener("click", () => {
  closeQuickActionPanel();
  showSection("resumen");
  showToast("Perfil y avance general del usuario activo.");
});

document.querySelector("#addPractice").addEventListener("click", () => {
  practiceForm.classList.add("open");
  practiceForm.setAttribute("aria-hidden", "false");
  practiceObserved.focus();
});

cancelPractice.addEventListener("click", () => {
  practiceForm.reset();
  practiceFileLabel.textContent = "Adjuntar evidencia: audio, video, imagen, documento o ZIP";
  practiceForm.classList.remove("open");
  practiceForm.setAttribute("aria-hidden", "true");
  practiceFormState.textContent = "La entrega quedará visible en Dirección académica para escuchar, ver, leer, descargar, comentar y calificar.";
  practiceFormState.className = "admin-inline-state";
});

practiceFileInput.addEventListener("change", () => {
  const file = practiceFileInput.files[0];
  practiceFileLabel.textContent = file ? file.name : "Adjuntar evidencia: audio, video, imagen, documento o ZIP";
});

practiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const file = practiceFileInput.files[0];
  if (!file) {
    practiceFormState.textContent = "Adjunta el audio, video, imagen, documento o ZIP de la práctica.";
    practiceFormState.className = "admin-inline-state error";
    return;
  }

  const module = modules.find((item) => item.id === practiceModule.value) || modules[0];
  const moduleNumber = modules.findIndex((item) => item.id === module.id) + 1;
  const submittedAt = getTodayISO();
  const title = `${practiceType.value} · ${practiceObserved.value.trim()}`;
  const note = practiceContext.value.trim() || "Sin comentario adicional del estudiante.";
  const storagePath = `demo/practicas/modulo-${moduleNumber}/${file.name}`;

  practices = [
    ...practices,
    [title, submittedAt, "En revisión", note, file.name, practiceFormat.value],
  ];
  evidenceItems.unshift([file.name, file.type || practiceFormat.value, `Módulo ${moduleNumber} · ${practiceType.value}`, "En revisión"]);
  state.submissionReviews = [
    {
      id: `practice-${Date.now()}`,
      studentName: "Estudiante Almalead",
      studentId: "demo-estudiante",
      moduleName: `Módulo ${moduleNumber}`,
      title,
      fileName: file.name,
      mimeType: file.type || practiceFormat.value,
      storagePath,
      submittedAt,
      status: "En revisión",
      score: null,
      maxScore: 100,
      feedback: "",
      recommendations: "",
      internalNotes: "",
      visibleToStudent: false,
      observed: practiceObserved.value.trim(),
      practiceType: practiceType.value,
      practiceFormat: practiceFormat.value,
      studentComment: note,
    },
    ...state.submissionReviews,
  ];
  state.selectedSubmissionId = state.submissionReviews[0].id;
  persistStudentWork();
  persistAdminContent();
  practiceForm.reset();
  practiceFileLabel.textContent = "Adjuntar evidencia: audio, video, imagen, documento o ZIP";
  practiceForm.classList.remove("open");
  practiceForm.setAttribute("aria-hidden", "true");
  renderAll();
  showToast("Práctica enviada a revisión académica.");
});

studentUploadButton.addEventListener("click", () => {
  showSection("practicas");
  practiceForm.classList.add("open");
  practiceForm.setAttribute("aria-hidden", "false");
  practiceObserved.focus();
});

studentEvidenceInput.addEventListener("change", () => {
  const files = [...studentEvidenceInput.files];
  if (!files.length) return;
  files.forEach((file) => {
    evidenceItems.unshift([file.name, file.type || "archivo", "Carga del estudiante", "En revisión"]);
  });
  persistStudentWork();
  renderEvidenceLibrary();
  showToast(`${files.length} evidencia${files.length === 1 ? "" : "s"} enviada${files.length === 1 ? "" : "s"} a revisión.`);
  studentEvidenceInput.value = "";
});

document.querySelector("#exportSnapshot").addEventListener("click", async (event) => {
  const { completedHours, totalHours, blended } = calculateProgress();
  const { gpa } = calculateGPA();
  const snapshot = `Almalead - resumen académico\nAvance: ${blended}%\nMódulos: ${completedHours}/${totalHours}\nPrácticas: ${practices.length}\nPromedio: ${gpa.toFixed(1)} / 5.0`;
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

focusPreEnrollment.addEventListener("click", () => {
  showSection("admin");
  preEnrollmentForm.scrollIntoView({ behavior: "smooth", block: "center" });
});

examFileInput.addEventListener("change", () => {
  examFileLabel.textContent = getFileSummary(examFileInput.files);
});

materialFileInput.addEventListener("change", () => {
  materialFileLabel.textContent = getFileSummary(materialFileInput.files);
});

function collectExam(status) {
  const module = modules.find((item) => item.id === examModule.value) || modules[0];
  return {
    title: examTitle.value.trim() || "Evaluación sin título",
    moduleId: module.id,
    moduleName: module.title,
    dueDate: examDueDate.value || getTodayISO(),
    deliveryType: examDeliveryType.value,
    instructions: examInstructions.value.trim() || "Revisa las instrucciones entregadas por dirección académica.",
    fileName: getFileSummary(examFileInput.files),
    status,
  };
}

function saveExam(status) {
  const exam = collectExam(status);
  state.adminExams = [exam, ...state.adminExams.filter((item) => item.title !== exam.title)];
  persistAdminContent();
  renderEvaluations();
  examState.textContent = status === "Publicado"
    ? "Evaluación publicada en el panel del estudiante."
    : "Borrador guardado en este navegador.";
  examState.className = "admin-inline-state success";
  showToast(examState.textContent);
}

saveExamDraft.addEventListener("click", () => saveExam("Borrador"));
publishExam.addEventListener("click", () => saveExam("Publicado"));

function collectMaterial(status) {
  return {
    title: materialTitle.value.trim() || "Material sin título",
    description: materialText.value.trim() || "Material compartido por dirección académica.",
    section: materialSection.value,
    moduleId: materialModule.value,
    fileName: getFileSummary(materialFileInput.files),
    status,
    createdAt: getTodayISO(),
  };
}

function saveMaterial(status) {
  const material = collectMaterial(status);
  state.adminMaterials = [material, ...state.adminMaterials.filter((item) => item.title !== material.title)];
  persistAdminContent();
  renderResources();
  renderLessons();
  renderJournal();
  renderAdminMaterials();
  materialState.textContent = status === "Publicado"
    ? "Material publicado en el panel del estudiante."
    : "Material guardado como borrador.";
  materialState.className = "admin-inline-state success";
  showToast(materialState.textContent);
}

saveMaterialDraft.addEventListener("click", () => saveMaterial("Borrador"));
publishMaterial.addEventListener("click", () => saveMaterial("Publicado"));

requestReviewChanges.addEventListener("click", () => {
  reviewState.textContent = "Solicitud de ajustes registrada para el estudiante.";
  reviewState.className = "admin-inline-state success";
  showToast("Solicitud de ajustes registrada.");
});

approveReviewedModule.addEventListener("click", () => {
  const firstSubmitted = modules.find((module) => getModuleStatus(module.id) === "submitted");
  if (firstSubmitted) {
    state.approvals[firstSubmitted.id] = "approved";
    persist();
    renderAll();
  }
  reviewState.textContent = firstSubmitted
    ? `Módulo aprobado: ${firstSubmitted.title}.`
    : "No hay módulos enviados pendientes de aprobación.";
  reviewState.className = "admin-inline-state success";
  showToast(reviewState.textContent);
});

downloadSubmission.addEventListener("click", () => {
  const submission = getSelectedSubmission();
  const content = [
    "Almalead - entrega académica",
    `Estudiante: ${submission.studentName}`,
    `Módulo: ${submission.moduleName}`,
    `Entrega: ${submission.title}`,
    submission.practiceType ? `Tipo de práctica: ${submission.practiceType}` : "",
    submission.observed ? `Observado/coachee/caso: ${submission.observed}` : "",
    submission.practiceFormat ? `Formato declarado: ${submission.practiceFormat}` : "",
    submission.studentComment ? `Comentario del estudiante: ${submission.studentComment}` : "",
    `Archivo: ${submission.fileName}`,
    `Tipo: ${submission.mimeType}`,
    `Ruta Supabase Storage: almalead-evidence/${submission.storagePath}`,
    `Fecha de envío: ${submission.submittedAt}`,
    `Estado: ${submission.status}`,
  ].filter(Boolean).join("\n");
  downloadTextFile(`${submission.studentName}-${submission.moduleName}-entrega.txt`.replaceAll(" ", "-").toLowerCase(), content);
  showToast("Ficha de entrega descargada. En producción descargará el archivo privado desde Supabase.");
});

publishGrade.addEventListener("click", () => {
  const submission = getSelectedSubmission();
  submission.score = Number(gradingScore.value || 0);
  submission.maxScore = Number(gradingMaxScore.value || 100);
  submission.feedback = gradingFeedback.value.trim();
  submission.recommendations = gradingRecommendations.value.trim();
  submission.internalNotes = gradingInternalNotes.value.trim();
  submission.status = "Calificada";
  submission.visibleToStudent = true;
  persistAdminContent();
  renderSubmissionReviewCenter();
  renderStudentGrades();
  showToast(`Calificación publicada para ${submission.studentName}.`);
});

function buildCoachEmailBody() {
  return [
    `Coach: ${coachRecipient.value}`,
    `Asunto: ${coachSubject.value.trim()}`,
    "",
    coachMessage.value.trim(),
    "",
    "Enviado desde el portal Almalead.",
  ].join("\n");
}

coachMessageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = {
    coach: coachRecipient.value,
    subject: coachSubject.value.trim(),
    message: coachMessage.value.trim(),
    emailTo: "coaching@javipenaloza.com",
    sentAt: getTodayISO(),
    status: "Enviado local",
  };
  state.coachMessages = [message, ...state.coachMessages];
  persistAdminContent();
  renderCoachMessages();
  coachMessageState.textContent = "Mensaje preparado para coaching@javipenaloza.com.";
  coachMessageState.className = "admin-inline-state success";
  const mailto = `mailto:coaching@javipenaloza.com?subject=${encodeURIComponent(`[Almalead] ${message.subject} - ${message.coach}`)}&body=${encodeURIComponent(buildCoachEmailBody())}`;
  window.location.href = mailto;
  showToast("Mensaje registrado. Se abrirá tu correo para enviarlo al equipo.");
});

copyCoachMessage.addEventListener("click", async () => {
  const text = `Para: coaching@javipenaloza.com\n${buildCoachEmailBody()}`;
  try {
    await navigator.clipboard.writeText(text);
    coachMessageState.textContent = "Mensaje copiado al portapapeles.";
    coachMessageState.className = "admin-inline-state success";
    showToast("Mensaje copiado.");
  } catch {
    coachMessageState.textContent = "No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente.";
    coachMessageState.className = "admin-inline-state error";
  }
});

closeEvaluationModal.addEventListener("click", closeEvaluationModalPanel);

evaluationModal.addEventListener("click", (event) => {
  if (event.target === evaluationModal) closeEvaluationModalPanel();
});

evaluationFileInput.addEventListener("change", () => {
  const file = evaluationFileInput.files[0];
  evaluationFileLabel.textContent = file ? file.name : "Seleccionar archivo de entrega";
});

downloadEvaluationGuide.addEventListener("click", () => {
  const evaluation = getEvaluationGuide(state.selectedEvaluationModuleId);
  if (!evaluation) return;
  downloadTextFile(
    evaluation.guide.resourceName.replace(".pdf", ".txt"),
    buildEvaluationGuideText(evaluation),
  );
  evaluationModalState.textContent = "Guía descargada. Realiza la actividad y adjunta tu evidencia cuando esté lista.";
  evaluationModalState.className = "admin-inline-state success";
  showToast("Guía de evaluación descargada.");
});

confirmEvaluationSubmission.addEventListener("click", () => {
  const evaluation = state.selectedEvaluationExamTitle
    ? getExamEvaluation(state.selectedEvaluationExamTitle)
    : getEvaluationGuide(state.selectedEvaluationModuleId);
  const file = evaluationFileInput.files[0];
  if (!evaluation) return;

  if (!file) {
    evaluationModalState.textContent = "Adjunta primero el archivo, audio, video, imagen o documento de tu entrega.";
    evaluationModalState.className = "admin-inline-state error";
    return;
  }

  const submittedAt = getTodayISO();
  state.approvals[evaluation.module.id] = "submitted";
  practices = [
    ...practices,
    [
      state.selectedEvaluationExamTitle || `Evaluación módulo ${evaluation.moduleNumber}: ${evaluation.module.title}`,
      submittedAt,
      "En revisión",
      `Archivo: ${file.name}. ${evaluationStudentComment.value.trim() || "Sin comentario adicional."}`,
    ],
  ];
  state.submissionReviews = [
    {
      id: `sub-local-${evaluation.module.id}-${Date.now()}`,
      studentName: "Estudiante Almalead",
      studentId: "demo-estudiante",
      moduleName: `Módulo ${evaluation.moduleNumber}`,
      title: state.selectedEvaluationExamTitle || evaluation.module.evaluation,
      fileName: file.name,
      mimeType: file.type || "archivo",
      storagePath: `demo/${evaluation.module.id}/${file.name}`,
      submittedAt,
      status: "En revisión",
      score: null,
      maxScore: 100,
      feedback: "",
      recommendations: "",
      internalNotes: "",
      visibleToStudent: false,
    },
    ...state.submissionReviews,
  ];
  state.selectedSubmissionId = state.submissionReviews[0].id;
  persist();
  persistAdminContent();
  renderAll();
  closeEvaluationModalPanel();
  showSection("practicas");
  showToast("Evaluación enviada a revisión académica.");
});

exportEvidenceReport.addEventListener("click", () => {
  const header = "Estudiante,Módulo,Entrega,Archivo,Ruta Storage,Estado,Calificación,Recomendaciones,Visible";
  const rows = state.submissionReviews.map((submission) => [
    submission.studentName,
    submission.moduleName,
    submission.title,
    submission.fileName,
    `almalead-evidence/${submission.storagePath}`,
    submission.status,
    submission.score == null ? "" : `${submission.score}/${submission.maxScore}`,
    submission.recommendations || "",
    submission.visibleToStudent ? "Sí" : "No",
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
  downloadTextFile("almalead-reporte-entregas.csv", [header, ...rows].join("\n"));
  showToast("Reporte de entregas descargado.");
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
showSection(location.hash.replace("#", "") || "resumen", { updateHash: false, instant: true });

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

  const sessionUser = { name: user.name, initials: user.initials, role: user.role || "student" };
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
    role: "student",
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
  document.body.removeAttribute("data-role");
});

passwordEye.addEventListener("click", () => {
  const passwordInput = document.querySelector("#password");
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordEye.setAttribute("aria-label", isVisible ? "Mostrar contraseña" : "Ocultar contraseña");
});

// ─── À REMPLIR ────────────────────────────────────────────────────────────────
// C'est ici que tu personnalises tout ton portfolio.
// Remplace les "" et [] par tes vraies informations.
// ──────────────────────────────────────────────────────────────────────────────

export const identity = {
  name:       "Titouan ADAM",          // ex: "Titwan Devrient"
  role:       "Développeur Full Stack",          // ex: "Développeur Full Stack"
  tagline:    "Diplomé de l'EPITA et actuellement en poste chez Aubay Solutec, je suis ouvert à de nouvelles opportunités.",          // phrase d'accroche courte
  location:   "Paris, France",          // ex: "Lyon, France"
  available:  true,        // true = badge "Disponible" affiché
  email:      "titouan1adam@gmail.com",          // ex: "titwan@example.com"
  linkedin:   "https://www.linkedin.com/in/titouan-adam/",          // URL complète LinkedIn
  github:     "https://github.com/mrtitwan",          // URL complète GitHub
  cv:         "",          // URL ou chemin vers ton CV PDF (optionnel)
};

export const experiences = [
  // {
  //   period:   "2024 — 2025",
  //   title:    "Intitulé du poste",
  //   company:  "Nom entreprise",
  //   desc:     "Description de ta mission en 1-3 phrases.",
  //   tags:     ["Java", "Spring Boot", "PostgreSQL"],
  // },
  {
    period:   "Janvier 2026 — Présent",
    title:    "Ingénieur d'études et développement",
    company:  "Aubay Solutec",
    desc:     "Formations sur les technologies Java, Spring Boot, React et Angular. Participation à des projets internes de développement et de traitement de données. Formation à l'utilisation de l'intelligence artificielle pour l'automatisation de tâches et l'amélioration des processus de développement.",
    tags:     ["Java", "Spring Boot", "React", "Angular", "Intelligence Artificielle"],
  },
  {
    period:   "Mai 2025 — Novembre 2025",
    title:    "Développeur Consultant Full Stack Web",
    company:  "Capgemini, pour le compte du Groupe U",
    desc:     "Développement et maintenance du site web http://magasins-u.fr/ en utilisant Java, React, le système de gestion de contenu Adobe Experience Manager, et une méthodologie agile SCRUMBAN. Collaboration avec les équipes client au quotidien pour assurer la qualité et la pertinence des fonctionnalités développées. Participation à la refonte de l'architecture du site pour améliorer les performances et la scalabilité.",
    tags:     ["Java", "React", "Adobe Experience Manager", "Agile"],
  },
  {
    period:   "Avril 2024 - Janvier 2025",
    title:    "Assistant chef de projet",
    company:  "Hôpital Bichat, AP-HP",
    desc:     "",
    tags:     ["Recueil de besoins", "Cahier des charges", "Documentation", "PostgreSQL", "Node.js", "React"],
  },
  {
    period:   "Septembre 2023 - Février 2024",
    title:    "Développeur Backend Android",
    company:  "Sysnav",
    desc:     "Maintenance du backend Java d'une application Android de navigation et de traitement de données de capteurs de position. Refonte complète de ce backend en Kotlin pour améliorer les performances et la maintenabilité. Test et validation de la fonctionnalité quotidiennement au sein de l'entreprise.",
    tags:     ["Java", "Kotlin", "PostgreSQL", "Android", "Navigation", "Traitement de données"],
  },
  {
    period:   "Septembre 2022 - Juin 2023",
    title:    "Assistant enseignant en programmation",
    company:  "EPITA",
    desc:     "Création, validation, encadrement et correction de travaux pratiques de programmation en Ocaml et C# pour les étudiants de première année. Assistance aux étudiants lors des séances de travaux pratiques et de révision. Participation à l'amélioration continue du contenu pédagogique en fonction des retours des étudiants et des évolutions technologiques.",
    tags:     ["Ocaml", "C#", "git","Enseignement"],
  }
];

export const projects = [
  // {
  //   type:   "Kata · Full Stack",       // catégorie libre
  //   title:  "Nom du projet",
  //   desc:   "Description courte du projet.",
  //   stack:  ["React", "Node.js"],
  //   link:   "https://github.com/...", // ou "" si pas encore public
  //   wip:    false,                    // true = badge "En cours"
  // },
];

export const skills = [
  // {
  //   category: "Backend",
  //   items: [
  //     { name: "Java 17 / 21", level: 90 },  // level de 0 à 100
  //     { name: "Spring Boot",  level: 85 },
  //   ],
  // },
];

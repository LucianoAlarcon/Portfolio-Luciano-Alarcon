import type { TechCategory, Project, ContactLink } from "@/types";

export const siteConfig = {
  name: "Luciano Alarcón",
  role: "Desarrollador Full Stack",
  description:
    "Apasionado por construir productos digitales elegantes y escalables. Especializado en React, Node.js y arquitecturas modernas.",
  available: true,
  footer: "© 2025 Luciano Alarcón — Construido con Next.js",
};

export const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", years: "4 años", level: 90 },
      { name: "Next.js", years: "3 años", level: 85 },
      { name: "TypeScript", years: "4 años", level: 90 },
      { name: "Tailwind CSS", years: "2 años", level: 70 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", years: "4 años", level: 90 },
      { name: "Express", years: "4 años", level: 90 },
      { name: "MongoDB", years: "4 años", level: 90 },
      { name: "SQL", years: "2 años", level: 60 },
      { name: "Supabase", years: "2 años", level: 60 },
    ],
  },
  {
    label: "DevOps & Herramientas",
    items: [
      { name: "Docker", years: "2 años", level: 75 },
      { name: "AWS", years: "2 años", level: 65 },
      { name: "Git", years: "5 años", level: 80 },
    ],
  },
];

export const projects: Project[] = [
  {
    num: "001",
    title: "E-Commerce Platform - Qira Global",
    description:
      "Plataforma de comercio de productos agricolas con carrito de compras en tiempo real, pagos integrados y panel de administración completo.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    href: "https://www.qiraglobal.com/",
  },
  {
    num: "002",
    title: "Wallet App - Qira Pagos",
    description:
      "Aplicación de billetera digital para gestionar pagos, con autenticación segura, historial de transacciones y notificaciones en tiempo real.",
    tags: ["React Native", "SQL", "Sequalize"],
    href: "https://www.qirapagos.com/",
  },
  {
    num: "003",
    title: "Aapresid – Red de Innovadores (Digital Media Platform)",
    description:
      "Plataforma de medios digitales para compartir innovaciones agrícolas, con contenido multimedia, interacción social y análisis de datos.",
    tags: ["Next.js", "Node.js", "AWS S3", "MongoDB"],
    href: "https://reddeinnovadores.aapresid.org.ar/es",
  },
  {
    num: "004",
    title: "M23 – Virtual Checkbook (Fintech)",
    description:
      "Aplicación para venta y cotización de cheques, con autenticación segura, integración de pagos y panel de usuario intuitivo.",
    tags: ["React", "Supabase", "SQL", "Tailwind"],
    href: "https://m23.org/",
  },
];

export const contactLinks: ContactLink[] = [
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/luciano-alarcon/",
    href: "https://www.linkedin.com/in/luciano-alarcon/",
    external: true,
  },
  {
    icon: "@",
    label: "Email",
    value: "luchialarcon123@gmail.com",
    href: "mailto:luchialarcon123@gmail.com",
  },
  {
    icon: "☎",
    label: "Teléfono",
    value: "+54 341 6022317",
    href: "tel:+543416022317",
  },
];

export const cvInfo = {
  title: "Luciano Alarcon — CV",
  subtitle: "Desarrollador Full Stack · 2026",
  format: "PDF",
  language: "Español / English",
  pages: "2",
  sections: [
    "Perfil",
    "Skills",
    "Experiencia",
    "Proyectos",
    "Educación",
    "Idiomas",
  ],
  downloadPath: "/public/Luciano_Alarcon_Fullstack_CV.pdf",
};

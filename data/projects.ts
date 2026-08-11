import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "Digital Taaruf Platform",
    slug: "digital-taaruf",
    client: "Kemenag Lebak",
    description:
      "A web platform that supports the taaruf process according to Islamic principles. Handles authentication, profile management, and privacy-focused workflows.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    featured: true,
  },

  {
    name: "Data Report System",
    slug: "kpu-report",
    client: "KPU Kota Serang",
    description:
      "A web-based e-Report system that streamlines data input and reporting. Syncs in real time with a spreadsheet-backed database.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS", "Spreadsheet DB"],
    featured: true,
  },

  {
    name: "Payroll Management System",
    slug: "payroll",
    description:
      "Payroll with role-based access control, attendance tracking, and salary calculation. Separate dashboards for administrators and employees.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    featured: true,
  },
];
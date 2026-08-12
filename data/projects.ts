import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "digital-taaruf",
    name: "Digital Taaruf Platform",
    client: "KEMENAG LEBak",
    year: "2026",
    description:
      "A web platform that supports the taaruf process according to Islamic principles. Handles authentication, profile management, and privacy-focused workflows.",
    technologies: [
      "Laravel",
      "MySQL",
      "Tailwind CSS",
    ],
    image: "/projects/digital_taaruf.webp",
    repository: "",
    liveUrl: "",
    featured: true,
  },

  {
    slug: "kpu-report",
    name: "Data Report System",
    client: "KPU Kota Serang",
    year: "2025",
    description:
      "A web-based e-Report system that streamlines data input and reporting. Syncs in real time with a spreadsheet-backed database.",
    technologies: [
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "Spreadsheet DB",
    ],
    image: "/projects/kpu_report.webp",
    repository: "",
    liveUrl: "",
    featured: true,
  },

  {
    slug: "payroll",
    name: "Payroll Management System",
    year: "2025",
    description:
      "Payroll with role-based access control, attendance tracking, and salary calculation. Separate dashboards for administrators and employees.",
    technologies: [
      "Laravel",
      "MySQL",
      "Tailwind CSS",
    ],
    image: "/projects/payroll_service.webp",
    repository: "",
    liveUrl: "",
    featured: true,
  },
];
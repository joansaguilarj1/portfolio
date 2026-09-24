import { Download } from "lucide-react";
import Image from "next/image";
const experiences = [
    {
        logo: "/images/sofka-logo.webp",
        company: "Sofka Technologies",
        role: "Full Stack Developer",
        period: "Abr 2024 — Abr 2025",
        description:
            "Desarrollo de aplicaciones web para proyectos del sector financiero y asegurador.",
        technologies: [
            "TypeScript",
            "Next.js",
            "NestJS",
            "PostgreSQL",
        ],
    },
    {
        logo: "/images/tcs-logo.webp",
        company: "TCS",
        role: "Frontend Developer",
        period: "Nov 2021 — Abr 2024",
        description:
            "Desarrollo de funcionalidades para aplicaciones bancarias, integración con servicios backend y construcción de flujos de negocio.",
        technologies: [
            "Angular",
            "TypeScript",
            "Jenkins",
            "GCP",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experiencia"
            className="relative overflow-hidden bg-surface-secondary pt-20">

            <div className="mx-auto max-w-7xl px-6">

                {/* header */}
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">
                        Experiencia Profesional
                    </h2>

                    <a
                        href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                        download
                        className="inline-flex rounded-lg bg-gradient-to-r from-blue-400 to-[#919af4] p-[1px] transition-transform hover:scale-[1.02]">
                        <span className="flex w-full items-center justify-center gap-2 rounded-[7px] bg-card-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-card-primary/90">
                            Ver CV completo
                            <Download size={16} />
                        </span>
                    </a>
                </div>

                {/* Experience cards */}
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {experiences.map((item) => (
                        <div key={item.company} className="flex gap-4 md:gap-6 p-6 rounded-2xl bg-card-primary border border-white/5">
                            {/* 1. COLUMNA IZQUIERDA: Logo */}
                            <div className="shrink-0 mt-1">
                                {/* Contenedor del logo con tamaño fijo */}
                                <div className="relative w-20 h-8 md:w-24 md:h-9 lg:w-40 lg:h-16  rounded-md overflow-hidden bg-white/5 border border-white/10">
                                    <Image
                                        src={item.logo}
                                        alt={item.company}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* 2. COLUMNA DERECHA: Contenido */}
                            <div className="flex flex-col flex-1">

                                {/* Encabezado: Empresa, Cargo y Fecha */}
                                <div className="flex flex-col mb-3">
                                    <h3 className="text-xl font-bold text-white">{item.company}</h3>
                                    <h4 className="text-lg font-medium text-blue-400">{item.role}</h4>
                                    <span className="text-sm text-slate-500 font-mono mt-1">{item.period}</span>
                                </div>

                                {/* Descripción */}
                                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {/* Tecnologías (Badges/Píldoras) */}
                                <div className="flex flex-wrap gap-2">
                                    {item.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>))}


                </div>
            </div>



        </section >

    )
}
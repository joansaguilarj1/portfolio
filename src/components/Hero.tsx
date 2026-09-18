import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiNestjs,
    SiPostgresql

} from "react-icons/si";

import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";


export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen overflow-hidden bg-slate-950 pt-16"
        >
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-20">
                <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Content */}
                    <div>
                        <p className="mb-4 text-lg font-medium text-blue-400">
                            ¡Hola! Soy
                        </p>

                        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Joan Sebastian
                            <span className="block text-blue-400">
                                Aguilar Jimenez
                            </span>
                        </h1>

                        <p className="mt-6 text-2xl font-semibold text-white">
                            Full Stack Developer
                        </p>

                        <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
                            Desarrollo aplicaciones web escalables y robustas con
                            tecnologías modernas. Apasionado por escribir código limpio,
                            resolver problemas complejos y crear experiencias digitales
                            excepcionales.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="#proyectos"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                            >
                                Ver mis proyectos
                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
                            >
                                Descargar CV
                                <Download size={18} />
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="mt-8 flex items-center gap-5">
                            <a
                                href="https://www.linkedin.com/in/joansaguilarj1/"
                                target="_blank"
                                aria-label="LinkedIn"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>

                            <a
                                href="https://github.com/joansaguilarj1"
                                target="_blank"
                                aria-label="GitHub"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>

                            <a
                                href="#contacto"
                                aria-label="Email"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <Mail size={30} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative flex min-h-125 items-center justify-center">

                        {/* Glow */}
                        <div className="absolute h-80 w-80 rounded-full bg-blue-600/40 blur-3xl" />

                        {/* Technology icons */}
                        <div className="absolute inset-0">

                            {/* TypeScript */}
                            <div className="absolute left-[8%] top-[18%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-lg">
                                <SiTypescript className="text-3xl text-[#3178C6]" />
                            </div>

                            {/* React */}
                            <div className="absolute left-[2%] top-[42%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-lg">
                                <SiReact className="text-3xl text-[#61DAFB]" />
                            </div>

                            {/* Node */}
                            <div className="absolute left-[8%] bottom-[18%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-lg">
                                <SiNodedotjs className="text-3xl text-[#5FA04E]" />
                            </div>

                            {/* Next */}
                            <div className="absolute right-[8%] top-[18%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-lg">
                                <SiNextdotjs className="text-3xl text-white" />
                            </div>

                            {/* Nest */}
                            <div className="absolute right-[2%] top-[42%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-lg">
                                <SiNestjs className="text-3xl text-[#E0234E]" />
                            </div>

                            {/* PostgreSQL */}
                            <div className="absolute right-[8%] bottom-[18%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-lg">
                                <SiPostgresql className="text-3xl text-[#4169E1]" />
                            </div>

                        </div>

                        {/* Profile */}
                        <div className="relative z-10 h-129 w-90">
                            <Image
                                src="/images/profile.webp"
                                alt="Joan Sebastian Aguilar"
                                fill
                                priority
                                className="object-contain"
                                sizes="360px"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

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
                                <LinkedinIcon className="w-6 h-6" />
                            </a>

                            <a
                                href="https://github.com/joansaguilarj1"
                                target="_blank"
                                aria-label="GitHub"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <GithubIcon className="w-6 h-6" />
                            </a>

                            <a
                                href="#contacto"
                                aria-label="Email"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative flex min-h-[500px] items-center justify-center">
                        <div className="absolute h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

                        <div className="relative flex h-96 w-80 items-center justify-center rounded-3xl border border-white/5 bg-white/[0.02]">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/profile.webp"
                                alt="Joan Sebastian Aguilar"
                                width={500}
                                height={600}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
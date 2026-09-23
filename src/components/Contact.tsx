import { Mail, MapPin, Phone, Send } from "lucide-react";
import Form from 'next/form'

export default function Contact() {
    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-slate-950 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Contact card */}
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 rounded-2xl bg-slate-900/50 border border-white/5">
                    <div className="m-10">
                        <h2 className="text-3xl">
                            ¿Tienes un proyecto en mente?
                        </h2>
                        <h3 className="text-2xl text-blue-600/90 dark:text-sky-400 mt-1">
                            ¡Hablemos!
                        </h3>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4 mt-4">
                            Estoy abierto a nuevas oporturnidades y proyectos desafiantes, si crees que puedo aportar valor a tu equipo no dudes en contactarme.</p>
                        <a
                            href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                            download
                            className="flex items-center gap-2 py-2 text-sm font-mono text-white transition-colors hover:border-white/20 hover:bg-slate-900/70"
                        >
                            <Mail size={16} />
                            Joansaguilarj@gmail.com
                        </a>
                        <a
                            href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                            download
                            className="flex items-center gap-2 py-2 text-sm font-mono text-white transition-colors hover:border-white/20 hover:bg-slate-900/70"
                        >
                            <Phone size={16} />
                            +57 311882550
                        </a>
                        <a
                            href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                            download
                            className="flex items-center gap-2 py-2 text-sm font-mono text-white transition-colors hover:border-white/20 hover:bg-slate-900/70"
                        >
                            <MapPin size={16} />
                            Bogota, Colombia
                        </a>

                    </div>
                    <div className="m-10">
                        <Form action="/search">
                            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mb-5">
                                <input className="bg-slate-800 h-9 p-3 border border-white/20 rounded-sm" name="query" placeholder="Nombre" />
                                <input className="bg-slate-800 h-9 p-3 border border-white/20 rounded-sm" name="query" placeholder="Correo" />
                            </div>
                            <div className="flex flex-col">
                                <input className="bg-slate-800 h-9 p-3 border border-white/20 rounded-sm mb-4" name="query" placeholder="Asunto" />
                                <textarea className="text-top bg-slate-800 h-26 p-3 border border-white/20 rounded-sm mb-4" name="query" placeholder="Mensaje" />
                                <button className="bg-blue-600 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5" type="submit">Enviar Mensaje <Send size={16} /></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>)
} 
'use client';

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || 'Ocurrió un error al enviar el mensaje.');
            }

            setStatus('success');
            form.reset();
        } catch (err: unknown) {
            setStatus('error');
            if (err instanceof Error) {
                setErrorMessage(err.message);
            } else {
                setErrorMessage('Error al enviar el mensaje');
            }
        }
    };

    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-surface-secondary pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-6">
                {/* Contact card */}
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-2xl bg-card-primary border border-white/5">
                    <div className="m-8">
                        <h2 className="text-3xl">
                            ¿Tienes un proyecto en mente?
                        </h2>
                        <h3 className="text-2xl text-blue-600/90 dark:text-sky-400 mt-1">
                            ¡Hablemos!
                        </h3>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4 mt-4">
                            Estoy abierto a nuevas oportunidades y proyectos desafiantes, si crees que puedo aportar valor a tu equipo no dudes en contactarme.
                        </p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=joansaguilarj@gmail.com"
                            target="_blank"
                            className="flex items-center gap-2 py-2 text-sm font-mono text-white transition-colors hover:border-white/20 hover:bg-slate-900/70"
                        >
                            <Mail size={16} />
                            Joansaguilarj@gmail.com
                        </a>
                        <a
                            href="http://wa.me/573118825570"
                            target="_blank"
                            className="flex items-center gap-2 py-2 text-sm font-mono text-white transition-colors hover:border-white/20 hover:bg-slate-900/70"
                        >
                            <Phone size={16} />
                            +57 311882550
                        </a>
                        <span className="flex items-center gap-2 py-2 text-sm font-mono text-white transition-colors" >
                            <MapPin size={16} />
                            Bogota, Colombia
                        </span>
                    </div>

                    <div className="m-8">
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mb-5">
                                <input
                                    required
                                    name="name"
                                    placeholder="Nombre"
                                    className="bg-slate-800 h-9 p-3 border border-white/20 rounded-sm text-white text-sm focus:outline-none focus:border-blue-500"
                                />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    className="bg-slate-800 h-9 p-3 border border-white/20 rounded-sm text-white text-sm focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <input
                                    name="subject"
                                    placeholder="Asunto"
                                    className="bg-slate-800 h-9 p-3 border border-white/20 rounded-sm mb-5 text-white text-sm focus:outline-none focus:border-blue-500"
                                />
                                <textarea
                                    required
                                    name="message"
                                    placeholder="Mensaje"
                                    rows={4}
                                    className="text-top bg-slate-800 p-3 border border-white/20 rounded-sm mb-5 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-blue-600 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            Enviando...
                                            <Loader2 size={16} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Enviar Mensaje
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <div className="flex items-center gap-2 mt-4 text-green-400 text-sm">
                                        <CheckCircle2 size={16} />
                                        <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 mt-4 text-red-400 text-sm">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage || 'Ocurrió un error al enviar el mensaje. Intenta de nuevo.'}</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
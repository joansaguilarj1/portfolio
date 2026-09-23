import Image from "next/image";
const projecs = [
    {
        title: "Project One",
        description: "This is the first project description. This is the first project description. This is the first project description. This is the first project description. This is the first project description. This is the first project description.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        image: "/images/project-one.webp",
        link: "https://example.com/project-one",
        repository: "https://github.com/example/project-one"
    },
    {
        title: "Project Two",
        description: "This is the second project description.",
        technologies: ["Vue.js", "JavaScript", "CSS"],
        image: "/images/project-two.webp",
        link: "https://example.com/project-two",
        repository: "https://github.com/example/project-two"
    },
    {
        title: "Project Three",
        description: "This is the third project description.",
        technologies: ["Angular", "TypeScript", "Sass"],
        image: "/images/project-three.webp",
        link: "https://example.com/project-three",
        repository: "https://github.com/example/project-three"
    }
];

export default function Projects() {
    return (
        <section
            id="proyectos"
            className="relative overflow-hidden bg-surface-secondary pt-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* header */}
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">
                        Proyectos
                    </h2>

                    <a
                        href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                        download
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-card-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-slate-900/70"
                    >
                        Ver todos los proyectos
                    </a>
                </div>
                {/* Project cards */}
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projecs.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg bg-card-primary p-6 transition-colors hover:bg-slate-900/70" >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={225}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 mb-4">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">

                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                                >
                                    Ver Proyecto
                                </a>
                                <a
                                    href={item.repository}
                                    target="_blank"
                                    className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                                >
                                    Ver Repositorio
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
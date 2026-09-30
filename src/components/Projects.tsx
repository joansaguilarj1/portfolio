import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { portfolioContent } from "@/content/site";

export default function Projects() {

    const projecs = portfolioContent.projecs;
    return (
        <section
            id="proyectos"
            className="relative overflow-hidden bg-surface-secondary pt-20">

            <div className="mx-auto max-w-7xl px-6">
                {/* header */}
                <div className="mb-3 flex items-center justify-between gap-10">
                    <h2 className="text-3xl font-bold text-white">
                        {projecs.title}
                    </h2>

                    <a
                        href="/cv/Joan-Sebastian-Aguilar-CV.pdf"
                        download
                        className="inline-flex rounded-lg bg-gradient-to-r from-blue-400 to-[#919af4] p-[1px] transition-transform hover:scale-[1.02]">
                        <span className="flex w-full items-center justify-center gap-2 rounded-[7px] bg-card-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-card-primary/90">
                            {projecs.cvButton}
                            <SquareArrowOutUpRight size={16} />
                        </span>
                    </a>
                </div>
                {/* Project cards */}
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projecs.highlights.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg bg-card-primary p-6 transition-colors hover:bg-slate-900/70" >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={225}
                                className="rounded-lg mb-4 h-40 object-cover"
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
                                    {projecs.cardbuttons.projects}
                                </a>
                                <a
                                    href={item.repository}
                                    target="_blank"
                                    className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                                >
                                     {projecs.cardbuttons.repository}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
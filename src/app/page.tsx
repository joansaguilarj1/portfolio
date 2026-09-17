import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <section
        id="sobre-mi"
        className="min-h-screen bg-slate-900 pt-16"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-bold text-white">
            Sobre mí
          </h2>
        </div>
      </section>

      {/* resto de secciones... */}
    </main>
  );
}
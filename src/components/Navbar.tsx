import Link from "next/link";
import { Sun } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface-primary backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="text-xl font-bold text-blue-500">
            SA
          </span>

          <span className="text-sm font-medium text-white">
            Joan Sebastian Aguilar
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          {/* Theme button */}
          <button
            type="button"
            aria-label="Cambiar tema"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-white/20 hover:text-white"
          >
            <Sun size={17} />
          </button>
        </div>
      </nav>
    </header>
  );
}
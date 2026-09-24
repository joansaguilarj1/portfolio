"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface-primary backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link 
          href="#inicio" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="text-xl font-bold text-blue-500">
            SA
          </span>

          <span className="text-sm font-medium text-white">
            Joan Sebastian Aguilar
          </span>
        </Link>

        {/* Navigation Desktop */}
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

        {/* Mobile controls (Theme + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Cambiar tema"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-white/20 hover:text-white"
          >
            <Sun size={17} />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-white/20 hover:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="border-b border-white/10 bg-surface-primary/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
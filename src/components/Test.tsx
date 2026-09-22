import { Code2 } from "lucide-react";

export default function Test() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-slate-900/50 rounded-xl border border-white/5">
      {/* 1. Fila para el Ícono y el Título */}
      <div className="flex items-center gap-3">
        <Code2 className="w-6 h-6 text-blue-400 shrink-0" />
        <h3 className="text-lg font-semibold text-white">
          Desarrollo Full Stack
        </h3>
      </div>

      {/* 2. Párrafo descriptivo debajo */}
      <p className="text-sm text-slate-400 leading-relaxed">
        Diseño y construcción de aplicaciones web completas utilizando React, 
        Next.js y bases de datos relacionales o no relacionales.
      </p>
    </div>
  );
}
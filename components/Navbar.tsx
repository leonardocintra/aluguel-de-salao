import { Menu, MessageCircle, X } from "lucide-react";
import { useCallback, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button
            aria-label="Ir ao topo"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center cursor-pointer"
          >
            <div
              className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg mr-3"
              aria-hidden
            >
              <MessageCircle size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">
              Zap<span className="text-green-600">Festa</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problemas")}
              className="text-slate-600 hover:text-green-600 font-medium transition"
            >
              Dores
            </button>
            <button
              onClick={() => scrollToSection("solucao")}
              className="text-slate-600 hover:text-green-600 font-medium transition"
            >
              Solução
            </button>
            <button
              onClick={() => scrollToSection("investimento")}
              className="text-slate-600 hover:text-green-600 font-medium transition"
            >
              Investimento
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold transition shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 flex items-center">
              <MessageCircle size={18} className="mr-2" />
              Quero Automatizar
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="text-slate-600 hover:text-green-600 p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection("problemas")}
              className="block w-full text-left px-3 py-4 font-medium text-slate-700 border-b border-slate-50"
            >
              Problemas
            </button>
            <button
              onClick={() => scrollToSection("solucao")}
              className="block w-full text-left px-3 py-4 font-medium text-slate-700 border-b border-slate-50"
            >
              Solução
            </button>
            <button
              onClick={() => scrollToSection("investimento")}
              className="block w-full text-left px-3 py-4 font-medium text-slate-700 border-b border-slate-50"
            >
              Investimento
            </button>
            <button className="w-full mt-4 bg-green-600 text-white px-3 py-4 rounded-lg font-bold text-lg shadow-md flex items-center justify-center">
              <MessageCircle size={20} className="mr-2" /> Falar com Consultor
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

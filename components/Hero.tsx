import { ArrowRight, CheckCircle2 } from "lucide-react";
import Badge from "./ui/Badge";
import ChatSimulator from "./ChatSimulator";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-linear-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left z-10">
            <Badge />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Pare de Perder Reservas Porque Não Consegue{" "}
              <span className="text-green-600 bg-green-50 px-2 rounded-lg">
                Responder
              </span>{" "}
              Todos os Clientes
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automação inteligente que atende seus clientes{" "}
              <strong>24h por dia</strong> de forma 100% humanizada. Enquanto
              você dorme, seu WhatsApp está fechando contratos.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <button
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-green-500/40 transition transform hover:-translate-y-1"
                aria-label="Quero automatizar"
              >
                Quero Automatizar Meu Atendimento
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                className="flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition shadow-sm"
                aria-label="Ver como funciona"
              >
                Ver Como Funciona
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center" aria-hidden>
                <CheckCircle2 size={18} className="text-green-500 mr-1.5" />{" "}
                Respostas em Segundos
              </span>
              <span className="flex items-center" aria-hidden>
                <CheckCircle2 size={18} className="text-green-500 mr-1.5" />{" "}
                Disponível 24h por Dia
              </span>
              <span className="flex items-center" aria-hidden>
                <CheckCircle2 size={18} className="text-green-500 mr-1.5" />{" "}
                100% Humanizado
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <ChatSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}

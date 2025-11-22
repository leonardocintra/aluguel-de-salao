import { MessageCircle } from "lucide-react";

function FinalCta() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Quanto Dinheiro Você Está Perdendo Hoje Por Não Responder Rápido?
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Cada hora sem automação é uma festa que o concorrente fecha no seu
          lugar.
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-white text-xl font-bold px-12 py-5 rounded-2xl shadow-xl shadow-green-900/50 transform hover:scale-105 transition duration-300 flex items-center mx-auto">
          <MessageCircle className="mr-3" size={28} /> Quero Parar de Perder
          Dinheiro
        </button>
        <p className="mt-6 text-slate-500 text-sm">
          Poucas vagas disponíveis para implantação este mês.
        </p>
      </div>
    </section>
  );
}

export default FinalCta;

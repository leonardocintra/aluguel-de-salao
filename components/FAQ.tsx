import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Funciona no meu número de WhatsApp atual?",
    a: "Sim! Conectamos a automação diretamente no seu WhatsApp Business. Você continua usando normalmente, mas o robô responde quando você não puder.",
  },
  {
    q: "E se o cliente fizer uma pergunta difícil?",
    a: "O sistema é treinado para responder 90% das dúvidas comuns. Se ele não souber, ele transfere para um humano (você) e avisa que alguém vai responder em breve.",
  },
  {
    q: "Como atualizo os preços dos pacotes?",
    a: "Você tem um painel simples ou pode pedir para nosso suporte. A taxa mensal já inclui ajustes ilimitados nas mensagens.",
  },
  {
    q: "Quanto tempo demora para ficar pronto?",
    a: "Após o envio das suas fotos e tabela de preços, entregamos tudo configurado e funcionando em até 5 dias úteis.",
  },
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = useCallback(
    (i) => setActiveFaq((s) => (s === i ? null : i)),
    []
  );

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Dúvidas Comuns
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                {item.q}
                {activeFaq === idx ? (
                  <ChevronUp className="text-green-600" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

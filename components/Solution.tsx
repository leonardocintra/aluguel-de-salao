import { Calendar, Camera, CheckCircle2, FileText, Users, Zap } from "lucide-react";
import SolutionItem from "./ui/SolutionItem";

export default function Solution() {
  const items = [
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      desc: "O cliente pergunta 'Qual o valor?' e o sistema responde com seus pacotes em segundos.",
    },
    {
      icon: Calendar,
      title: "Consulta de Disponibilidade Real",
      desc: "Integrado ao seu calendário. O sistema verifica a data, informa se está livre e já pode fazer um pré-bloqueio.",
    },
    {
      icon: Camera,
      title: "Galeria Inteligente",
      desc: "Cliente pediu 'Decoração Safari'? O robô envia exatamente as fotos desse tema.",
    },
    {
      icon: FileText,
      title: "Contratos Automáticos",
      desc: "Ao fechar, o sistema gera o contrato com os dados do cliente, valor e data, e envia para assinatura digital.",
    },
    {
      icon: Users,
      title: "Fidelização Automática",
      desc: "O sistema reconhece quem já fez festa antes e envia mensagens personalizadas.",
    },
  ];

  return (
    <section id="solucao" className="py-20 bg-green-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4">
            A SOLUÇÃO MÁGICA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Imagine Seu WhatsApp Trabalhando Para Você 24h
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforme o caos em uma máquina de vendas organizada e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            {items.map((it, idx) => (
              <SolutionItem
                key={idx}
                icon={it.icon}
                title={it.title}
                desc={it.desc}
              />
            ))}
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <h4 className="font-bold text-lg text-slate-800">
                  Painel de Controle
                </h4>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                  ONLINE
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-700">
                      Conversas Hoje
                    </span>
                    <span className="text-green-600 font-bold">42</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[85%]" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    35 respondidas automaticamente (83%)
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-700">
                      Contratos Gerados
                    </span>
                    <span className="text-blue-600 font-bold">8</span>
                  </div>

                  <div className="flex -space-x-2 overflow-hidden mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 items-center justify-center text-xs font-bold text-slate-600"
                      >
                        {i}
                      </div>
                    ))}
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 items-center justify-center text-xs text-slate-500">
                      +3
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-100 p-4 rounded-lg flex items-center">
                  <div className="bg-green-500 rounded-full p-2 text-white mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-900">
                      Economia de Tempo
                    </p>
                    <p className="text-xs text-green-700">
                      Você economizou ~4 horas hoje
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

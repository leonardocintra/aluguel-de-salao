import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingBadge from "./ui/FloatingBadge";

/* ---------- Data (move to separate file/data store) ---------- */
const CHAT_MESSAGES = [
  {
    type: "received",
    text: "Olá! Gostaria de saber se tem vaga para o dia 15/10? 🎉",
    time: "10:02",
  },
  {
    type: "sent",
    text: "Olá! 😊 Tudo bem? Sou a Gabriela do Salão Alegria.",
    time: "10:02",
  },
  {
    type: "sent",
    text: "Sim! Temos disponibilidade no dia 15/10. É um sábado!",
    time: "10:02",
  },
  {
    type: "sent",
    text: "Gostaria de ver nossos pacotes ou fotos da decoração?",
    time: "10:03",
  },
  { type: "received", text: "Quero ver os pacotes, por favor.", time: "10:04" },
  {
    type: "sent",
    text: "Perfeito! Temos 3 opções incríveis para você:",
    time: "10:04",
  },
  {
    type: "sent",
    text: "1. Pacote Básico (Só espaço)\n2. Pacote Gold (Buffet completo)\n3. Pacote Premium (Tudo incluso)",
    time: "10:04",
  },
  { type: "received", text: "Gostei do Gold! Como reservo?", time: "10:05" },
  {
    type: "sent",
    text: "Ótima escolha! 🌟 Vou gerar seu contrato agora mesmo...",
    time: "10:05",
  },
  {
    type: "card",
    text: "📄 Contrato Gerado com Sucesso!\nClique para assinar.",
    time: "10:05",
  },
];

export default function ChatSimulator() {
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setChatStep((prev) => (prev < CHAT_MESSAGES.length ? prev + 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full">
      <div className="relative rounded-[2.5rem] border-8 border-slate-900 bg-slate-900 shadow-2xl overflow-hidden h-[560px]">
        <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900 z-20 flex justify-center">
          <div className="w-32 h-4 bg-black rounded-b-xl" />
        </div>

        <header className="bg-[#075E54] pt-10 pb-3 px-4 text-white flex items-center justify-between shadow-md z-10 relative">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="font-bold text-sm">Gabriela</p>
              <p className="text-xs text-white/80">Online agora</p>
            </div>
          </div>
          <div className="flex space-x-3" aria-hidden>
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </header>

        <div className="bg-[#E5DDD5] h-full overflow-y-auto p-4 pb-20 space-y-3 scroll-smooth relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none" />

          {CHAT_MESSAGES.slice(0, chatStep + 1).map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.type === "received" ? "justify-end" : "justify-start"
              } animate-fade-in-up`}
            >
              {msg.type === "card" ? (
                <article
                  className="bg-white p-3 rounded-lg shadow-sm max-w-[85%] border-l-4 border-green-500 cursor-pointer hover:bg-slate-50 transition"
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir contrato"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded text-red-500">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">
                        Contrato de Locação
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Clique para assinar digitalmente
                      </p>
                    </div>
                  </div>
                </article>
              ) : (
                <div
                  className={`max-w-[85%] rounded-lg p-2 px-3 shadow-sm text-sm relative ${
                    msg.type === "received"
                      ? "bg-[#DCF8C6] text-slate-900 rounded-tr-none"
                      : "bg-white text-slate-900 rounded-tl-none"
                  }`}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <div className="text-[10px] text-slate-500 text-right mt-1 flex justify-end items-center">
                    <time dateTime={`2025-11-21T${msg.time}`}>{msg.time}</time>
                    {msg.type === "received" && (
                      <span className="ml-1 text-blue-400">✓✓</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {chatStep < CHAT_MESSAGES.length && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white rounded-full px-3 py-2 shadow-sm text-xs text-slate-500 italic">
                Digitando...
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 w-full bg-[#f0f0f0] p-2 flex items-center z-20">
          <div className="bg-white flex-1 rounded-full px-4 py-2 text-sm text-slate-400">
            Digite uma mensagem...
          </div>
          <div className="ml-2 bg-[#075E54] w-10 h-10 rounded-full flex items-center justify-center text-white">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>

      <FloatingBadge />
    </div>
  );
}

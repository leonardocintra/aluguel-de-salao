import {
  AlertTriangle,
  Camera,
  Clock,
  DollarSign,
  FileText,
  Smartphone,
} from "lucide-react";
import PainCard from "./ui/PainCard";

export default function PainPoints() {
  const cards = [
    {
      icon: <Clock className="text-white" size={24} />,
      title: "Demora Horas para Responder",
      desc: "O cliente manda mensagem de manhã e você só consegue responder à noite. Resultado? Ele já fechou com outro.",
      color: "bg-red-500",
    },
    {
      icon: <AlertTriangle className="text-white" size={24} />,
      title: "Confusão de Datas",
      desc: "Fica indo e voltando no calendário, às vezes marca duas festas no mesmo horário ou passa informação errada na pressa.",
      color: "bg-orange-500",
    },
    {
      icon: <Camera className="text-white" size={24} />,
      title: "Envia as Mesmas Fotos 100x",
      desc: "Todo dia procurando as mesmas fotos da decoração na galeria do celular. Um tempo precioso jogado fora.",
      color: "bg-amber-500",
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: "Contratos Manuais",
      desc: "Abrir Word, editar nome, salvar PDF, enviar... O cliente perde o arquivo, você envia de novo. Burocracia que mata vendas.",
      color: "bg-slate-600",
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: "Sem Vida Pessoal",
      desc: "Responde cliente no jantar, no domingo, no feriado. Sua família reclama que você não sai do celular.",
      color: "bg-red-600",
    },
    {
      icon: <DollarSign className="text-white" size={24} />,
      title: "Dinheiro na Mesa",
      desc: "Quantos 'vou ver com meu marido' você esqueceu de retornar? O follow-up manual é impossível de manter.",
      color: "bg-rose-600",
    },
  ];

  return (
    <section id="problemas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-4">
            IDENTIFIQUE-SE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Reconhece Alguma Dessas Situações?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Se você sente que virou escravo do WhatsApp e continua perdendo
            vendas, você não está sozinho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <PainCard
              key={i}
              icon={c.icon}
              title={c.title}
              desc={c.desc}
              color={c.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { DollarSign } from "lucide-react";

export default function FloatingBadge() {
  return (
    <div className="absolute bottom-10 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-green-100 animate-bounce-slow z-30 max-w-[200px]">
      <div className="flex items-start space-x-3">
        <div className="bg-green-100 p-2 rounded-full">
          <DollarSign size={20} className="text-green-600" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-semibold uppercase">
            Reserva Fechada
          </p>
          <p className="text-sm font-bold text-slate-900">
            R$ 2.450,00 garantidos enquanto você almoça!
          </p>
        </div>
      </div>
    </div>
  );
}

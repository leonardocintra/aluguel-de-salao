export default function RoiSection() {
  return (
    <div className="bg-slate-900 py-12 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          A conta é simples e assustadora:
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-red-400 font-bold text-lg mb-1">SEM AUTOMAÇÃO</p>
            <p className="text-sm text-slate-400">
              Perde 5 reservas/mês por demora
            </p>
            <p className="text-4xl font-bold mt-2 text-red-500">
              -R$ 15.000<span className="text-sm">/mês</span>
            </p>
          </div>
          <div className="hidden md:block h-16 w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-green-400 font-bold text-lg mb-1">
              COM AUTOMAÇÃO
            </p>
            <p className="text-sm text-slate-400">
              Recupera essas reservas dormindo
            </p>
            <p className="text-4xl font-bold mt-2 text-green-400">
              +R$ 15.000<span className="text-sm">/mês</span>
            </p>
          </div>
        </div>
        <p className="mt-8 text-slate-300 italic">
          &quot;O sistema se paga na primeira festa que você não perde.&quot;
        </p>
      </div>
    </div>
  );
}

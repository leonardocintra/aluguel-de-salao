import { CheckCircle2, ShieldCheck } from "lucide-react";

function Investment() {
  return (
    <section id="investimento" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Invista Uma Vez, Ganhe Tempo Para Sempre
          </h2>
          <p className="text-lg text-slate-600">
            Mais barato que um funcionário, mais eficiente que um robô comum.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Implantação Completa
            </h3>
            <p className="text-slate-500 mb-6">
              Deixamos tudo pronto para você usar.
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-sm text-slate-500 mr-2">A partir de</span>
              <span className="text-4xl font-extrabold text-slate-900">
                R$ 2.000
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700">
                <CheckCircle2 size={18} className="text-green-500 mr-2" /> Setup
                personalizado do robô
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle2 size={18} className="text-green-500 mr-2" />{" "}
                Configuração de pacotes e fotos
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle2 size={18} className="text-green-500 mr-2" />{" "}
                Treinamento da sua equipe
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle2 size={18} className="text-green-500 mr-2" /> 30
                dias de acompanhamento
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 bg-linear-to-br from-green-600 to-emerald-600 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
              MELHOR CUSTO-BENEFÍCIO
            </div>
            <h3 className="text-2xl font-bold mb-2">Manutenção Mensal</h3>
            <p className="text-green-100 mb-6">
              Monitoro e mantenho o sistema atualizado para você.
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold">R$ 87,90</span>
              <span className="text-lg text-green-100 ml-1">/mês</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-green-50">
                <CheckCircle2 size={18} className="text-white mr-2" />{" "}
                Monitoramento 24/7
              </li>
              <li className="flex items-center text-green-50">
                <CheckCircle2 size={18} className="text-white mr-2" /> Ajustes
                ilimitados de mensagens
              </li>
              <li className="flex items-center text-green-50">
                <CheckCircle2 size={18} className="text-white mr-2" /> Suporte
                técnico prioritário
              </li>
              <li className="flex items-center text-green-50">
                <CheckCircle2 size={18} className="text-white mr-2" />{" "}
                Atualizações do sistema
              </li>
            </ul>
            <div className="bg-green-700/50 rounded-lg p-3 mb-6 text-xs text-green-50">
              <p className="font-semibold mb-1">* Custos adicionais à parte:</p>
              <p>• Hospedagem do servidor</p>
              <p>• Tokens de IA (conforme uso)</p>
            </div>
            <button className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition shadow-lg">
              Começar Agora
            </button>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6 flex items-center justify-center">
          <ShieldCheck size={16} className="mr-1" /> Garantia de satisfação.
          Cancele quando quiser a mensalidade.
        </p>
      </div>
    </section>
  );
}
export default Investment;

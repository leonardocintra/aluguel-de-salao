import { MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-slate-200 text-center">
      <div className="flex items-center justify-center mb-4">
        <MessageCircle className="text-green-600 mr-2" size={20} />
        <span className="font-bold text-slate-900">ZapFesta Automação</span>
      </div>
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
}
export default Footer;
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center animate-pulse-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}

/* ---------- UI Helpers (split later) ---------- */
interface PainCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

function PainCard({ icon, title, desc, color }: PainCardProps) {
  return (
    <article
      className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition group"
      aria-labelledby={`pain-${title}`}
    >
      <div
        className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition duration-300`}
      >
        {icon}
      </div>
      <h3
        id={`pain-${title}`}
        className="text-xl font-bold text-slate-900 mb-3"
      >
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </article>
  );
}
export default PainCard;

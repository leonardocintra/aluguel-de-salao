function SolutionItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start">
      <div className="bg-green-100 p-3 rounded-xl mr-4 shrink-0">
        <Icon className="text-green-600" size={24} />
      </div>
      <div>
        <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
export default SolutionItem;

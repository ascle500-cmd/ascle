export default function SectionTitle({ kicker, title, subtitle, center }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : ""}>
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className="mt-2 section-title">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

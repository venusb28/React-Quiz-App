export default function QuizHeader({ eyebrow = "FRONTEND KNOWLEDGE CHECK", title, subtitle }) {
  return (
    <header className="quiz-header">
      <div className="brand-mark">Q</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
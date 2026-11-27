export default function ResultCard({ total, correct, incorrect, percentage }) {
  return (
    <section className="result-card">
      <p className="eyebrow">QUIZ COMPLETED</p>
      <div className="score-circle">
        <strong>{correct}<span>/{total}</span></strong>
        <small>YOUR SCORE</small>
      </div>
      <h2>{percentage >= 70 ? "Excellent work!" : "Good effort!"}</h2>
      <p className="result-message">
        {percentage >= 70
          ? "You have a strong grasp of the frontend basics."
          : "Keep practicing. Every attempt helps you improve."}
      </p>
      <div className="result-stats">
        <div><strong>{total}</strong><span>Total questions</span></div>
        <div><strong className="correct-text">{correct}</strong><span>Correct</span></div>
        <div><strong className="incorrect-text">{incorrect}</strong><span>Incorrect</span></div>
        <div><strong>{percentage}%</strong><span>Percentage</span></div>
      </div>
    </section>
  );
}
import QuizHeader from "../components/QuizHeader";
import ResultCard from "../components/ResultCard";

export default function Results({ questions, answers, onRetake, onHome }) {
  const correct = questions.filter((question) => answers[question.id] === question.answer).length;
  const total = questions.length;
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return (
    <main className="page-shell inner-page">
      <nav className="top-nav">
        <span className="nav-brand"><span className="brand-dot">Q</span> QUIZ APP</span>
        <span className="nav-note">YOUR RESULTS</span>
      </nav>
      <div className="results-content">
        <QuizHeader title="Here's how you did." subtitle="Every question is a chance to learn something new." />
        <ResultCard total={total} correct={correct} incorrect={incorrect} percentage={percentage} />
        <div className="result-actions">
          <button className="primary-button" onClick={onRetake}>Retake Quiz <span>↻</span></button>
          <button className="secondary-button" onClick={onHome}>Return Home</button>
        </div>
      </div>
      <footer className="site-footer"><span>FRONTEND QUIZ</span><span>KEEP LEARNING</span></footer>
    </main>
  );
}
import QuizHeader from "../components/QuizHeader";

export default function Home({ onStart }) {
  return (
    <main className="page-shell home-page">
      <nav className="top-nav">
        <span className="nav-brand"><span className="brand-dot">Q</span> QUIZ APP</span>
        <span className="nav-note">LEARN · THINK · GROW</span>
      </nav>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">WELCOME TO THE FRONTEND QUIZ</p>
          <h1>Ready to test<br />what you <em>know?</em></h1>
          <p className="hero-description">
            Take a quick challenge on HTML, CSS, JavaScript, and React.
            Ten questions. Four choices each. One chance to show what you know.
          </p>
          <button className="primary-button" onClick={onStart}>
            Start Quiz <span aria-hidden="true">→</span>
          </button>
          <div className="hero-details">
            <span><b>10</b> Questions</span>
            <i />
            <span><b>4</b> Choices each</span>
            <i />
            <span><b>1</b> Correct answer</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="quiz-tile tile-main"><span>Q.</span><strong>Think<br />clearly.</strong><small>YOUR NEXT CHALLENGE</small></div>
          <div className="quiz-tile tile-small"><span>✓</span><small>ONE STEP<br />AT A TIME</small></div>
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✦</div>
        </div>
      </section>
      <footer className="site-footer"><span>FRONTEND QUIZ</span><span>BUILT TO MAKE LEARNING FUN</span></footer>
    </main>
  );
}
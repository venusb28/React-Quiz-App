
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Quiz.css";

function Quiz({ questions, onFinish }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    useEffect(() => {
        if (!submitted) return;

        const timer = setTimeout(() => {
            if (currentIndex === totalQuestions - 1) {
                onFinish(answers);
            } else {
                setCurrentIndex((index) => index + 1);
                setSelectedAnswer(null);
                setSubmitted(false);
            }
        }, 1800);

        return () => clearTimeout(timer);
    }, [submitted, currentIndex, totalQuestions, answers, onFinish]);

    function handleAnswer(choice) {
        if (submitted) return;

        setSelectedAnswer(choice);
        setAnswers((previous) => ({
            ...previous,
            [currentQuestion.id]: choice,
        }));
        setSubmitted(true);
    }

    if (!currentQuestion) {
        return <div className="quiz-page">No questions available.</div>;
    }

    const isCorrect = selectedAnswer === currentQuestion.answer;

    return (
        <main className="quiz-page">
            <div className="quiz-container">
                <header className="quiz-top">
                    <button
                        className="quiz-back"
                        onClick={() => navigate("/")}
                    >
                        ← Home
                    </button>

                    <span className="quiz-label">KNOWLEDGE CHALLENGE</span>
                </header>

                <section className="quiz-progress-section">
                    <div className="quiz-progress-info">
                        <span>Question {currentIndex + 1} of {totalQuestions}</span>
                        <span>{Math.round(progress)}% completed</span>
                    </div>

                    <div className="quiz-progress-track">
                        <div
                            className="quiz-progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </section>

                <section className="quiz-card">
                    <div className="question-number">
                        QUESTION {String(currentIndex + 1).padStart(2, "0")}
                    </div>

                    <h1 className="question-text">
                        {currentQuestion.question}
                    </h1>

                    <p className="answer-instruction">
                        Choose the correct answer below.
                    </p>

                    <div className="answer-list">
                        {currentQuestion.choices.map((choice, index) => {
                            const isSelected = selectedAnswer === choice;
                            const isAnswerCorrect = choice === currentQuestion.answer;

                            let answerClass = "";

                            if (submitted && isAnswerCorrect) {
                                answerClass = "correct";
                            } else if (submitted && isSelected && !isAnswerCorrect) {
                                answerClass = "incorrect";
                            } else if (isSelected) {
                                answerClass = "selected";
                            }

                            return (
                                <button
                                    key={index}
                                    className={`answer-option ${answerClass}`}
                                    onClick={() => handleAnswer(choice)}
                                    disabled={submitted}
                                >
                                    <span className="answer-letter">
                                        {String.fromCharCode(65 + index)}
                                    </span>

                                    <span className="answer-text">{choice}</span>

                                    {submitted && isAnswerCorrect && (
                                        <span className="answer-symbol">✓</span>
                                    )}

                                    {submitted && isSelected && !isAnswerCorrect && (
                                        <span className="answer-symbol">✕</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {submitted && (
                        <div className={`feedback-message ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
                            <strong>
                                {isCorrect ? "✓ Correct answer!" : "✕ Incorrect answer!"}
                            </strong>

                            {!isCorrect && (
                                <span>
                                    Correct answer: {currentQuestion.answer}
                                </span>
                            )}

                            <small>
                                Moving to the next question...
                            </small>
                        </div>
                    )}
                </section>

                <footer className="quiz-footer">
                    <span>Take your time and do your best!</span>
                    <span>{currentIndex + 1} / {totalQuestions}</span>
                </footer>
            </div>
        </main>
    );
}

export default Quiz;

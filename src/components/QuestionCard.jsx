
import AnswerOption from "./AnswerOption";

const letters = ["A", "B", "C", "D"];

export default function QuestionCard({
    question,
    selected,
    onSelect,
    submitted
}) {
    const isCorrect = selected === question.answer;

    return (
        <section className="question-card">

            <div className="question-meta">
                <span className="question-tag">
                    QUESTION {String(question.id).padStart(2, "0")}
                </span>

                <span className="question-count">
                    Choose one answer
                </span>
            </div>

            <h2>{question.question}</h2>

            <div className="answer-list">
                {question.choices.map((choice, index) => {

                    let status = "";

                    if (submitted && choice === question.answer) {
                        status = "correct";
                    } else if (
                        submitted &&
                        choice === selected &&
                        !isCorrect
                    ) {
                        status = "wrong";
                    }

                    return (
                        <AnswerOption
                            key={choice}
                            letter={letters[index]}
                            choice={choice}
                            selected={selected === choice}
                            onSelect={() => onSelect(choice)}
                            disabled={submitted}
                            status={status}
                        />
                    );
                })}
            </div>

            {submitted && (
                <div className={`answer-feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"
                    }`}>
                    <strong>
                        {isCorrect
                            ? "Correct! Well done."
                            : "Not quite. That's incorrect."}
                    </strong>

                    <span>
                        Correct answer: <b>{question.answer}</b>
                    </span>
                </div>
            )}

        </section>
    );
}

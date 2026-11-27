
export default function AnswerOption({
    letter,
    choice,
    selected,
    onSelect,
    disabled,
    status
}) {
    return (
        <button
            type="button"
            className={`answer-option ${selected ? "selected" : ""} ${status || ""}`}
            onClick={onSelect}
            disabled={disabled}
        >
            <span className="option-letter">{letter}</span>
            <span>{choice}</span>

            <span className="option-check">
                {status === "correct"
                    ? "✓"
                    : status === "wrong"
                        ? "✕"
                        : ""}
            </span>
        </button>
    );
}

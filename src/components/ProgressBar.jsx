export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  return (
    <div className="progress-wrap" aria-label={`Question ${current} of ${total}`}>
      <div className="progress-label">
        <span>YOUR PROGRESS</span>
        <strong>{current} / {total}</strong>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
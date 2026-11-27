import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import { questions } from "./data/questions";

export default function App() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  function startQuiz() {
    setAnswers({});
    navigate("/quiz");
  }

  function finishQuiz(finalAnswers) {
    setAnswers(finalAnswers);
    navigate("/results");
  }

  function retakeQuiz() {
    setAnswers({});
    navigate("/quiz");
  }

  return (
    <Routes>
      <Route path="/" element={<Home onStart={startQuiz} />} />
      <Route
        path="/quiz"
        element={<Quiz questions={questions} onFinish={finishQuiz} />}
      />
      <Route
        path="/results"
        element={
          Object.keys(answers).length === questions.length ? (
            <Results
              questions={questions}
              answers={answers}
              onRetake={retakeQuiz}
              onHome={() => navigate("/")}
            />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
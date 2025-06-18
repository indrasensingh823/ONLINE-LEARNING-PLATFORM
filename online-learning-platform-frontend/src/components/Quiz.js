import React, { useState } from "react";
import "../App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markdown Language"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django",
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: "PHP",
  },
  {
    question: "React is a ________.",
    options: ["Framework", "Library", "Language", "Server"],
    answer: "Library",
  },
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOption("");
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-heading">📘 Quick Quiz</h2>
      {showResult ? (
        <div className="quiz-result">
          <h3>Your Score: {score} / {questions.length}</h3>
          <p>{score >= 4 ? "🎉 Excellent work!" : "📚 Keep practicing!"}</p>
        </div>
      ) : (
        <div className="quiz-box">
          <h4>{questions[currentQ].question}</h4>
          <ul>
            {questions[currentQ].options.map((option, i) => (
              <li
                key={i}
                className={`quiz-option ${selectedOption === option ? (option === questions[currentQ].answer ? 'correct' : 'wrong') : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;

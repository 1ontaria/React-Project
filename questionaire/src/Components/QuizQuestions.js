import React, { useState, useEffect } from "react";
import QuizItem from "./QuizItem";

function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("  http://localhost:3000/questions")
      .then((resp) => resp.json())
      .then((questions) => setQuestions(questions));
  }, []);

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <QuizItem
            key={question.id}
            question={question}
            prompt={question.prompt}
            id={question.id}
            answers={question.answers}
            correctAnswer={question.correctAnswer}
          />
        ))}
      </ul>
    </div>
  );
}

export default Questions;

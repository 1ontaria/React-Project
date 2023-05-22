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
        {questions.map((item) => (
          <li key={item.id}>
            <QuizItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;

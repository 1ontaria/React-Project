import React, { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

function Questions() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((resp) => resp.json())
      .then((data) => setQuestion(data));
  }, []);
  console.log(question);

  return (
    <div>
      <ul className="listedQuestions">
        {question.map((item) => (
          <QuizItem
            key={item.id}
            prompt={item.prompt}
            answers={item.answers}
            id={item.id}
            correctAnswer={item.correctAnswer}
          />
        ))}
      </ul>
    </div>
  );
}

export default Questions;

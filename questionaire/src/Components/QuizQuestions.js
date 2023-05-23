import React from "react";
import QuizItem from "./QuizItem";

function Questions({ questions }) {
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
            correctIndex={question.correctIndex}
            correctAnswer={question.correctAnswer}
          />
        ))}
      </ul>
    </div>
  );
}

export default Questions;

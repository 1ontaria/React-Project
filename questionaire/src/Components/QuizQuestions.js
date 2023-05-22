import React, { useState, useEffect } from "react";
import QuizItem from "./QuizItem";

function Questions({ questions }) {
  const items = questions.map((question) => (
    <QuizItem
      key={question.id}
      question={question}
      prompt={question.prompt}
      id={question.id}
      answers={question.answers}
      correctAnswer={question.correctAnswer}
    />
  ));

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default Questions;

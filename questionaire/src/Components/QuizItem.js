import React from "react";

function QuizItem({
  prompt,
  id,
  answers,
  correctAnswer,
  deleteQuestion,
  onClick,
}) {
  function handleChange(e) {
    if (e.target.value === correctAnswer) {
      alert("You Got It!");
    } else {
      alert("Try Again!");
    }
  }

  return (
    <div>
      <li className="question">
        <h4> Question {id}</h4>
        <h5>{prompt}</h5>
        <label>
          Correct Answer:
          <select onChange={handleChange}>
            <option></option>
            {answers.map((answer, index) => (
              <option key={index}>{answer}</option>
            ))}
          </select>
        </label>
        <button onClick={onClick}> Nailed it! </button>
      </li>
    </div>
  );
}

export default QuizItem;

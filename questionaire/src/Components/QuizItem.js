import React from "react";

function QuizItem({ question, prompt, id, answers, correctAnswer }) {
  function handleChange(e) {
    if (e.target.value === correctAnswer) {
      alert("You Got It!");
    } else {
      alert("Try Again!");
    }
  }

  return (
    <div>
      <li>
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
        <button> Nailed it! </button>
      </li>
    </div>
  );
}

export default QuizItem;

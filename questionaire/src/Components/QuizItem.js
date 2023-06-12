import React, { useState } from "react";

function QuizItem({ prompt, id, answers, correctAnswer }) {
  const [button, setButton] = useState(true);

  function buttonSwitch() {
    setButton((button) => !button);
  }

  const a = answers.map((answer, index) => (
    <option key={index}>{answer}</option>
  ));

  function handleChange(e) {
    if (e.target.value === correctAnswer) {
      alert("That's right!");
      setButton(true);
    } else {
      alert("Try Again!");
      e.target.value = "";
      setButton(false);
    }
  }

  return (
    <div className="listedQuestions">
      <li className="question">
        <h4> Question {id}</h4>
        <h5>{prompt}</h5>
        <label>
          Correct Answer:
          <select onChange={handleChange}>
            <option></option>
            {a}
          </select>
        </label>
        <button onClick={buttonSwitch}>
          {" "}
          {button ? "I don't know?" : "Nailed it!"}
        </button>
      </li>
    </div>
  );
}

export default QuizItem;

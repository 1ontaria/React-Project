import React, { useState } from "react";

function NewQuestion({ addQuestion }) {
  const [data, setData] = useState({
    id: "",
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctAnswer: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      id: data.id,
      prompt: data.prompt,
      answers: [data.answer1, data.answer2, data.answer3, data.answer4],
      correctAnswer: data.correctAnswer,
    };
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((resp) => resp.json())
      .then((newQuestion) => addQuestion(newQuestion));
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={data.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={data.answer1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={data.answer2}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={data.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={data.answer4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select name="correctAnswer">
            <option value="0">{data.answer1}</option>
            <option value="1">{data.answer2}</option>
            <option value="2">{data.answer3}</option>
            <option value="3">{data.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default NewQuestion;

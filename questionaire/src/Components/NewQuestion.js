import React, { useState } from "react";

function NewQuestion({ addQuestion }) {
  const [data, setData] = useState({
    id: 0,
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

  console.log(data);
  function handleSubmit(e) {
    e.preventDefault();
    if (data.correctAnswer === "") {
      alert("You must select an answer");
    } else {
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
        .then((r) => r.json())
        .then((newPrompt) => addQuestion(newPrompt));
      setData("");
    }
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
          <br />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={data.answer1}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={data.answer2}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={data.answer3}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={data.answer4}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctAnswer"
            value={data.correctAnswer}
            onChange={handleChange}
          >
            <option></option>
            <option value={data.answer1}>{data.answer1}</option>
            <option value={data.answer2}>{data.answer2}</option>
            <option value={data.answer3}>{data.answer3}</option>
            <option value={data.answer4}>{data.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default NewQuestion;

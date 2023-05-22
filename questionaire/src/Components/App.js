import React, { useState, useEffect } from "react";
import QuizQuestions from "./QuizQuestions";
import { Route } from "react-router-dom";
import Header from "./Header";
import NewQuestion from "./NewQuestion";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState("false");
  const [questions, setQuestions] = useState([]);

  function handleClick() {
    setDarkMode((darkMode) => !darkMode);
  }

  useEffect(() => {
    fetch("  http://localhost:3000/questions")
      .then((resp) => resp.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function addQuestion(newPrompt) {
    setQuestions({ ...questions, newPrompt });
  }

  return (
    <main>
      <button onClick={handleClick}>{darkMode ? "Dark" : "Light"}</button>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/questions">
        <QuizQuestions questions={questions} />
      </Route>
      <Route path="/new-question">
        <NewQuestion addQuestion={addQuestion} />
      </Route>
    </main>
  );
}

export default App;

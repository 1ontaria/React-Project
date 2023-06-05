import React, { useState } from "react";
import QuizQuestions from "./QuizQuestions";
import { Route } from "react-router-dom";
import Header from "./Header";
import NewQuestion from "./NewQuestion";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState("false");
  const [questions, setQuestions] = useState([]);

  function addQuestion(newPrompt) {
    setQuestions({ ...questions, newPrompt });
  }

  return (
    <div>
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
    </div>
  );
}

export default App;

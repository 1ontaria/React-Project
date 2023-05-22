import React, { useState } from "react";
import QuizQuestions from "./QuizQuestions";

function App() {
  const [darkMode, setDarkMode] = useState("false");

  function handleClick() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div>
      <button onClick={handleClick}>{darkMode ? "Dark" : "Light"}</button>
      <QuizQuestions />
    </div>
  );
}

export default App;

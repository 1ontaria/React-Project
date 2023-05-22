import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Welcome to the Basics of Front-End Study Guide</h1>
      <h2>
        This is a personalized study guide to help you remember some key
        elements of front-end development. Answer each question correctly and
        add more questions to grow your knowledge!
      </h2>
      <h3>
        {" "}
        Click <Link to="/questions">here</Link> to start your studying journey!
      </h3>
      <h3>
        Click <Link to="/new-question">here</Link> to add questions to your
        study guide!
      </h3>
    </div>
  );
}

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/questions">Questions</NavLink>
      <NavLink to="/new-question">Add Question</NavLink>
    </div>
  );
}

export default Header;

import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    <nav className="navbar navbar-light bg-primary">
      <ul>
        <li className="navbar-brand mb-0 h1 navli">
            <a className="navbar-brand" href="/">Clicky Game</a>
        </li>
        <li className="text-center mb-0 h3 navli">{props.message}
        </li>
        <li className="navbar-text text-dark font-weight-bold navli">
            Score: <span>{props.correct}</span>&nbsp;
            Top Score: <span>{props.topscore}</span>
        </li>
      </ul>
    </nav>
  );

export default Navbar;
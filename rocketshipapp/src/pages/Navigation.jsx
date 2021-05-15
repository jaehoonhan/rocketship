import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar.js";

function Navigation(props) {
  return (
    <div className="navigation">
      {/* bootstrap nav classes */}
      <nav class="navbar navbar-expand navbar-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Rocketship
          </Link>
          <SearchBar/>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item ${
                props.location.pathname === "/portfolio" ? "active" : ""}`}
              >
              <Link class="nav-link" to="/portfolio">
                Portfolio
                <span class="sr-only">(current)</span>
              </Link>
              </li>
              <li
                class={`nav-item ${
                props.location.pathname === "/cash" ? "active" : ""}`}
              >
              <Link class="nav-link" to="/cash">
                Cash
                <span class="sr-only">(current)</span>
              </Link>
              </li>
              <li
                class={`nav-item ${
                props.location.pathname === "/account" ? "active" : ""}`}
              >
              <Link class="nav-link" to="/account">
                Account
                <span class="sr-only">(current)</span>
              </Link>
              </li>
              <li
                class={`nav-item ${
                props.location.pathname === "/about" ? "active" : ""}`}
              >
              <Link class="nav-link" to="/about">
                About us
                <span class="sr-only">(current)</span>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);

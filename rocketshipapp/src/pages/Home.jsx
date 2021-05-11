import logo from "../assets/logo.svg"
import React from "react";

function Home() {
  return (
    <div className="App-header">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome to Rocketship</h1>
            <p>
              User Auth is in development.<br/>
              Head over to portfolio for now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

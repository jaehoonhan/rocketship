import logo from "./logo.svg"
import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome to Rocketship</h1>
            <p>
              This is the start of something new and cool.
              Tell your friends about it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Stock from "../Stock.js"

function Portfolio() {
  return (
    <div className="portfolio">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Portfolio</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Stock>
          </Stock>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

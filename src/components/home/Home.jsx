import React from "react";

import "./home.scss";

export default function Home() {
  return (
    <section className="container-fluid px-0" id="home">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2 order-md-1">
          <img src="assets/rocks.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className="">HOME</h2>

              <p className="lead">This is content.</p>
              <button type="button" className="btn btn-outline-secondary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

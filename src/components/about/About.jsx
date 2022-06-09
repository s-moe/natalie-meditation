import React from "react";
import "./about.scss";

export default function About() {
  return (
    <section className="container-fluid px-0" id="about">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2 order-md-1">
          <img src="assets/rocks.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className="">MUSEUM OF CANDY</h2>

              <p className="lead">This is content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

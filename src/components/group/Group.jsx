import React from "react";
import CalendlyLink from "../CalendlyLink";
import "./group.scss";

export default function Group() {
  return (
    <section className="container-fluid px-0" id="group">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2 order-md-1">
          <img src="assets/rocks.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className="">GROUP</h2>

              <p className="lead">This is content.</p>
              <CalendlyLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

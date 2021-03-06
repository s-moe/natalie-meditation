import React from "react";
import CalendlyLink from "../CalendlyLink";
import "./corporate.scss";

export default function Corporate() {
  return (
    <section className="container-fluid px-0" id="corporate">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2  order-1 order-md-2">
          <img src="assets/rocks.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center order-md-1">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className="">CORPORATE</h2>
              <p className="lead">This is content.</p>
              <CalendlyLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

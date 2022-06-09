import React from "react";
import "./individual.scss";

export default function Individual() {
  return (
    <section className="container-fluid px-0" id="individual">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2  order-1 order-md-2">
          <img src="assets/rocks.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center order-md-1">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className="">INDIVIDUAL</h2>
              <p className="lead">This is content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

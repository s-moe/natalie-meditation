import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid px-0">
      <div class="row align-items-center contact-form">
        <div class="col-md-6 order-2 order-md-1">
          <img src="" alt="" class="img-fluid" />
          Contact form
        </div>
        <div class="col-md-6 text-center order-1 order-md-2 contact-info">
          <div class="row justify-content-center">
            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 class="">MUSEUM OF CANDY</h2>
              <img src="" alt="" class="d-none d-lg-inline" />
              <p class="lead">This is content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

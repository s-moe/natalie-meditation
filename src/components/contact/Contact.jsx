import React from "react";
import "./contact.scss";
import ContactInfo from "./ContactInfo";
import Form from "./Form.jsx";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid px-0">
      <div class="row align-items-center contact-form">
        <div class="col-md-6 order-2 order-md-1">
          <img src="" alt="" class="img-fluid" />
          <Form />
        </div>
        <div class="col-md-6 text-center order-1 order-md-2 contact-info">
          <div class="row justify-content-center">
            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

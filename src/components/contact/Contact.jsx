import React from "react";
import "./contact.scss";
import ContactInfo from "./ContactInfo";
import Form from "./Form.jsx";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid px-0">
      <div className="row align-items-center contact-form">
        <div className="col-md-6 order-2 order-md-1">
          <img src="" alt="" className="img-fluid" />
          <Form />
        </div>
        <div className="col-md-6 text-center order-1 order-md-2 contact-info">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

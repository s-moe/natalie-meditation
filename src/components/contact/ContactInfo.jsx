import "./contact-info.scss";
import { Event, Mail } from "@material-ui/icons";
import { PersonPin } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import React from "react";
import Calendly from "../Calendly";

export default function ContactInfo() {
  const emailAddress = "natalie@nataliekarneef.com";
  const location = "Istanbul, Turkey";
  const phoneNumber = "+ 1 425 923 9939";
  const contactMe = "Contact Me";
  return (
    <>
      <div className="contactInfoItem">
        <h2>{contactMe}</h2>
        <div className="info" id="mail">
          {" "}
          <Mail className="icon" />
          <span className="text">{emailAddress} </span>
        </div>
        <div className="info" id="myLocation">
          {" "}
          <PersonPin className="icon" />
          <span className="text">{location}</span>
        </div>
        <div className="info" id="phoneNumber">
          {" "}
          <Phone className="icon" />
          <span className="text"> {phoneNumber}</span>
        </div>
        <div className="info" id="phoneNumber">
          {" "}
          <Event className="icon" />
          <span className="text">
            {" "}
            <Calendly />
          </span>
        </div>
      </div>
    </>
  );
}

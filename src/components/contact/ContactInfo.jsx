import "./contact-info.scss";
import { Mail } from "@material-ui/icons";
import { PersonPin } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import React from "react";

export default function ContactInfo() {
  const emailAddress = "natalie@nataliekarneef.com";
  const location = "Istanbul, Turkey";
  return (
    <div className="contactInfoItem">
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
    </div>
  );
}

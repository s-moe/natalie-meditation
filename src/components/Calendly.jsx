import React from "react";

export default function Calendly() {
  return (
    <div>
      <a
        href="https://calendly.com/sarahannmoe"
        onClick="Calendly.initPopupWidget({url: 'https://calendly.com/sarahannmoe'});return false;"
        target="_blank"
        rel="noreferrer"
      >
        Book a free consultation
      </a>
    </div>
  );
}

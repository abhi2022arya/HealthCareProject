import React, { useState } from "react";
import "./ContactDetails.css";

function ContactDetails() {

    const []=useState();
    const []=useState();
    function contactFormhandler(e){

    }




  return (
    <div className="contact-details">
      <div className="contact-details-left">
        <div className="contact-text">
          <h2>Be Healthy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis veniam incidunt corrupti accusantium!
          </p>
        </div>
        <div className="footer-4">
          <h2>monday - friday</h2>
          <h3>8 am - 3 am</h3>
          <h2>Call us:</h2>
          <h3>+61 (0) 3 8376 6284</h3>
          <h2>or write: </h2>
          <h3>noreply@envato.com</h3>
        </div>
      </div>
      <div className="contact-details-right">
        <div className="contact-form">
          <h2>Get in touch</h2>

          <div className="contact-form-inputs">
            <div className="contact-input">
              <input  required type="text" placeholder="Your name" />
            </div>

            <div className="contact-input">
              <input  required type="email" placeholder="Your e-mail" />
            </div>
          </div>

          <div className="contact-input">
            <input type="text" placeholder="text" />
          </div>

          <div className="contact-input">
            <textarea rows="6" cols="50" placeholder="message"></textarea>
          </div>
        </div>
        <div className="contact-button" onClick={contactFormhandler}>
            send a message
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;

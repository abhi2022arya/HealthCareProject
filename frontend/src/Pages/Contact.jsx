import React from "react";
import contact_img from "../image/contact.png";
import ContactDetails from "../Components/ContactDetails/ContactDetails";

function Contact() {
  return (
    <div>
      <div className="about-hero">
        <div className="about-hero-left">
          <div>
            <div className="about-hero-p1">
              <p>Contact us</p>
            </div>
            <div className="about-hero-p2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita natus nulla, dignissimos mollitia veniam maiores.
              </p>
            </div>
          </div>
        </div>
        <div className="about-hero-right">
          <img src={contact_img}></img>
        </div>
      
      </div>
      <ContactDetails />
    </div>
  );
}

export default Contact;

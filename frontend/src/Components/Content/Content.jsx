import React from "react";
import "./Content.css";
import appointment_icon from "../../image/appointement.png";
import case_icon from "../../image/case.png";
import doctors_icon from "../../image/doctors.png";
import phone_icon from "../../image/phone.png";

function Content() {
  return (
    <div>
      <div className="content">
        <div className="content-first">
          <img src={appointment_icon}></img>
          <div className="content-first-text">
            <h2>Online appointement</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              consequatur esse distinctio
            </p>
          </div>
          <div className="content-button">Make an appointement</div>
        </div>

        <div className="content-first">
          <img src={case_icon}></img>
          <div className="content-first-text">
            <h2>Emergency case</h2>
            <p>
               adipisicing distinctio. 
            </p>
            <div className="content-first-phone">
              <img src={phone_icon}></img>
              <h3>9493929103</h3>
            </div>
          </div>
          <div className="content-button">Contanct Us</div>
        </div>

        <div className="content-first">
          <img src={appointment_icon}></img>
          <div className="content-first-text">
            <h2>Our Doctors</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              consequatur esse distinctio
            </p>
          </div>
          <div className="content-button">Doctors</div>
        </div>
      </div>
    </div>
  );
}

export default Content;

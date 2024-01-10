import React from "react";
import "./AboutHero.css";
import medicine from "../../image/medicine.png";
import about_doctors from "../../image/about_doctors.png";
import about_meet from "../../image/about_meet.jpg";

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-hero-left">
        <div>
          <div className="about-hero-p1">
            <p>About us</p>
          </div>
          <div className="about-hero-p2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              natus nulla, dignissimos mollitia veniam maiores.
            </p>
          </div>
        </div>
        <div className="about-hero-button">
            <div>Read more</div>
        </div>
      </div>
      <div className="about-hero-right">
        <img src={medicine}></img>
      </div>
    </div>
  );
}

export default AboutHero;

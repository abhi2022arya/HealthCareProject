import React from "react";
import "./AboutDoctors.css";
import img1 from "../../image/about_doctors.png";
import img2 from "../../image/about_meet.jpg";
import Help from "../Help/Help";
import Footer from "../Footer/Footer";

function AboutDoctors() {
  return (
    <div>
    <div className="about-doctors">
      <img src={img2} alt="" />
      <div className="about-doctors-text">
        <div className="about-doctors-left">
          <h2>Our doctors</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            placeat eaque eveniet
          </p>
          <p>
            cumque quam omnis est temporibus culpa error repellendus, aliquid
            molestiae eos qui quod.
          </p>
          <div className="about-doctors-button">Our Doctors</div>
        </div>
        <div className="about-doctors-right">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="about-doctors-details">
        <div className="about-doctors-details-left">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ducimus consequatur beatae voluptas cupiditate velit modi ipsa ipsum, reprehenderit pariatur facilis voluptatem, distinctio ullam dolorem earum</p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur ducimus magnam ullam. Atque dolores inventore molestiae debitis excepturi vitae eligendi quam accusamus tenetur 
        </div>
        <div className="about-doctors-details-right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque, distinctio repellendus aspernatur illum illo eaque expedita doloribus veniam beatae non fugiat quisquam est, saepe commodi aliquam quae! Id, dolorum,molestiae debitis excepturi vitae eligendi quam accusamus tenetur .</p>
        </div>
      </div>
    </div>
    <Help/>
    <Footer/>
    </div>
  );
}

export default AboutDoctors;

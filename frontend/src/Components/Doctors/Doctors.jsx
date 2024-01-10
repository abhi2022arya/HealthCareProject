import React from "react";
import './Doctors.css';
import face2 from "../../image/face2.jpg";
import face3 from "../../image/face3.jpg";
import face4 from "../../image/face4.jpg";
import facebook from "../../image/facebook.png"
import linkedin from "../../image/linkedin-circle.png"
import twitter from "../../image/twitter.png"


function Doctors(){
    return(
        <div className="doctors">
            <h2>Doctors</h2>
            <div className="doctors-img">
                <div className="doctors-1">
                    <img src={face2} alt="" />
                </div>
                <div className="doctors-2">
                    <img src={face3} alt="" />
                </div>
                <div className="doctors-3">
                    <img src={face4} alt="" />
                </div>
            </div>
            <div className="doctors-details">

                <div className="doctors-details-1">
                    <div className="doctors-details-text">
                            <h2>Jennifer Lee</h2>
                            <h3>Pediatry Doctor</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="doctors-details-logo">
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                    </div>
                </div>

                <div className="doctors-details-2">
                <div className="doctors-details-text">
                            <h2>Sara Wright</h2>
                            <h3>Dentist </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="doctors-details-logo">
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                    </div>
                </div>

                <div className="doctors-details-3">
                <div className="doctors-details-text">
                            <h2>Rafał Olbromski</h2>
                            <h3>Surgeon</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="doctors-details-logo">
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Doctors
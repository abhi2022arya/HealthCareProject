import React from "react";
import './Meet.css';
import clinic_img from "../../image/clinic.jpg";


function Meet(){
    return(
        <div className="meet">
            <div className="meet-left">
                <img src={clinic_img} ></img>
            </div>
            <div className="meet-right">
                <div className="meet-text">
                    <h2>Meet Our Clinic</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis totam, maxime voluptatum, omnis est dignissimos suscipit expedita</p>
                </div>
                <div className="meet-button">
                    About us
                </div>
            </div>
        </div>
    )
}
export default Meet
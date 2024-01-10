import React from "react";
import './Services.css';
import services_1 from "../../image/service1.png";
import services_2 from "../../image/services2.png";
import services_3 from "../../image/services3.png";
import services_4 from "../../image/services4.png";
import services_5 from "../../image/services5.png";
import services_6 from "../../image/services6.png";

function Services(){
    return(
        <div className="services">

            <div className="services-left">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos praesentium, delectus vero eos</p>
                <div className="services-button">
                    Our Services
                </div>
            </div>
            

            <div className="services-right">
                <div className="services-right-top">
                    <div className="services-right-top-1">
                        <img src={services_1} alt="" />
                        <h3>Pediatry</h3>
                    </div>
                    <div className="services-right-top-2">
                        <img src={services_2} alt="" />
                        <h3>Dentistry</h3>
                    </div>
                    <div className="services-right-top-3">
                        <img src={services_3} alt="" />
                        <h3>Injection</h3>
                    </div>
                </div>

                <div className="services-right-bottom">
                <div className="services-right-bottom-1">
                        <img src={services_4} alt="" />
                        <h3>Cardiology</h3>
                    </div>
                    <div className="services-right-bottom-2">
                        <img src={services_5} alt="" />
                        <h3>Blood transfusion</h3>
                    </div>
                    <div className="services-right-bottom-3">
                        <img src={services_6} alt="" />
                        <h3>X-Ray</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services

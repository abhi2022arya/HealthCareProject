import React from "react";
import './Help.css';
import help_pic from "../../image/emergency_pic.jpg";


function Help(){
    return(
        <div className="help">
            <div className="help-left">
                <img src={help_pic} alt="" />
            </div>
            <div className="help-right">
                <div className="help-right-text">
                    <h2>Need an Emergency Help?</h2>
                    <h2> Call Us!</h2>
                    <h3>+61 (0) 383 766 284</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur sequi aperiam. Sint dolore ab laboriosam aliquid</p>
                </div>
                <div className="help-button">
                        Contact us
                </div>
            </div>
        </div>
    )
}

export default Help
import React, { useState, useContext } from "react";
import Header from "../Components/Header";
import { userInfoContext } from "../GlobalState";
import emails_icon from "../image/email.png";
import locks_icon from "../image/lock6.png";
import "./Signin.css";


// popout message wala ka css thik kro .


function Signin() {
  const { setGlobalFirstName, setGlobalLastName, setGlobalEmail } =
    useContext(userInfoContext);

  let button_name = "Sign In";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedInFirstName, setLoggedinFirstName] = useState("");
  const [loggedInLastName, setLoggedInLastName] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function signinHandler() {
    const signin_data = {
      email: email,
      password: password,
    };

    if (!email) {
      setMessage("Please fill out Email");
      return;
    }
    if (!password) {
      setMessage("Please fill out password");
      return;
    }

    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signin_data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setMessage(data.error);
        } else {
          console.log(data);
          setMessage("Form Submitted Successfully");
          setGlobalFirstName(data.first_name);
          setGlobalLastName(data.last_name);
          setGlobalEmail(data.email);

          window.location.href = "/complaintform";
        }
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <Header />
      <div className="containers">
        <div className="headers">
          <div className="texts">Login</div>
          <div className="underlines"></div>
        </div>

        <div className=" ">
        
          {message != "" && (
            <div class="alert alert-danger" role="alert">
              {message}
            </div>
          )}
        </div>

        <div className="login-inputs">
          <div className="login-input">
            <img src={emails_icon} className="emails_icon"></img>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email address"
              defaultValue={email}
              onChange={emailHandler}
            />
          </div>
          <div className="login-input">
            <img src={locks_icon} className="locks_icon"></img>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              defaultValue={password}
              onChange={passwordHandler}
            />
          </div>
        </div>
        <div className="submit-containers">
          <div className="submits" onClick={signinHandler}>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Signin;

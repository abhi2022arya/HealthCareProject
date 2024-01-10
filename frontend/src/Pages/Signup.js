import "./Signup.css";
import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import email_icon from "../image/email.png";
import lock_icon from "../image/lock6.png";
import person_icon from "../image/person.png";

function Signup() {
  // let button_name = "Sign Up";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");

  // const navigate = useNavigate(); // Create a navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.first_name === "") return;
    if (formData.last_name === "") return;
    if (formData.email === "") return;
    if (formData.password !== formData.confirm_password) {
      setError("password not match");
      return;
    }
    // console.log("hi");
    // Send form data to the backend
    const response = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Registration done");
      window.location.href = "/signin";
    } else {
      const data = await response.json();
      console.error("Registration failed:", data.error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input-row-name">
            <div className="input">
              <img src={person_icon} className="person_icon"></img>
              <input
                type="text"
                required
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                value={formData.first_name} // Add value attribute
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                } // Add onChange handler
              />
            </div>

            <div className="input">
              <img src={person_icon} className="person_icon"></img>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                value={formData.last_name} // Add value attribute
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                } // Add onChange handler
              />
            </div>
          </div>
          <div className="input  email">
            <img src={email_icon} className="email_icon"></img>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={formData.email} // Add value attribute
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } // Add onChange handler
            />
          </div>
          <div className="input-row-password">
            <div className="input">
              <img src={lock_icon} className="lock_icon"></img>
              <input
                type="password"
                className="form-control"
                placeholder="Create Password"
                value={formData.password} // Add value attribute
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                } // Add onChange handler
              />
            </div>

            <div className="input">
              <img src={lock_icon} className="lock_icon"></img>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={(e) =>
                  setFormData({ ...formData, confirm_password: e.target.value })
                }
              />
              {error !== "" && (
                <div class="alert alert-danger mt-2">{error}</div>
              )}
            </div>
          </div>

          {/* <div className="button">
            <button onClick={handleSubmit}> SignUp</button>
          </div> */}
          <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;

import React from "react";
import "./contacts.css";
const Contacts = () => {
  return (
    <div className="contacts-div">
      <div className="project">
        <h3>Let’s start a project</h3>
        <img
          src="./images/diagonalVector.svg"
          alt="diagonal vector"
          className="diagonal-vector"
        />
      </div>
      <div className="contact">
        <h3>Enter your address and phone number to contact you</h3>
        <div className="inputs">
          <div className="email">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="phone">
            <input type="phone" placeholder="Phone" />
            <img
              src="./images/horizontalVector.svg"
              alt="horizontal-vector"
              className="horizontal-vector"
            />
          </div>
        </div>
      </div>
      <div className="address">
        <div className="texts">
          <h3>Rixard Zorge str. 13, Azerbaijan, Baku</h3>
          <p>From Monday to </p>
          <p>Saturday 10:00 - 20:00 </p>
          <p>Break: 13:00 - 14:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

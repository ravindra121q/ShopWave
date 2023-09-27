import React from "react";
import "../css/LoginPage.css";
import backgroundImage from "../assets/layered-waves-haikei.svg";
export const LoginPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          border: "1px solid green",
          width: "100%",
          paddingTop: "10px",
          height: "38rem",
        }}
      >
        <div className="login-box">
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <center>
              <a href="#">
                SEND
                <span></span>
              </a>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

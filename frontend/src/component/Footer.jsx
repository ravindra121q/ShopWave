import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "transparent",
        marginTop: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#495669",
          height: "40px",
          color: "white",
          marginTop: "-10px",
        }}
      >
        {" "}
        <a href="#Home">
          <h5 style={{ color: "white" }}>Back to top</h5>
        </a>
      </div>
      <div
        style={{
          backgroundColor: "#121A23",
          paddingTop: "30px",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            lineHeight: "0.5rem",
          }}
        >
          <div>
            <h4>Get to Know Us</h4>
            <h5>About Us</h5>
            <h5>Careers</h5>
            <h5>Press Releases</h5>
            <h5>Amazon Science</h5>
          </div>
          <div>
            {" "}
            <h4>Connect with Us</h4>
            <div>
              <h5>About Us</h5>
              <h5>Careers</h5>
              <h5>Press Releases</h5>
              <h5>Amazon Science</h5>
            </div>
          </div>
          <div>
            {" "}
            <h4>Make Money with Us</h4>
            <div>
              <h5>About Us</h5>
              <h5>Careers</h5>
              <h5>Press Releases</h5>
              <h5>Amazon Science</h5>
            </div>
          </div>
          <div>
            {" "}
            <h4>Let Us Help You</h4>
            <div>
              <h5>About Us</h5>
              <h5>Careers</h5>
              <h5>Press Releases</h5>
              <h5>Amazon Science</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

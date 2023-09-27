import React from "react";
import backgroundImage from "../assets/low-poly-grid-haikei.svg";
import FirstSlider from "../component/sliders/HomePage/First";
import Second from "../component/sliders/HomePage/Second";
import { Third } from "../component/sliders/HomePage/third";
import Fourth from "../component/sliders/HomePage/Fourth";
export const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }} id="Home">
      {" "}
      <div style={{ color: "white", backgroundColor: "#001220" }}>
        <div
          style={{
            width: "100%",
            margin: "auto",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          <FirstSlider />
          <div
            style={{
              backgroundColor: "white",
              width: "95%",
              margin: "auto",
              paddingLeft: "10px",
            }}
          >
            <Second />
          </div>
          <div>
            <Third />
          </div>
          <div>
            <Fourth />
          </div>
          <div>
            <Third />
          </div>
          <div>
            <Fourth />
          </div>
          <footer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#495669",
                height: "40px",
                color: "white",
                marginTop: "20px",
                transform: "scale(1)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {" "}
              <a href="#Home">
                <h5 style={{color:"white"}}>Back to top</h5>
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
              <div></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

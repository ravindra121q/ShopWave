import React, { Component } from "react";
import Slider from "react-slick";

export default class Second extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "black", textAlign: "left", paddingTop: "10px" }}>
          {" "}
          Today's Deals{" "}
          <span
            style={{ paddingLeft: "20px", fontSize: "15px", color: "gray" }}
          >
            See all Details
          </span>
        </h2>
        <Slider {...settings}>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/6140aVgKm2L._UL1080__AC_SY200_.jpg"
              alt="image1"
            />
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 60% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
            
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41XGDaIXyML._AC_SY200_.jpg"
              alt="image3"
            />{" "}
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 30% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
            <h6>Best Order On Red Chief</h6>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61e1gu17UqL._UL1500__AC_SY200_.jpg"
              alt="image4"
            />{" "}
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 70% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51xnLlMYZJL._AC_SY200_.jpg"
              alt="image4"
            />{" "}
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 60% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/511lQz+v3xL._AC_SY200_.jpg"
              alt="image5"
            />
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 60% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
          </div>{" "}
          <div>
            <img
              src="https://m.media-amazon.com/images/I/516DmKcrbNL._AC_SY200_.jpg"
              alt="image6"
            />{" "}
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 10% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61a75x5j6hL._AC_SY200_.jpg"
              alt="image7"
            />{" "}
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 20% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71crnsyn9WL._AC_SY200_.jpg"
              alt="image8"
            />{" "}
            <div>
              <h6 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "red",
                    height: "28px",
                    paddingRight: "2px",
                    marginLeft: "12px",
                    textAlign: "left",
                    paddingLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Up to 30% off
                </span>{" "}
                Deal Of the Day
              </h6>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

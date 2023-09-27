import React, { Component } from "react";
import Slider from "react-slick";

export default class FirstSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/89c26b04d640c7a9.jpg?q=20"
              alt="image2"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20"
              alt="image3"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/81c72be03441ac78.jpg?q=20"
              alt="image4"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20"
              alt="image5"
            />
          </div>
          <div>
            <img
              style={{ height: "300px", width: "100%" }}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/D84645784_DesktopTallHero_1500x600._CB578539610_.jpg"
              alt="image6"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

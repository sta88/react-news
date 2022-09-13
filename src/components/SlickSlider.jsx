
import React from "react";
import Slider from "react-slick";

export default function SlickSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slick-slider">
            <Slider {...settings}>
                <div>
                    <img src="images/image1.png" />
                </div>
                <div>
                    <img src="images/image2.png" />
                </div>
                <div>
                    <img src="images/image3.png" />
                </div>
                <div>
                    <img src="images/image4.png" />
                </div>
            </Slider>
        </div>
    );
}
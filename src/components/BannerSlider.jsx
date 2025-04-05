import React from 'react'
import { Badge } from 'react-bootstrap';
import Slider from "react-slick";
import BannerSliderImage from './slider/BannerSliderImage';
const BannerSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    return (
        <div>
            <div className="slider-container banner-slider my-3">
                <Slider {...settings}>
               <BannerSliderImage />
               <BannerSliderImage />

                </Slider>
            </div>
        </div>
    )
}

export default BannerSlider
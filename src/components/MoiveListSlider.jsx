import React from 'react'
import Slider from "react-slick";
import MovieListCard from './slider/MovieListCard';

const MoiveListSlider = () => {


    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <div className=' my-4'>
            <h6 className='mb-3'>You Might Like</h6>
            <div className="slider-container">
                <Slider {...settings}>
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />

                </Slider>
            </div>
        </div>
    )
}

export default MoiveListSlider
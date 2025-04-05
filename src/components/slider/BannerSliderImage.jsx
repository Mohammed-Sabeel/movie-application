import React from 'react'
import { Badge } from 'react-bootstrap'

const BannerSliderImage = () => {
  return (
    <div className='position-relative'>

    <img src="https://images.freecreatives.com/wp-content/uploads/2016/03/Avengers-Wallpapers.jpg" className='img-fluid' />
    <div className='banner-movier-details'>
        <div className=''>
            <Badge pill bg="light" text="dark">
                Trending Now
            </Badge>
        </div>
        <div>
            <h6 className='mb-2'>A Quite Place</h6>
            <p className='mb-2'>2018 Horro / Thriller . 1h 30m</p>
            <p className='mb-2'> The film follows a family of survivors, led by parents Evelyn and Lee Abbott, who must live in complete silence to avoid being killed by these deadly creatures.</p>
            <div className='d-flex align-items-center gap-2'>
                <button className='btn btn-light rounded-pill'>Watch Now</button>
                <button className='btn btn-outline-light rounded-pill'>Download</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default BannerSliderImage
import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchCard from '../components/SearchCard'
import BannerSlider from '../components/BannerSlider'
import MoiveListSlider from '../components/MoiveListSlider'
import MovieDetailCard from '../components/MovieDetailCard'

const Homepage = () => {
  return (
    <div className='d-flex gap-3'>
      <Sidebar />
      <main className='my-3 container-fluid' style={{ width: "94%" }}>
        <div className='row'>
          <div className='col-md-9 col-lg-9 col-sm-12'>

            <div className='bg-main-section'>
              <SearchCard />
              <BannerSlider />
              <MoiveListSlider />
            </div>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-12'>
            <MovieDetailCard />
          </div>
        </div>

      </main>

    </div>
  )
}

export default Homepage
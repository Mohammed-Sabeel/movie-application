import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchCard from '../components/SearchCard'
import BannerSlider from '../components/BannerSlider'
import MoiveListSlider from '../components/MoiveListSlider'

const Homepage = () => {
  return (
    <div className='d-flex gap-3'>
      <Sidebar />
      <main className='my-3 container-fluid' style={{width:"94%"}}>
        <div className='row'>
          <div className='col-md-8 col-lg-8 col-sm-12'>

            <div  className='bg-main-section'>
            <SearchCard />
            <BannerSlider />
<MoiveListSlider />
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Homepage
import React from 'react'
import profileLogo from './../assets/man.png'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiMovieAiLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='d-flex flex-column aligh-items-center justify-content-between h-100'>
                <div className='my-3'>
                    <img src={profileLogo} className='img-fluid' width={35} />
                </div>
                <nav>
                    <ul>
                        <li><a href='#'><IoMdSearch fontSize={35} /></a></li>
                        <li><a href='#'><MdOutlineDashboard fontSize={35} /></a></li>
                        <li><a href='#'><MdOutlineLiveTv fontSize={35} /></a></li>
                        <li><a href='#'><FaRegHeart fontSize={35} /></a></li>
                        <li><a href='#'><RiMovieAiLine fontSize={35} /></a></li>
                    </ul>
                </nav>
                <nav className='mb-3'>
                    <ul>
                        <li><a href='#'><CiSettings fontSize={35} /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
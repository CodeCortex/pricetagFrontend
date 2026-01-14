import React from 'react'
import navbarData from "../../data/navbar.json";
import { Link } from 'react-router-dom';


const SimpleNavbar = () => {
  return (
    <div className='px-3 py-3 sticky top-0 z-20 w-full flex justify-between items-center bg-gradient-to-r from-white from-[0%] to-orange to-[83%]'>
            <Link className="pl-6 flex items-center" to="/">
                <div className="relative inline-block">
                    <img
                        className="h-12 w-auto object-contain"
                        alt="logo"
                        src={navbarData.logo}
                    />
                    <span className="text-md font-bold absolute -top-1 -right-2"><sup>TM</sup></span>
                </div>
            </Link>
            
        </div>
  )
}

export default SimpleNavbar

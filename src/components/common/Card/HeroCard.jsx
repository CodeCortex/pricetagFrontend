import React from 'react'
import House from "../../../assets/images/House.png"
import Land from "../../../assets/images/Land.png"
import Shop from "../../../assets/images/Shop.png"
import Flat from "../../../assets/images/Flat.png"


const Herocard = ({icon, title, active, onClick}) => {
  return (
    <div
    onClick={onClick}
    className={`w-40 h-40 flex flex-col justify-center items-center rounded-md cursor-pointer transition-all shadow-md
        ${active? "bg-orange text-white shadow-xl scale-105":"bg-white text-black hover:shadow-xl"}`}
    >
        <img 
        src={icon}
        alt={title}
        className="w-14 h-14 object-contain mb-3"
        />

        <p className={`text-lg font-semibold tracking-wide`}>{title}</p>

      
    </div>
  )
}

export default Herocard

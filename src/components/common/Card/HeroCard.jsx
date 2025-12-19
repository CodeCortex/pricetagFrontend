import React from 'react'
import House from "../../../assets/images/House.png"
import Land from "../../../assets/images/Land.png"
import Shop from "../../../assets/images/Shop.png"
import Flat from "../../../assets/images/Flat.png"
import PropertyValuationCardImage from "../../../assets/images/PropertyValuationCardImage.png"
import { GradientButton } from '../Button/Button'


export const Herocard = ({ icon, title, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-40 h-40 flex flex-col justify-center items-center rounded-md cursor-pointer transition-all shadow-md
        ${active ? "bg-orange text-white shadow-xl scale-105" : "bg-white text-black hover:shadow-xl"}`}
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


export const PropertyValuationCard = ({image, title, details, price, onClick}) => {
 

  return (
    <div className='relative w-full max-w-[360px] mx-auto'>
      {/* image  */}
      <div className='h-56 w-full rounded-t-xl bg-cover bg-center' style={{ background: `url(${image})` }}></div>


      {/* white card content */}
      <div className='bg-white p-6 rounded-b-xl shadow-lg'>
        <p className='text-xl font-semibold text-black'>{title}</p>
        <p className='text-gray-700 mt-1 leading-tight'>{details}</p>
        <p className='text-black font-medium text-lg mt-3'>{price}</p>

        <div className='mt-6 flex justify-center'>
          <GradientButton text="CONTACT" onClick={onClick} className='w-2/3 font-semibold' />
        </div>
      </div>
    </div>
  )

}


// export const RecentlyAddedProperties= ()=>{

//   return(
//     <div className=''>
      

//     </div>
//   )
// }



export const RecentlyAddedProperties = ({
  city,
  image,
  bedrooms,
  bathrooms,
  carports,
  area,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">

      {/* Image */}
      <img
        src={image}
        alt={city}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{city}</h3>

        <div className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm">
          <p>{bedrooms} Bedrooms</p>
          <p>{carports} Carports</p>
          <p>{bathrooms} Bathrooms</p>
          <p>{area}</p>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{price}</p>

          <button className="flex items-center gap-1 font-semibold hover:text-orange-500 transition">
            Read More
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};


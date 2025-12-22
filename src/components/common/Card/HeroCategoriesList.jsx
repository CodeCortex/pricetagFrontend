import React, { useState } from 'react'
import House from "../../../assets/images/House.png"
import Land from "../../../assets/images/Land.png"
import Shop from "../../../assets/images/Shop.png"
import Flat from "../../../assets/images/Flat.png"
import PropertyValuationCardImage from "../../../assets/images/PropertyValuationCardImage.png"
import RecentlyAdded from "../../../assets/images/RecentlyAdded.png"

import { Herocard } from './Herocard'
import { PropertyValuationCard } from './Herocard'
import { RecentlyAddedProperties } from './Herocard'
import { HandHelping } from 'lucide-react'





export const HeroCategoriesList = () => {
    const [active, setActive] = useState("Land");

    const categories = [
        { title: "Shop", icon: Shop },
        { title: "House", icon: House },
        { title: "Land", icon: Land },
        { title: "Flat", icon: Flat }
    ]


    return (
        <div className='flex gap-8 justify-center'>
            {
                categories.map((item) => (
                    <Herocard
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        active={active === item.title}
                        onClick={() => setActive(item.title)}
                    />
                ))
            }
        </div>
    )
}

export const PropertyValuationCategoriesCard = () => {

    const handleContact=(name)=>{
        alert("Contact clicked for: "+ name);
    };

    const cards = [
    {
      image: PropertyValuationCardImage,
      title: "Ventara Residences",
      details: "3BHK • 3.5BHK • 4BHK APARTMENT\nSarjapur",
      price: "Price On Request",
    },
    {
      image: PropertyValuationCardImage,
      title: "Elite Villa Homes",
      details: "4BHK Luxury Villa\nWhitefield",
      price: "₹ 2.3 Cr onwards",
    },
    {
      image: PropertyValuationCardImage,
      title: "Prime Commercial Shop",
      details: "300–500 sq.ft\nElectronic City",
      price: "₹ 45L onwards",
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
        {
            cards.map((card,index)=>(
                <PropertyValuationCard key={index} image={card.image} title={card.title} details={card.details} price={card.price} onClick={()=>handleContact(card.title)}/>

            ))
        }
    </div>
  )
    

}








// export const RecentlyAddedPropertiesCard=()=>{
//     return(
//         <div>

//         </div>
//     )
// }





export const RecentlyAddedPropertiesCard = () => {
    const properties = [
  {
    city: "PUNE",
    image: RecentlyAdded, 
    bedrooms: 4,
    bathrooms: 2,
    carports: 2,
    area: "450m2",
    price: "$450,000",
  },
  {
    city: "Nagpur",
    image: RecentlyAdded,
    bedrooms: 4,
    bathrooms: 2,
    carports: 2,
    area: "450m2",
    price: "$450,000",
  },
  {
    city: "Nagpur",
    image: RecentlyAdded,
    bedrooms: 4,
    bathrooms: 2,
    carports: 2,
    area: "450m2",
    price: "$450,000",
  },
  {
    city: "Nagpur",
    image: RecentlyAdded,
    bedrooms: 4,
    bathrooms: 2,
    carports: 2,
    area: "450m2",
    price: "$450,000",
  },
  {
    city: "Nagpur",
    image: RecentlyAdded,
    bedrooms: 4,
    bathrooms: 2,
    carports: 2,
    area: "450m2",
    price: "$450,000",
  },
  {
    city: "Nagpur",
    image: RecentlyAdded,
    bedrooms: 4,
    bathrooms: 2,
    carports: 2,
    area: "450m2",
    price: "$450,000",
  }
];
  return (
    <section className="px-10 py-10 bg-white">

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((item, index) => (
          <RecentlyAddedProperties key={index} {...item} />
        ))}
      </div>

      {/* Slider Indicator */}
      {/* <div className="flex justify-center gap-3 mt-10">
        <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
        <span className="w-10 h-1 bg-gray-300 rounded-full"></span>
      </div> */}
    </section>
  );
};


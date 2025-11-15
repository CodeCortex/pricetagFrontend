import React, {useState} from 'react'
import House from "../../../assets/images/House.png"
import Land from "../../../assets/images/Land.png"
import Shop from "../../../assets/images/Shop.png"
import Flat from "../../../assets/images/Flat.png"

import Herocard from './Herocard'


const HeroCategoriesList = () => {
    const [active, setActive]=useState("Land");

    const categories=[
        {title:"Shop", icon:Shop},
        {title:"House", icon:House},
        {title:"Land", icon:Land},
        {title:"Flat", icon:Flat}
    ]


  return (
    <div className='flex gap-8 justify-center'>
        {
            categories.map((item)=>(
                <Herocard
                key={item.title}
                title={item.title}
                icon={item.icon}
                active={active===item.title}
                onClick={()=>setActive(item.title)}
                />
            ))
        }
    </div>
  )
}

export default HeroCategoriesList

import React from 'react'
import heroBackground from "../../assets/images/heroBackground.png"
import Navbar from './Navbar'
import SearchBar from '../common/Input/SearchBar'
const Hero = () => {
    const searchHandler = (query) => {
        alert("Roshan Jaiswal: "+query);
    }
    return (
        <div>
            <Navbar />
            <section id="#home">
                <div className='w-full h-[500px] flex flex-col justify-center items-start pl-20 bg-cover object-center relative' style={{ backgroundImage: `url(${heroBackground})` }}>
                    {/* dark overlay */}
                    <div className='absolute inset-0 bg-black/40'></div>

                    <div className='relative z-10 text-start text-white mb-6 pb-20'>
                        <h1 className='text-6xl font-extrabold mb-3 tracking-tight'>Property Price Tag</h1>
                        <p className='text-xl font-light'>Specialized in Market Research and Investigation of Real Estate</p>
                    </div>

                    <div className='relative z-10 w-full flex justify-center pb-10'>
                        <SearchBar
                            placeholder="Search By Area, City, Location"
                            buttonText='Search'
                            onSearch={searchHandler}
                            className='w-3/5'
                            inputClass='bg-white'
                        />
                    </div>


                </div>




            </section>

        </div>
    )
}

export default Hero

import React from 'react'
import heroBackground from "../../assets/images/heroBackground.png"
import Navbar from './Navbar'
import SearchBar from '../common/Input/SearchBar'
import { HeroCategoriesList } from '../common/Card/HeroCategoriesList'
import Flat1 from "../../assets/images/Flat1.png"
import Shop1 from "../../assets/images/Shop1.png"
import Land1 from "../../assets/images/Land1.png"
import Mapping from './Mapping'
import FeaturePic from "../../assets/images/FeaturePic.png"
import { GradientButton } from '../common/Button/Button'
import UnderConstruction from './UnderConstruction'
import Footer from './Footer'
import { PropertyValuationCategoriesCard } from '../common/Card/HeroCategoriesList'
import Testmonial from "../../../src/assets/images/Testimonial.png"
import { RecentlyAddedPropertiesCard } from '../common/Card/HeroCategoriesList'




const Hero = () => {
    const searchHandler = (query) => {
        alert("Roshan Jaiswal: " + query);
    }

    const check = () => {
        alert("Roshan Jaiswal");
    }
    return (
        <div className=''>
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
                    <div className='absolute z-10 w-full -translate-x-20 flex justify-center items-center -bottom-24'>
                        <HeroCategoriesList />
                    </div>
                </div>

                <div className='bg-greyfirst pt-40 px-20'>
                    <div className='flex gap-6 '>
                        <div className='w-1/2 relative h-[520px]'>
                            <div className='absolute inset-0 bg-black/25 rounded-md'></div>
                            <img src={Flat1} alt="flat1" className='w-full  h-full object-cover rounded-md' />
                            <p className='absolute bottom-6 left-6 z-10 text-white text-3xl font-bold'>FLAT</p>

                        </div>


                        <div className='flex flex-col justify-between w-1/2 gap-6'>
                            <div className='relative h-[248px]'>
                                <div className='absolute inset-0 bg-black/25 rounded-md'></div>
                                <img src={Land1} alt="land1" className='w-full h-full object-cover rounded-md' />
                                <p className='absolute bottom-6 left-6 z-10 text-white text-3xl font-bold'>LAND</p>

                            </div>
                            <div className='relative h-[248px]'>
                                <div className='absolute inset-0 bg-black/25 rounded-md'></div>
                                <img src={Shop1} alt="shop1" className='w-full h-full object-cover rounded-md' />
                                <p className='absolute bottom-6 left-6 z-10 text-white text-3xl font-bold'>SHOP</p>
                            </div>
                        </div>
                    </div>

                    <p className='mt-10 text-xl text-gray-700 leading-relaxed pb-6'>Valuation of Real Estate is a mixture of Science & Art. In some cases, the scientific content will be greater, while in other cases, the process will entirely be an art.</p>


                </div>






            </section>

            <section id="#projects" className='px-20 py-16'>
                <Mapping />
            </section>



            <section id="#features" className='px-20 '>
                <div className='h-[520px] relative flex flex-col justify-start items-start text-start text-white p-10 pl-14'
                    style={{
                        backgroundImage: `url(${FeaturePic}), linear-gradient(to bottom, var(--orange), white)`,
                        backgroundSize: "Cover, 100% 100%",
                        backgroundPosition: "center, center",
                        backgroundRepeat: "no-repeat, no-repeat"
                    }}
                >
                    <div className='absolute inset-0 bg-black/25'></div>
                    <p className='text-lg z-10'>Features</p>

                    <h1 className='text-5xl font-bold py-12 z-10'>Why Choose Us</h1>

                    <p className='w-3/5 text-lg z-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className='pl-4 z-10'>
                        <ul className='pt-10 list-disc text-lg font-bold'>
                            <li>Trusted Company</li>
                            <li>Transparent Pricing</li>
                            <li>Professional Support</li>
                        </ul>

                    </div>

                </div>
                <div className='py-10'>
                    <GradientButton text="Request valuation Report" onClick={check} className='text-2xl font-semibold py-4 px-8' />
                </div>
            </section>

            <section id="#PropertyValuation" className='px-20'>
                <div>
                    <h1 className='text-5xl text-start font-bold py-12'>Property Valuation</h1>
                </div>
                <PropertyValuationCategoriesCard />
            </section>


            <section id="#testimonials" className="px-20 py-6 mt-10 bg-[#F2F6FF]">

                <div className="max-w-7xl mx-auto gap-12 items-center flex p-20">
                    <div className='w-1/2 pr-8'>
                        <p className='text-xl text-orange text-start font-bold mb-2 '>Reviews</p>
                        <p className='text-5xl text-start font-bold py-4'>Testimonials</p>
                        <p className='text-sm text-justify pb-6 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                        {/* Testmonial card */}
                        <div className='bg-white rounded-lg max-w-lg p-6 shadow-2xl' >
                            <div className="flex gap-1 text-orange">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                                    </svg>
                                ))}
                            </div>

                            <p className='mt-4 text-gray-700 text-justify'>Working with Realty was a dream come true! We found our perfect home faster than we expected, and the process was smooth from start to finish.</p>

                            {/* User Info */}
                            <div className="flex items-center pt-10 gap-4">
                                <img
                                    src="/src/assets/images/user.jpg"    // replace with actual image path
                                    alt="Roshan Jaiswal"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="font-semibold text-gray-900 leading-tight">
                                        Roshan Jaiswal
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Google
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right image */}
                    <div className='w-1/2 relative flex justify-end'>
                        <img src={Testmonial} alt="testimonial image" className='w-[80%] rounded-lg shadow-2xl object-cover' />

                        <div className="absolute bottom-8  right-8 bg-white/90 p-4 rounded-lg shadow-md flex items-center gap-3">
                            <div className="text-orange text-3xl">🏠</div>
                            <div>
                                <p className="font-semibold">Happy Clients</p>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>


                    </div>



                </div>
            </section>


            <section id="#recentlyAddedProperties" className='px-20 py-6 mt-10'>
                <div>
                    <h1 className='text-5xl text-start font-bold py-4'>Recently Added Properties</h1>
                </div>
                <RecentlyAddedPropertiesCard />
            </section>




            <UnderConstruction />
            <Footer />
        </div>
    )
}

export default Hero

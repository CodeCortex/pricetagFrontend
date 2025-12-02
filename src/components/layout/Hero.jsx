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




const Hero = () => {
    const searchHandler = (query) => {
        alert("Roshan Jaiswal: " + query);
    }

    const check = () => {
        alert("rajan Jaiswal");
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


            <section id="#testimonials" className="px-20 pt-10">
                <div className="h-[500px] bg-[#F2F6FF]"></div>
            </section>


            <UnderConstruction />
            <Footer />





        </div>
    )
}

export default Hero

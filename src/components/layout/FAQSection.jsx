import React from 'react'
import FaqImage from "../../assets/images/FaqImage.png"
import { useState } from 'react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "What is the first step in the home buying process?",
            answer:
                "The first step is getting pre-approved for a mortgage. This helps you understand your budget and makes you a stronger buyer.",
        },
        {
            question: "How long does it take to buy a home?",
            answer:
                "On average, buying a home takes 30 to 60 days from offer to closing, depending on inspections, financing, and legal checks.",
        },
        {
            question: "What is an escrow account?",
            answer:
                "An escrow account is managed by a neutral third party to hold money and documents until all conditions of the sale are completed.",
        },
        {
            question: "What is a contingency in a real estate contract?",
            answer:
                "A contingency is a condition that must be met before a real estate deal becomes final, such as inspections or loan approval.",
        },
    ];


    return (
        <div>
            <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className=''>
                    <img src={FaqImage} alt="FAQ" className='w-full h-[500px] object-cover rounded-md' />
                </div>

                <div className='text-start'>
                    <p className="text-orange font-semibold mb-2">Questions</p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-orange inline-block pb-2">
                        Real Estate FAQs
                    </h2>

                    {
                        faqs.map((item, index) => (
                            <div key={index} className='border-b border-gray-600 py-4' onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(index)}>
                                <button className='w-full flex justify-between items-center text-left' onClick={()=>setActiveIndex(activeIndex===index? null: index)}>
                                    <span className='uppercase text-sm font-semibold'>{item.question}</span>
                                    <span className='text-2xl font-bold'>{activeIndex === index ? "-" : "+"}</span>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index?"max-h-40 mt-4":"max-h-0"}`}>
                                    <p className='text-gray-600 text-sm leading-relaxed'>{item.answer}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default FAQSection

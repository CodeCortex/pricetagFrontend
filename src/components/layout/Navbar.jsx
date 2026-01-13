import React, { } from 'react'
import navbarData from "../../data/navbar.json";
import { Link } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";


const Navbar = () => {

    const ScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <nav className='px-3 py-3 sticky top-0 z-20 w-full flex justify-between items-center bg-gradient-to-r from-white from-[0%] to-orange to-[83%]'>
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
            <div>
                <ul className='flex justify-around gap-4 items-center'>
                    {navbarData.links.map((item, index) => (
                        <li key={index}>
                            <button className='cursor-pointer font-medium text-white px-3 py-2 rounded-md hover:bg-white hover:text-orange transition-all duration-500 ease-in-out' onClick={() => ScrollToSection(item.path)}>{item.name}</button>
                        </li>
                    ))}

                    <Link to={navbarData.cta.path} className='cursor-pointer flex items-center gap-1 text-white  font-medium px-3 py-2 rounded-md hover:bg-white hover:text-orange transition'>
                        <span className='hidden md:block'>LOGIN</span>
                        <FiLogIn size={22} />
                    </Link>
                </ul>


            </div>

        </nav>
    )
}
export default Navbar

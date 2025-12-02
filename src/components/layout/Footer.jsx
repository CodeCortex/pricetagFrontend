import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-white from-[10%] via-orange/50 to-orange p-10 px-12">
            <div className="w-full flex flex-col md:flex-row md:justify-between gap-10">

                {/* Left Section */}
                <div className="md:w-2/5 text-justify">
                    <h1 className="text-lg font-medium leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </h1>

                    <div className="flex gap-4 pt-4 text-gray-800">
                        <AiOutlineInstagram size={28} className="cursor-pointer hover:text-orange" />
                        <AiOutlineYoutube size={28} className="cursor-pointer hover:text-orange" />
                        <FaFacebook size={28} className="cursor-pointer hover:text-orange" />
                    </div>
                </div>

                {/* Right Sections */}
                <div className="md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-10">

                    <ul className="space-y-2 text-left">
                        <li className="font-semibold mb-2 text-gray-800">Services</li>
                        <li>Real Estate</li>
                        <li>Agents</li>
                        <li>Home</li>
                        <li>Measurement</li>
                        <li>Consultation</li>
                        <li>Buying</li>
                        <li>Selling</li>
                    </ul>

                    <ul className="space-y-2 text-left">
                        <li className="font-semibold mb-2 text-gray-800">Company</li>
                        <li>About</li>
                        <li>Partnership</li>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>Media Center</li>
                        <li>Career</li>
                    </ul>

                    <ul className="space-y-2 text-left">
                        <li className="font-semibold mb-2 text-gray-800">Support</li>
                        <li>Our Clients</li>
                        <li>Contact</li>
                        <li>Help Center</li>
                        <li>Blog</li>
                        <li>Insights</li>
                    </ul>

                </div>
            </div>

            {/* Divider */}
            <hr className="h-px mt-8 border-1" />

            {/* Bottom Section */}
            <div className="py-4 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>© {new Date().getFullYear()} Powered by PriceTagPrice</p>
                <p className="flex gap-4 mt-2 md:mt-0">
                    <span className="cursor-pointer hover:text-white">Privacy Policy</span> |
                    <span className="cursor-pointer hover:text-white">Terms & Conditions</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

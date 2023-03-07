import React from "react";
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller, Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })
    return (
        <div>
            <div className="max-w-[1640px] mx-auto flex justify-center items-center p-4" data-aos="fade-down">
                <div className="bg-white">
                    <div className="space-x-10 flex text-sm p-3 cursor-pointer">
                        <LinkRoute to="/" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">HOME</LinkRoute>
                        <LinkScroll to="client" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">CLIENT</LinkScroll>
                        <LinkScroll to="about" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">ABOUT</LinkScroll>
                        <LinkScroll to="jasa" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">JASA</LinkScroll>
                        <LinkScroll to="testimoni" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">TESTIMONIALS</LinkScroll>
                        <LinkScroll to="contact" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">CONTACT</LinkScroll>
                        <LinkRoute to="/team" className="hover:text-orange-500">TEAM</LinkRoute>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
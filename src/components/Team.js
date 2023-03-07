import React from "react";
import Orang from '../image/blahh.jpg'
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller, Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../style/landingPage.css'

const Team = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })
    return (

        <>
            <div className="max-w-[1640px] mx-auto flex justify-center items-center p-4" data-aos="fade-down">
                <div className="bg-white shadow-lg">
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
            <div className="lBG">
                <div class="text-center py-10">
                    <h1 className="font-bold text-[45px]">Halaman Team</h1>
                </div>

                <div className="grid grid-cols-4 max-w-5xl mx-auto gap-8 ">
                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32  mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang1</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang2</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light  text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang3</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang4</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang5</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang6</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang7</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Orang} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Orang8</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-justify">
                            Saya berada di posisi striker dan major pebeh
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;
import React from "react";
import Orang from '../image/aldi.jpg'
import Syaqif from '../image/syaqif.jpg'
import Teza from '../image/teza.jpg'
import Yudis from '../image/yudis.jpg'
import Syihab from '../image/syihab.jpg'
import Yafi from '../image/yafi.jpg'
import Ikhwan from '../image/ikhwan.jpg'
import Dani from '../image/dani.jpg'
import Ridho from '../image/ridho.jpg'
import Wili from '../image/wili.jpg'
import Geya from '../image/geya.jfif'
import Ghozy from '../image/ghozy.jfif'
import Zidane from '../image/zidane.jpeg'
import Abdur  from '../image/abdur.jpeg'
import Clara  from '../image/clara.jpeg'
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
                            <h4 className="text-xl font-bold text-center">Muhammad Aldian Nur</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                           Direktur & Head Manager
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Syaqif} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhammad Syaqif</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light  text-center">
                            Chief Executive Officer
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Ghozy} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Ghozy</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Business Analyst
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Geya} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Geyanissa Wanadyawati</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Finance & Secretary
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Teza} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Ahmad Murteza Akbari</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Software Engineer
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Yudis} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Yudistira Rivaldi</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Software Engineer
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Syihab} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhammad Syihab</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Software Engineer
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Yafi} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhammad Yafi Ibrahim Al Mishbah</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Software Engineer
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Ikhwan} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhamad Nor Ikhwani</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            System Administrator
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Dani} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhammad Rizqi Ridhani</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Network Engineer
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Ridho} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhammad Ridho Firdaus</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                            Internship
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Wili} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">William Djati Utomo</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                        Internship
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Abdur} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Muhammad Abdurrahman</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                        Internship
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Clara} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Clarieza Deswita Putri Adihtya</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                        Internship
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl">
                        <img src={Zidane} alt="" className="w-32 mx-auto rounded-md" />
                        <div className="pt-7">
                            <h4 className="text-xl font-bold text-center">Zidane Ishomudin Dzaki</h4>
                        </div>
                        <p className="text-sm leading-7 my-3 font-light text-center">
                        Internship
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Team;
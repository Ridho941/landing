import React from "react";
import '../style/landingPage.css';
import Aos from "aos";
import 'aos/dist/aos.css';


const Hero = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })
    return (
        <div className="p-20">
            <div className="pt-16" data-aos='fade-right'>
                <h1 className="text-[52px] font-bold ">Neumedira</h1>
                <h1 className="text-[52px] font-bold text-[#fba70b]">Indonesia</h1>
                <h3 className="text-gray-600 pt-7 pb-56">Bersama Neumedira Membangun IT Benua</h3>
            </div>
        </div>
    )
}

export default Hero
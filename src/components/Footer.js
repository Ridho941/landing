import React from "react";
import ScrollToTop from "react-scroll-to-top";
import '../style/landingPage.css';


const Footer = () => {
    return (
        <div className="fBG">
            <footer>
                <ScrollToTop smooth top="20" color="# f2772e" />
                <div className="text-center pt-20" id="contact" >
                    <h1 className="text-[52px] font-bold text-white ">Neumedira</h1>
                    <h1 className="text-[52px] font-bold text-[#fba70b]">Indonesia</h1>
                    <h3 className="text-white pt-7">Bersama Neumedira Membangun IT Benua
                        <p className="text-white pt-5"> Neumedira Tower, JI. Panglima Batur No. 24, Kecamatan Banjarbaru Utara, Kota Banjarbaru, Kalimantan Selatan 70714</p></h3>
                </div>
                <div className="flex justify-center space-x-10 pb-20 pt-12 text-center">
                    <div>
                        <h2 className="text-[20px] font-bold text-white">Telefon</h2>
                        <p className="text-white pt-5"> <a href="https://api.whatsapp.com/send?phone=+6281254617551&text=Hallo%20Neumedira!" className="text-center hover:text-yellow-400 duration-300">0812-5461-7551</a></p>
                    </div>
                    <div>
                        <h2 className="text-[20px] font-bold text-white">whatsapp</h2>
                        <p className="text-white pt-5"> <a href="https://neumedira.com/tel:+6281254617551" className="text-center hover:text-yellow-400 duration-300">0812-5461-7551</a></p>
                    </div>
                    <div>
                        <h2 className="text-[20px] font-bold text-white">E-mail</h2>
                        <p className="text-white pt-5"> <a href="mailto:halo@neumedira.com" className="text-center hover:text-yellow-400 duration-300">halo@neumedira.com</a></p>
                    </div>
                </div>
            </footer >
        </div>
    )
}
export default Footer;
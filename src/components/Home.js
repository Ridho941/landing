import React, { useState, useEffect } from "react";
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller, Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import "../style/Slider.css";
import data from "../data/data";
import '../style/landingPage.css';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logo1 from '../image/dinas.png'
import logo2 from '../image/kanal.jpg'
import tapin from '../image/tapin.png'
import Banjarbaru from '../image/banjarbaru.png'
import Daihatsu from '../image/daihatsu.jpg'
import Orflo from '../image/orflo.png'
import Teropong from '../image/teropong.png'
import Braco from '../image/braco.png'
import Uniska from '../image/uniska.png'
import Wisata from '../image/wisata.png'
import Aneka from '../image/aneka.jpeg'


import Telkom from '../image/telkom.png'
import Borneo from '../image/borneo.jpg'
import Kaljs from '../image/kaljs.png'
import Stimik from '../image/stimik.png'

import layanan1 from '../image/layanan1.png'
import layanan2 from '../image/layanan2.png'
import layanan3 from '../image/layanan3.png'
import layanan4 from '../image/layanan4.png'
import bisnis1 from '../image/bisnis1.png'
import bisnis2 from '../image/bisnis2.png'
import bisnis3 from '../image/bisnis3.png'
import bisnis4 from '../image/bisnis4.png'
import pilih1 from '../image/pilih1.png'
import pilih2 from '../image/pilih2.png'
import pilih3 from '../image/pilih3.png'
import pilih4 from '../image/pilih4.png'
import lImage from '../image/left-image.png';
import rImage from '../image/about-icon-02.png';

const Home = () => {
    Aos.init({
        offset: 0,
    })

    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);
    return (
        <>
            {/* Halaman Navbar */}
            <div className="myBG">
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
                {/* Halaman Hero */}

                <div className="p-20">
                    <div className="pt-16" data-aos='fade-right'>
                        <h1 className="text-[52px] font-bold ">Neumedira</h1>
                        <h1 className="text-[52px] font-bold text-[#fba70b]">Indonesia</h1>
                        <h3 className="text-gray-600 pt-7 pb-56">Bersama Neumedira Membangun IT Benua</h3>
                    </div>
                </div>
            </div>

            {/* Layanan */}
            <div className="lBG">
                <section class="mb-12">
                    <div class="container mx-auto py-12">
                        <h1 class="text-black text-center text-[35px] font-bold pt-10 pb-10"> Layanan Yang Kami Sediakan</h1>
                        <div class="flex justify-center gap-5">
                            <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="500">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Software Host</h3>
                                <div className="pt-5">
                                    <img src={layanan1} width='250px' className="justify-center" />
                                </div>
                                <p className="pt-5" >Jasa pembuatan software, hardware, website, mobile apps</p>
                                <p > dan berbagai hal IT lainnya</p>
                            </div>
                            <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="700">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Server</h3>
                                <div className="pt-5">
                                    <img src={layanan2} width='250px' />
                                </div>
                                <p className="pt-5" >Pembelian server fisik atau penyewaan server fisik maupun cloud</p>
                                <p >lainnya yang berbasis IT</p>
                            </div>
                            <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="900">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Multimedia dan Marketing</h3>
                                <div className="pt-5">
                                    <img src={layanan3} width='250px' />
                                </div>
                                <p className="pt-5">Manajemen Sosial Media dan Pembuatan Konten Dalam</p>
                                <p >Berbagai Jenis dari videography, Video Animasi, </p>
                                <p>Poster, dan Lain-Lain, serta analisa SLA.</p>
                            </div>
                            <div class="text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="1100">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Networking</h3>
                                <div>
                                    <img src={layanan4} width='250px' />
                                </div>
                                <p className="pt-5">Pembangunan Struktur Jaringan, Penjualan dan </p>
                                <p >Penyewaan Server, Hosting, serta menyediakan </p>
                                <p>  Pengadaan Server secara fisik dan hal lainnya</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Bisnis */}
            <div className="rBG">
                <section class="mb-12">
                    <div class="container mx-auto py-12">
                        <h1 class="text-black text-center text-[35px] font-bold pt-10 pb-10"> Bisnis Proses</h1>
                        <div class="flex justify-center gap-5">
                            <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="500">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Analysis Kebutuhan/Masalah</h3>
                                <div>
                                    <img src={bisnis1} width='250px' className="justify-center" />
                                </div>
                                <p className="pt-5" >Kami melakukan analisis kebutuhan/permasalahan </p>
                                <p >yang anda hadapi sehingga </p>
                                <p> kami dapat memberikan solusi terbaik</p>

                            </div>
                            <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="700">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Perancangan Solusi</h3>
                                <div className="pt-8">
                                    <img src={bisnis2} width='250px' />
                                </div>
                                <p className="pt-5">Kami menawarkan berbagai macam solusi</p>
                                <p >terbaik untuk kebutuhan/permasalahan</p>
                                <p >anda dengan selalu mempertimbangkan </p>
                                <p >harga terbaik bisnis anda, dengan</p>
                                <p>tetap mempertahankan </p>
                                <p>kualitas dan tempo penyelesaian project.</p>
                            </div>
                            <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="900">

                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Implementasi</h3>
                                <div className="pt-8">
                                    <img src={bisnis3} width='250px' />
                                </div>
                                <p className="pt-5">Pengerjaan project akan</p>
                                <p>dilaksanakan sebagaimana</p>
                                <p>kesepakatan kami</p>
                                <p>dengan client baik dalam </p>
                                <p>kualitas, maupun waktu pengerjaan project</p>
                            </div>
                            <div class="text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="1100">

                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Controling</h3>
                                <div className="pt-8">
                                    <img src={bisnis4} width='250px' />
                                </div>
                                <p className="pt-5">Kami akan melakukan</p>
                                <p >controlling project dengan</p>
                                <p>batas waktu yang telah </p>
                                <p>ditentukan sesuai kesepakatan dengan client.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Pilih */}
            <div className="lBG">
                <section class="mb-12">
                    <div class="container mx-auto py-12">
                        <h1 class="text-black text-center text-[35px] font-bold pt-10 pb-10"> Kenapa Memilih Kami?</h1>
                        <div class="flex justify-center gap-5">
                            <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="500">
                                <h3 class=" font-bold text-[20px] mt-2 pb-2">Dijamin Lebih Murah</h3>
                                <div className="pt-8">
                                    <img src={pilih1} width='250px' className="justify-center" />
                                </div>
                                <p className="pt-5" >Kami melakukan analisis kebutuhan/permasalahan </p>
                                <p >yang anda hadapi sehingga </p>
                                <p> kami dapat memberikan solusi terbaik</p>

                            </div>
                            <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="700">
                                <h3 class=" font-bold text-[20px] mt-2 pb-2">Perancangan Solusi</h3>
                                <div className="pt-8">
                                    <img src={pilih2} width='250px' />
                                </div>
                                <p className="pt-5">Kami menawarkan berbagai macam solusi</p>
                                <p >terbaik untuk kebutuhan/permasalahan</p>
                                <p >anda dengan selalu mempertimbangkan </p>
                                <p >harga terbaik bisnis anda, dengan</p>
                                <p>tetap mempertahankan </p>
                                <p>kualitas dan tempo penyelesaian project.</p>
                            </div>
                            <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="900">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Implementasi</h3>
                                <div className="pt-8">
                                    <img src={pilih3} width='250px' />
                                </div>
                                <p className="pt-5">Pengerjaan project akan</p>
                                <p>dilaksanakan sebagaimana</p>
                                <p>kesepakatan kami</p>
                                <p>dengan client baik dalam </p>
                                <p>kualitas, maupun waktu pengerjaan project</p>
                            </div>
                            <div class="text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="1100">
                                <h3 class=" font-bold text-[20px] mt-4 pb-2">Controling</h3>
                                <div className="pt-8">
                                    <img src={pilih4} width='250px' />
                                </div>
                                <p className="pt-5">Kami akan melakukan</p>
                                <p >controlling project dengan</p>
                                <p>batas waktu yang telah </p>
                                <p>ditentukan sesuai kesepakatan dengan client.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* About */}
            <div className="flex mx-auto pt-9">
                <div className="p-24 bg-auto " data-aos='fade-right' data-aos-delay="700" >
                    <img src={lImage} width="1500px" />
                </div>

                <div className="" id="about">
                    <div className="">
                        <h1 className="text-center text-[25px] font-bold pb-8 pt-6">Tentang Neumedira</h1>
                        <span className="text-[#888] text-justify-center">
                            <p>
                                Platform di bidang teknologi ini pada mulanya didirikan oleh 3 orang pemuda
                                Kalimantan, yang diketuai oleh Muhammad Aldian Nur. Muhammad Aldian Nur bekerja
                                sebagai seorang software engineer dan telah memiliki banyak pengalaman terkait
                                membuat serta mengkustomasi software.
                            </p>
                            <br></br>
                            <p>
                                Selain itu, beliau juga membuka berbagai jasa IT, seperti pengembangan Web dan
                                Server Linux. Dalam beroperasinya layanan pada platform ini, beliau juga dibantu
                                oleh 2 orang lainnya bernama Muhammad Syaqif dan Ghozy Alkatiri.
                            </p>
                            <br></br>
                            <p>
                                Ghozy Alkatiri merupakan seorang lulusan manajemen bisnis yang telah pernah membuat beberapa bisnis aktif.
                            </p>
                            <p>
                                <br></br>
                                Selain itu, beliau juga mengisi berbagai acara edukatif, seperti seminar dan organisasi. Selanjutnya ada Muhammad Syaqif yang merupakan seorang ahli IT handal, yang pernah mengontrol berjalannya beberapa project IT.
                            </p>
                        </span>
                    </div>
                    <div>


                    </div>
                </div>
            </div>

            {/* Client */}
            <div>
                <div id="client">
                    <div class="text-center py-10">
                        <h1 className="font-bold text-[45px]">Client</h1>
                    </div>

                    <div className="grid grid-cols-5 mx-auto gap-8 px-4">
                        <div className="bg-white/10 p-8 rounded-xl">
                            <a href="#">
                                <img src={logo1} alt="" className="h-32 mx-auto rounded-md" />
                            </a>
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center"><a href="#">Provinsi Kalimantan Selatan</a></h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <a herf="https://www.kanalkalimantan.com/">
                            <img src={logo2} alt="" className="h-32 mx-auto rounded-md" />
                            </a>
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center "><a herf="https://www.kanalkalimantan.com/">Kanal Kalimantan</a></h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={tapin} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Kabupeten Tapin</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Banjarbaru} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Kota Banjarbaru</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Daihatsu} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Astra Daihatsu</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Orflo} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Orflo Indonesia</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Teropong} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Teropong Community</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Braco} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Braco Indonesia</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Uniska} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Universitas Islam Kalimantan</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Aneka} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">PT. Anugrah Energi Kalimantan</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>

                        <div className="bg-white/10 p-8 rounded-xl">
                            <img src={Wisata} alt="" className="h-32 mx-auto rounded-md" />
                            <div className="pt-7">
                                <h4 className="text-xl font-bold text-center">Wisata Pulau Tidung</h4>
                            </div>
                            {/* <p className="text-sm leading-7 my-3 font-light text-center ">
                                Saya berada di posisi striker dan major pebeh
                            </p> */}
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Jasa */}
            {/* <div className="pt-8" id="jasa">
                <h1 className="font-bold text-[45px] text-center">Harga Paket Jasa</h1>
                <p className="text-center pt-2">Dapatkan penawaran menarik hanya di Neumedira. Pilih paket sesuai kebutuhan dan tim profesional</p>
                <p className="text-center pt-2">Neumedira akan mewujudkan aplikasi sesuai leinginan Anda</p>
                <div className="flex pt-32 space-x-10 pr-4 pl-4 ">

                    <div className=" box-border border-solid h-80 w-96 rounded-xl shadow-2xl  " >
                        <h1 className="text-center text-[24px] pt-6">Pembuatan Software</h1>
                        <p className="text-center text-[12px] text-black">Harga mulai dari</p>
                        <div className="pt-4 text-center">
                            <strong className="text-[24px] text-[#fb8c00]">Rp 999 K</strong>
                        </div>
                        <div className="p-5">
                            <p>Soon</p>
                            <p className="pt-7">Soon</p>
                        </div>
                        <button className="mx-16 rounded-full hover:bg-red-500 duration-300 font-medium text-white bg-[#f4813f] w-40 h-10 "><a href="">order Sekarang</a></button>
                    </div>

                    <div className="box-border h-80 w-96 rounded-xl shadow-2xl" >
                        <h1 className="text-center text-[24px] pt-6">Server Hosting</h1>
                        <p className="text-center text-[12px] text-black">Harga mulai dari</p>
                        <div className="pt-4 text-center">
                            <strong className="text-[24px] text-[#fb8c00]">*Rp 9 K per Bulan</strong>
                        </div>
                        <div className="p-5">
                            <p>Soon</p>
                            <p className="pt-7">Soon</p>
                        </div>
                        <button className="mx-16 rounded-full hover:bg-red-500 duration-300  justify-center font-medium text-white bg-[#f4813f] w-40 h-10 ">Order Sekarang</button>
                    </div>

                    <div className="box-border h-80 w-96 rounded-xl shadow-2xl">
                        <h1 className="text-center text-[24px] pt-6">Domain</h1>
                        <p className="text-center text-[12px] text-black">Harga mulai dari</p>
                        <div className="pt-4 text-center">
                            <strong className="text-[24px] text-[#fb8c00]">*Rp 20 K</strong>
                        </div>
                        <div className="p-5">
                            <p>Soon</p>
                            <p className="pt-7">Soon</p>
                        </div>
                        <button className="mx-16 rounded-full  hover:bg-red-500 duration-300 justify-center font-medium text-white bg-[#f4813f] w-40 h-10 ">Order Sekarang</button>
                    </div>

                    <div className="box-border h-80 w-96 rounded-xl shadow-2xl">
                        <h1 className="text-center text-[24px] pt-6">Networking</h1>
                        <p className="text-center text-[12px] text-black">Kami berikan penawaran terbaik</p>
                        <div className="pt-4 text-center">
                            <strong className="text-[24px] text-[#fb8c00]">Kontak Sales</strong>
                        </div>
                        <div className="p-5">
                            <p>Soon</p>
                            <p className="pt-7">Soon</p>
                        </div>
                        <button className="mx-16 rounded-full hover:bg-red-500 duration-300 justify-center font-medium text-white bg-[#f4813f] w-40 h-10 ">Order Sekarang</button>
                    </div>
                </div>
            </div> */}

            {/* Kerjasama */}
            <div>
                <div className="text-center font-bold text-[45px] pt-12">
                    <h1>Kerjasama</h1>
                </div>
                <div className="pt-16" >

                    <Swiper
                        modules={[A11y]}
                        spaceBetween={20}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div >
                            <SwiperSlide>
                                <div className="w-80 h-96 rounded-xl">
                                    <center><img src={Telkom} className="h-32 mx-auto rounded-md"  /></center>
                                    <div className="text-center pt-8">
                                        <h1>SMK Telkom Banjarbaru</h1>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-80 h-96 rounded-xl">
                                    <center><img src={Borneo} className="h-32 mx-auto rounded-md" /></center>
                                    <div className="text-center pt-8">
                                        <h1>Borneo Koding</h1>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-80 h-96 rounded-xl">
                                    <center><img src={Uniska} className="h-32 mx-auto rounded-md" /></center>
                                    <div className="text-center pt-8">
                                        <h1>Universitas Islam Kalimantan</h1>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-80 h-96 rounded-xl">
                                    <center><img src={Kaljs} className="h-32 mx-auto rounded-md" /></center>
                                    <div className="text-center pt-8">
                                        <h1>KalselJS</h1>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-80 h-96 rounded-xl">
                                    <center><img src={Stimik} className="h-32 mx-auto rounded-md" /></center>
                                    <div className="text-center pt-8">
                                        <h1>Sekolah Tinggi Informatika</h1>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>
                    </Swiper>
                </div>
            </div>

            {/* Testimoni */}
            <section className="section">
                <div className="text-[45px] text-center font-bold" id="testimoni">
                    <h2>Testimoni</h2>
                </div>
                <div className="section-center" data-aos="zoom-in">
                    {people.map((item, indexPeople) => {
                        const { id, image, name, title, quote } = item;
                        let position = "nextSlide";
                        if (indexPeople === index) {
                            position = "activeSlide";
                        }
                        if (
                            indexPeople === index - 1 ||
                            (index === 0 && indexPeople === people.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <article className={position} key={id}>
                                <img src={image} alt={name} className="person-img" />
                                <h4>{name}</h4>
                                <p className="title">{title}</p>
                                <p className="text">{quote}</p>
                            </article>
                        );
                    })}
                    <button className="prev" onClick={() => setIndex(index - 1)}>
                        <i className="fas fa-arrow-left" />
                    </button>
                    <button className="next" onClick={() => setIndex(index + 1)}>
                        <i className="fas fa-arrow-right" />
                    </button>
                </div>
            </section>

        </>
    )
}

export default Home
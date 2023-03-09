import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import layanan1 from '../image/layanan1.png'
import layanan2 from '../image/layanan2.png'
import layanan3 from '../image/layanan3.png'
import layanan4 from '../image/layanan4.png'


const Layanan = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })
    return (
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
                        <div  className="pt-5">
                            <img src={layanan2} width='250px' />
                        </div>
                        <p className="pt-5" >Pembelian server fisik atau penyewaan server fisik maupun cloud</p>
                        <p >lainnya yang berbasis IT</p>
                    </div>
                    <div class=" text-center p-6 bg-gray-100 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="900">
                        <h3 class=" font-bold text-[20px] mt-4 pb-2">Multimedia dan Marketing</h3>
                        <div  className="pt-5">
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
    )
}

export default Layanan;
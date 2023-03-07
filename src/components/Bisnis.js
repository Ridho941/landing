import React from "react";
import bisnis1 from '../image/bisnis1.png'
import bisnis2 from '../image/bisnis2.png'
import bisnis3 from '../image/bisnis3.png'
import bisnis4 from '../image/bisnis4.png'
import 'aos/dist/aos.css';


const Bisnis = () => {
    return (
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
    )
}

export default Bisnis;
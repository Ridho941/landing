import React from "react";
import lImage from '../image/left-image.png';
import rImage from '../image/about-icon-02.png';
import '../style/landingPage.css';

const About = () => {
    return (
        <div className="flex mx-auto pt-9">
            <div className="p-24 bg-auto ">
                <img src={lImage} width="1500px" />
            </div>

            <div className="" id="about">
                <div className="">
                    <h1 className="text-center font-bold pb-8 pt-6">Tentang Neumedira</h1>
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
    )
}

export default About
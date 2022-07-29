import React, { useEffect } from "react";
import Header from './Header';
import digitallogo from "../logo/digital-logo.png";
import ScrollReveal from 'scrollreveal';
import Aos from "aos";
import "aos/dist/aos.css";
export  function Home(){
        const sr = ScrollReveal();
        sr.reveal('.label',{
            origin:'bottom',
            distance: '50px',
            duration:3000,
            scale:1
        })
        sr.reveal("h4",{
            origin:'top',
            distance: '65px',
            duration:4000,
        })
        sr.reveal(".home__intern2k22--holder",{
            origin:"bottom",
            distance:'80px',
            duration:4000
        })
        useEffect(()=>{
            Aos.init({duration:2000});
        })
        return(
                <div className="home">
                    <Header/>
                    <div className="home__intern2k22 row">
                        <div className="container col home__intern2k22--description">
                            
                                <h4 className="mb-5"><b>БИДНИЙ ТУХАЙ</b></h4>
                                <label className="home__intern2k22--label">
                                    Дижитал мэргэжилтэн хөтөлбөр нь Голомт банкны мэдээллийн технологийн 
                                    хэсгээс санаачлан зохион байгуулж буй Information Technology буюу 
                                    мэдээллийн технологийн чиглэлээр ерөнхий боловсролын сургуулийн сурагч, 
                                    мэдээлэл зүйн багш, болон их дээд сургуулийн оюутан залуусыг дижитал 
                                    технологийн эрин зуунд мэргэжилтэн болгон бэлтгэх зорилготой билээ.
                                </label>
                            
                        </div>
                        <div className="container col home__intern2k22--holder ms-5">
                            <img className="home__intern2k22--img" src={digitallogo} />
                        </div>
                    </div>
                </div>
        )
}
import React, { useEffect } from "react";
import logo from "../logo/intern-logo.jpg";
import ScrollReveal from 'scrollreveal';
import Aos from "aos";
import "aos/dist/aos.css";

export function Event(){
        const sr = ScrollReveal();
        sr.reveal('.event__intern2k22--title',{
            origin:'bottom',
            distance: '50px',
            duration:3000,
            scale:0.5
        })
        useEffect(()=>{
            Aos.init({
                duration:2000
            });
        })
        return(
                <div data-aos="fade-up"  className="event">
                    <h1 className="event__intern2k22--title">Golomt Internship Хөтөлбөр</h1>
                    <div className="row event__intern2k22">
                        <div data-aos="zoom-in" className="col event__intern2k22--label">
                            <h2 className="mb-5 ">Бидний тухай</h2>
                            <div className="event__intern2k22--label--content">
                                <label> Internship хөтөлбөр нь тухайн оюутанд суралцаж байх хугацаанд нь ажлын байранд тодорхой хугацаанд цалинтай дадлагашуулах зорилготой юм. Голомт банкны мэдээллийн технологийн хэсгийн хамт олон одоогийн байдлаар 40 орчим оюутан залуусыг энэхүү хөтөлбөртөө хамрагдуулаад байна.</label>
                            </div>
                        </div>
                        <div data-aos="zoom-in"  className="col event--content">
                            <img className="event--logo" src={logo} />
                        </div>
                    </div>
                    <div className="row event--ul container ">
                                    <div data-aos="flip-up" className="col">
                                        <b >Бодит орчин</b>
                                        <label>Серверийн тоног төхөөрөмж, хэрэглээнд нэвтэрсэн hardware болон software дээр ментороос чиглэл авч ажиллах боломжтой.</label>
                                    </div>
                                    <div data-aos="flip-up" className="col"> <b>Цалинтай дадлага</b>
                                        <label>Идэвх оролцоо, бүтээлч сэтгэлгээ, санаачилга болон ажлын үр дүнг харгалзан үзэж урамшуулал олгодог.</label>
                                    </div>
                                    <div data-aos="flip-up" className="col">
                                        <b>Networking боломжууд</b>
                                        <label>Мэдээллийн Технологийн Хэсгийн алба, хэлтэс, нэгж бүрт ажиллаж буй экспертүүдтэй networking үүсгэх боломжтой.</label>
                                    </div>
                    </div>
                </div>
        )
}
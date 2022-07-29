import React,{useEffect} from "react";
import ScrollReveal from 'scrollreveal';
import Aos from "aos";
import "aos/dist/aos.css";

export function Intern(){
    const sr = ScrollReveal();
        sr.reveal('.card',{
            origin:'bottom',
            distance:'100px',
            duration:3000,
            scale:0.5
        })
        useEffect(()=>{
            Aos.init({duration:2000});
        })
    return(
        <div className="App">
            <h1 data-aos="fade-up" className="mb-3" >Internship 2k22</h1>
            <div className="row intern">
                <div className="col-2 box--holder">
                    <div data-aos="fade-up" className="  card card__one"></div>
                    <div data-aos="fade-up" className="card card__two">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__three">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__four"></div>
                    <div data-aos="fade-up" className="card card__two bg-warning">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                </div>
                <div className="col-2 box--holder">
                    <div data-aos="fade-up" className="card card__two bg-success ">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    
                    <div data-aos="fade-up" className="card card__three bg-info">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>

                    <div data-aos="fade-up" className="card card__one"></div>
                    <div data-aos="fade-up" className="card card__three">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__four"></div>
                </div>
                <div className="col-2 box--holder">
                    <div data-aos="fade-up" className="card card__four"></div>
                    <div data-aos="fade-up" className="card card__two bg-warning">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__one"></div>
                    <div data-aos="fade-up" className="card card__three bg-success">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__three bg-info">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                </div>
                <div className="col-2 box--holder">
                    <div data-aos="fade-up" className="card card__three bg-info">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__three">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__four"></div> 
                    <div data-aos="fade-up" className="card card__two bg-primary">
                        <div className="container card__img"></div>
                        <div className="text-center">Firstname</div>
                    </div>
                    <div data-aos="fade-up" className="card card__one"></div>
                </div>
            </div>
        </div>
    )
}
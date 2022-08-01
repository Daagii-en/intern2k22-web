import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Aos from "aos";
import "aos/dist/aos.css";

export function Intern() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="intern">
      <h1 className="">Internship</h1>
      <div className="row intern--content">
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
          <div data-aos="fade-up" className="card card"></div>
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
          <div data-aos="fade-up" className="card card"></div>
          <div data-aos="fade-up" className="card card__three bg-info">
            <div className="container card__img"></div>
            <div className="text-center">Firstname</div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img"></div>
            <div className="text-center">Firstname</div>
          </div>
        </div>
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="card card__two bg-warning">
            <div className="container card__img"></div>
            <div className="text-center">Firstname</div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__three bg-info">
            <div className="container card__img"></div>
            <div className="text-center">Firstname</div>
          </div>
          <div data-aos="fade-up" className="card card"></div>
          <div data-aos="fade-up" className="card card__three bg-success">
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
          <div data-aos="fade-up" className="card card"></div>
          <div data-aos="fade-up" className="card card__two bg-primary">
            <div className="container card__img"></div>
            <div className="text-center">Firstname</div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
        </div>
      </div>
    </div>
  );
}

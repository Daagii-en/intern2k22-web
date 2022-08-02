import React, { useEffect } from "react";
import Header from "./Header";
import digitallogo from "../logo/digital-logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

export function Home() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  });
  return (
    <div className="home" id="home">
      <div className="home__intern2k22 row">
        <h1 data-aos="fade-up" className="home__intern2k22--title">
          GOLOMT INTERNSHIP ХӨТӨЛБӨР
        </h1>
        <div
          data-aos="fade-up"
          className="container col home__intern2k22--description"
        >
          <h4 className="mb-3">
            <b>БИДНИЙ ТУХАЙ</b>
          </h4>
          <label className="home__intern2k22--label">
            Дижитал мэргэжилтэн хөтөлбөр нь Голомт банкны мэдээллийн технологийн
            хэсгээс санаачлан зохион байгуулж буй Information Technology буюу
            мэдээллийн технологийн чиглэлээр ерөнхий боловсролын сургуулийн
            сурагч, мэдээлэл зүйн багш, болон их дээд сургуулийн оюутан залуусыг
            дижитал технологийн эрин зуунд мэргэжилтэн болгон бэлтгэх зорилготой
            билээ.
          </label>
        </div>
        <div
          data-aos="fade-up"
          className="container col home__intern2k22--holder "
        >
          <img className="home__intern2k22--img" src={digitallogo} />
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

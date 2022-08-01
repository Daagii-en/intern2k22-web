import React, { useEffect } from "react";
import Header from "./Header";
import digitallogo from "../logo/digital-logo.png";
import ScrollReveal from "scrollreveal";

const slidUp = {
  distance: "50px",

  origin: "bottom",
  duration: 2000,
  interval: 1000,

  reset: true,
};
export function Home() {
  ScrollReveal().reveal(".home", slidUp);
  ScrollReveal().reveal(".home--title", slidUp);
  ScrollReveal().reveal(".home__intern2k22--description", slidUp);
  ScrollReveal().reveal(".home__intern2k22--holder", slidUp);

  return (
    <div className="home">
      <div className="home__intern2k22 row">
        <h1 className="event__intern2k22--title">Golomt Internship Хөтөлбөр</h1>
        <div className="container col home__intern2k22--description">
          <h4 className="mb-5">
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
        <div className="container col home__intern2k22--holder ms-">
          <img className="home__intern2k22--img" src={digitallogo} />
        </div>
      </div>
    </div>
  );
}

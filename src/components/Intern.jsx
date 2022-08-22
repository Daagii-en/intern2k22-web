import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import davaajargal from "../logo/davaajargal.jpg";
import tsenguun from "../logo/tsenguun.jpg";
import suglegmaa from "../logo/suglegmaa.jpg";
import turbat from "../logo/turbat.jpg";
import amarbold from "../logo/amarbold.jpg";
import temuulen from "../logo/temuulen.jpg";
import bilguun from "../logo/bilguun.jpg";
import nominerdene from "../logo/nominerdene.webp";
import usukhbayar from "../logo/usukhbayar.jpeg";
import nyamkhishig from "../logo/nyamhishig.JPG";
import huslen from "../logo/huslen.webp";
import bujinlkham from "../logo/bujinlkham.jpg";
import nomin from "../logo/nomin.jpeg";
import batjargal from "../logo/batjargal.jpg";
import gereltuya from "../logo/gereltuya.jpg";
import sukhbat from "../logo/sukhbat.jpg";
import davaadorj from "../logo/davaadorj.jpg";
import baterdene from "../logo/baterdene.JPG";
import erkhembayar from "../logo/erkhembayar.jpeg";
import profile from "../logo/profile.jpg";
export function Intern() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div data-aos="fade-up" className="intern" id="intern">
      <h1>Манай баг</h1>
      <div className="row intern--content">
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="  card card__one"></div>
          <div data-aos="fade-up" className="card card__two">
            <div className="container card__img tsenguun">
              <img src={tsenguun} alt="zurag" />
            </div>
            <div className="text-center">
              <p>О.Цэнгүүн</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={batjargal} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Г.Батжаргал</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__two ">
            <div className="container card__img">
              <img src={nominerdene} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Номин-Эрдэнэ</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="  card card__one"></div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={temuulen} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Тэмүүлэн</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={usukhbayar} alt="zurag" />
            </div>
            <div className="text-center">
              <p>С.Өсөхбаяр</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__two">
            <div className="container card__img">
              <img src={gereltuya} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Гэрэлтуяа</p>
              <p>МУИС</p>
            </div>
          </div>
        </div>
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="card card__two ">
            <div className="container card__img">
              <img src={davaajargal} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Ө.Даваажаргал</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={turbat} alt="zurag" />
            </div>
            <div className="text-center">
              <p>М.Төрбат</p>
              <p>СЭЗИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={erkhembayar} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Э.Эрхэмбаяр</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Э.Тэмүүжин</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__two">
            <div className="container card__img">
              <img src={bujinlkham} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Бүжинлхам</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__two">
            <div className="container card__img">
              <img src={baterdene} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Бат-Эрдэнэ</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="  card card__one"></div>
        </div>
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__two ">
            <div className="container card__img">
              <img src={bilguun} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Билгүүн</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={suglegmaa} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Н.Сүглэгмаа</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={sukhbat} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Сүхбат</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="  card card__one"></div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={huslen} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Хүслэн</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Н.Сүхтөмөр</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
        </div>
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={amarbold} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Э.Амарболд</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Ц.Цэлмүүн</p>
              <p>МУИС</p>
            </div>
          </div>

          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={nyamkhishig} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Х.Нямхишиг</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__two ">
            <div className="container card__img">
              <img src={davaadorj} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Д.Даваадорж</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={nomin} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Т.Номин</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import davaajargal from "../logo/devImg1.jpg";
import tsenguun from "../logo/devImg2.jpg";
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
            <div className="container card__img">
              <img src={davaajargal} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Ө.Даваажаргал</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Г.Батжаргал</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__two bg-warning">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Э.Эрхэмбаяр</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three bg-info">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Тэмүүлэн</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
        </div>
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="card card__two bg-success ">
            <div className="container card__img">
              <img src={tsenguun} alt="zurag" />
            </div>
            <div className="text-center">
              <p>О.Цэнгүүн</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three bg-info">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>М.Төрбат</p>
              <p>СЭЗИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__three bg-primary">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Номин-Эрдэнэ</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Э.Тэмүүжин</p>
              <p>МУИС</p>
            </div>
          </div>
        </div>
        <div className="col-2 box--holder">
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__two bg-warning">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Билгүүн</p>
              <p>ШУТИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__one"></div>
          <div data-aos="fade-up" className="card card__three bg-success">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Н.Сүглэгмаа</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three ">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Б.Сүхбат</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__three bg-info">
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
          <div data-aos="fade-up" className="card card__three bg-info">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
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
          <div data-aos="fade-up" className="card card__one"></div>

          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__two bg-primary">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>Д.Даваадорж</p>
              <p>МУИС</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card__four"></div>
          <div data-aos="fade-up" className="card card__three bg-warning">
            <div className="container card__img">
              <img src={profile} alt="zurag" />
            </div>
            <div className="text-center">
              <p>----</p>
              <p>----</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

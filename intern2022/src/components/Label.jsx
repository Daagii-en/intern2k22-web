import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Label() {
  useEffect(() => {
    Aos.init({
      offset: 50, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <div data-aos="fade-up" className="label">
      <div className="row label--content  container ">
        <div data-aos="fade-up" className=" mt-3">
          <h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                className="bi bi-pc-display-horizontal icons"
                viewBox="-5 -5 25 25"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
              </svg>
            </span>{" "}
            Бодит орчин
          </h2>
          <label className="ms-5">
            Серверийн тоног төхөөрөмж, хэрэглээнд нэвтэрсэн hardware болон
            software дээр ментороос чиглэл авч ажиллах боломжтой.
          </label>
        </div>
        <div data-aos="fade-up" className="mt-2">
          <h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                className="bi bi-credit-card-fill icons"
                viewBox="-5 -5 25 25"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
              </svg>
            </span>{" "}
            Цалинтай дадлага
          </h2>
          <label className="ms-5">
            Идэвх оролцоо, бүтээлч сэтгэлгээ, санаачилга болон ажлын үр дүнг
            харгалзан үзэж урамшуулал олгодог.
          </label>
        </div>
        <div data-aos="fade-up" className="mt-2">
          <h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                className="bi bi-people-fill icons"
                viewBox="-5 -5 25 25"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fillRule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </span>{" "}
            Networking боломжууд
          </h2>
          <label className="ms-5">
            Мэдээллийн Технологийн Хэсгийн алба, хэлтэс, нэгж бүрт ажиллаж буй
            экспертүүдтэй networking үүсгэх боломжтой.
          </label>
        </div>
      </div>
    </div>
  );
}

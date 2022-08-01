import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Label() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div data-aos="fade-up" className="label">
      <div className="row label--content container ">
        <div data-aos="fade-up" className="ms-5 mt-5">
          <h2>Бодит орчин</h2>
          <label className="ms-5">
            Серверийн тоног төхөөрөмж, хэрэглээнд нэвтэрсэн hardware болон
            software дээр ментороос чиглэл авч ажиллах боломжтой.
          </label>
        </div>
        <div data-aos="fade-up" className="">
          <h2>Цалинтай дадлага</h2>
          <label className="ms-5">
            Идэвх оролцоо, бүтээлч сэтгэлгээ, санаачилга болон ажлын үр дүнг
            харгалзан үзэж урамшуулал олгодог.
          </label>
        </div>
        <div data-aos="fade-up" className="">
          <h2>Networking боломжууд</h2>
          <label className="ms-5">
            Мэдээллийн Технологийн Хэсгийн алба, хэлтэс, нэгж бүрт ажиллаж буй
            экспертүүдтэй networking үүсгэх боломжтой.
          </label>
        </div>
      </div>
    </div>
  );
}

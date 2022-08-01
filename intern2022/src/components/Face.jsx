import React, { useEffect } from "react";
import Header from "./Header";
import digitallogo from "../logo/digital-logo.png";
import Aos from "aos";
import "aos/dist/aos.css";
export function Face() {
  useEffect(() => {
    Aos.init({ duration: 500 });
    //scrollAnim();
  });
  const scrollAnim = (e) => {
    let title = document.querySelector(".face");
    console.log(title);
    console.log(title.firstChild.scrollTop);
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      console.log(value);
      if (value == 0) {
        title.firstChild.style.top = "1000px";
      }
      title.firstChild.style.top = value * 0.25 + "px";
    });
  };
  return (
    <div className="face">
      <label data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
        GOLOMT INTERNSHIP
      </label>
      {/* <label data-aos="fade-down" data-aos-delay="50" data-aos-duration="500">
        G
      </label>
      <label data-aos="fade-in" data-aos-delay="100" data-aos-duration="500">
        O
      </label>
      <label data-aos="fade-out" data-aos-delay="150" data-aos-duration="500">
        L
      </label>
      <label data-aos="fade-rigt" data-aos-delay="200" data-aos-duration="500">
        O
      </label>
      <label data-aos="fade-left" data-aos-delay="250" data-aos-duration="500">
        M
      </label>
      <label
        data-aos="fade-down-right"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        T
      </label>
      <label
        data-aos="fade-up-left"
        data-aos-delay="350"
        data-aos-duration="500"
      >
        I
      </label>
      <label
        data-aos="fade-up-right"
        data-aos-delay="400"
        data-aos-duration="500"
      >
        N
      </label>
      <label
        data-aos="fade-down-left"
        data-aos-delay="450"
        data-aos-duration="500"
      >
        T
      </label>
      <label data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="500">
        E
      </label>
      <label
        data-aos="zoom-in-down"
        data-aos-delay="550"
        data-aos-duration="500"
      >
        R
      </label>
      <label
        data-aos="zoom-in-left"
        data-aos-delay="600"
        data-aos-duration="500"
      >
        N
      </label>
      <label
        data-aos="zoom-in-right"
        data-aos-delay="650"
        data-aos-duration="500"
      >
        S
      </label>
      <label
        data-aos="fade-up-left"
        data-aos-delay="700"
        data-aos-duration="500"
      >
        H
      </label>
      <label
        data-aos="fade-down-right"
        data-aos-delay="750"
        data-aos-duration="500"
      >
        I
      </label>
      <label
        data-aos="fade-up-right"
        data-aos-delay="800"
        data-aos-duration="500"
      >
        P
      </label> */}
    </div>
  );
}

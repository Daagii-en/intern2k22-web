import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export function Face() {
  useEffect(() => {
    Aos.init({
      offset: 50, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
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
      <label
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="1000"
        className="mt-5"
      >
        GOLOMT INTERNSHIP
      </label>
      <div className="scroll-downs">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="1500"
          className="mousey"
        >
          <div className="scroller"></div>
        </div>
      </div>
    </div>
  );
}

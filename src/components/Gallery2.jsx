import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import zurag from "../logo/IMG_1988.jpeg";
import zurag2 from "../logo/IMG_1977.jpeg";
import zurag3 from "../logo/IMG_6913.jpg";
import zurag4 from "../logo/IMG_6932.jpg";
export function Gallery2() {
  useEffect(() => {
    Aos.init({
      offset: 50, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <div data-aos="fade-up" className="gallery3">
      <div className="gallery">
        <div className="gallery__row">
          <div data-aos="fade-up" className="gallery__link ">
            <figure className="gallery__thumb">
              <img
                src={zurag}
                alt="Portrait by Jessica Felicio"
                className="gallery__image"
              />
              <figcaption className="gallery__caption">
                Судлаач Оюутан Хөтөлбөр 2022.08.19
              </figcaption>
            </figure>
          </div>

          <div data-aos="fade-up" className="gallery__link zurag2">
            <figure className="gallery__thumb">
              <img
                src={zurag4}
                alt="Portrait by Noah Buscher"
                className="gallery__image"
              />
              <figcaption className="gallery__caption">
                Спорт өдөрлөг 2022.08.18
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="gallery__row">
          <div data-aos="fade-up" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={zurag2}
                alt="Portrait by Oladimeji Odunsi"
                className="gallery__image"
              />
              <figcaption className="gallery__caption">
                Хустай нуруу явган аялал 2022.08.12
              </figcaption>
            </figure>
          </div>
          <div data-aos="fade-up" className="gallery__link zurag2">
            <figure className="gallery__thumb">
              <img
                src={zurag3}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              <figcaption className="gallery__caption">
                Спорт өдөрлөг 2022.08.18
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

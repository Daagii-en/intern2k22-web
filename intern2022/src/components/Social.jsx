import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export function Social() {
  useEffect(() => {
    Aos.init({
      offset: 50, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
    //scrollAnim();
  });
  return (
    <div className="social row">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="row soctial__title"
      >
        <h2>Сошиал медиа сувгууд</h2>
        <p>
          Internship opportunity хөтөлбөр нь албан ёсны сошиал сувгуудаараа
          дамжуулан контентээ түгээдэг.
        </p>
      </div>
      <div className="row social__content">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          className="col"
        >
          <a
            target="_blank"
            title="facebook"
            href="https://www.facebook.com/Golomtbank/"
          >
            Facebook
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          className="col"
        >
          <a
            target="_blank"
            title="youtube"
            href="https://www.youtube.com/c/GolomtBankOfficialChannel"
          >
            Youtube
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
          className="col"
        >
          <a
            target="_blank"
            title="instagram"
            href="https://www.instagram.com/golomtbank/?igshid=qwt0baob8tdn"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

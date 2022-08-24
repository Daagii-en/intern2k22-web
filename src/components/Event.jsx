import React, { useEffect } from "react";
import logo from "../logo/intern-logo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function Event() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div className="event">
      <div className="row event__intern2k22">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="col container  event--content"
        >
          <img className="event--logo" src={logo} />
        </div>
        <div data-aos="fade-up" className="col event__intern2k22--label">
          <div className="event__intern2k22--label--content">
            <label>
              Internship хөтөлбөр нь тухайн оюутанд суралцаж байх хугацаанд нь
              ажлын байранд тодорхой хугацаанд цалинтай дадлагашуулах зорилготой
              юм. Голомт банкны мэдээллийн технологийн хэсгийн хамт олон
              одоогийн байдлаар 15 орчим оюутан залуусыг энэхүү хөтөлбөртөө
              хамрагдуулаад байна.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

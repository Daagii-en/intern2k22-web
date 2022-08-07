import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Gallery() {
  useEffect(() => {});
  const items = document.querySelectorAll("img");
  const itemCount = items.length;
  let count = 0;
  const showNextItem = () => {
    console.log(itemCount);
    items[count].classList.remove("active");

    if (count < itemCount - 1) {
      count++;
    } else {
      count = 0;
    }

    items[count].classList.add("active");
    console.log(count);
  };
  const showPreviousItem = () => {
    items[count].classList.remove("active");

    if (count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }

    items[count].classList.add("active");
    console.log(count);
  };
  // const keyPress = (e) => {
  //   e = e || window.event;

  //   if (e.keyCode == "37") {
  //     showPreviousItem();
  //   } else if (e.keyCode == "39") {
  //     showNextItem();
  //   }
  // };
  return (
    <div className="gallery">
      <div className="container">
        <div className="slider">
          <img
            className="active"
            src="https://source.unsplash.com/gKk9rpyDryU"
            alt=""
          />
          <img src="https://source.unsplash.com/VFGEhLznjPU" alt="" />
          <img src="https://source.unsplash.com/InR-EhiO_js" alt="" />
        </div>
        <nav className="slider-nav">
          <ul>
            <li className="arrow">
              <button className="previous" onClick={showPreviousItem}>
                <span>
                  <i className="ion-arrow-left-c"></i>
                </span>
              </button>
            </li>
            <li className="arrow">
              <button className="next" onClick={showNextItem}>
                <span>
                  <i className="ion-arrow-right-c"></i>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

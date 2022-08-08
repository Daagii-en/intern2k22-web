import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Gallery() {
    const [count, setCount] = useState(1);

    useEffect(() => {

    });
    const showNextItem = () => {
        const items = document.querySelectorAll(".galleryImg");
        const itemCount = items.length;
        console.log("count " + count);
        items[count - 1].classList.remove("active");
        console.log(items[count].classList)
        console.log(items)

        if (count < itemCount - 1) {
            setCount(count + 1);
        } else {
            setCount(1);
            //  items[itemCount - 1].classList.remove("active")
        }

        items[count].classList.add("active");
        console.log(items[count].classList)
        console.log(items)

        console.log(count);
    };
    const showPreviousItem = () => {
        const items = document.querySelectorAll(".galleryImg");
        const itemCount = items.length;
        items[count].classList.remove("active");

        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(itemCount - 1);
        }

        items[count - 1].classList.add("active");
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
                        className="galleryImg active"
                        src="https://source.unsplash.com/gKk9rpyDryU"
                        alt=""
                    />
                    <img className="galleryImg" src="https://source.unsplash.com/VFGEhLznjPU" alt="" />
                    <img className="galleryImg" src="https://source.unsplash.com/InR-EhiO_js" alt="" />
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

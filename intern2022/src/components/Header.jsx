import React, { Component } from "react";
import digitalexpertlogo from "../logo/digital-expert-logo.png";
import logo from "../logo/logo.png";

export default class Header extends Component {
  scrollToHome = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  scrollBehavior = () => {
    let home = document.querySelector("#home");
    console.log("home => " + home.scrollTop);
    console.log(home.scrollTop);
    home.scrollTop += 25;
    let intern = document.querySelector("#internAnchor");
    let contact = document.querySelector("#contactAnchor");
    let scroll = window.scrollY;
    // console.log(scroll);
    if (scroll < 700) {
      home.classList.remove("active");
      intern.classList.remove("active");
      contact.classList.remove("active");
    } else if (scroll >= 700 && scroll < 2300) {
      intern.classList.remove("active");
      contact.classList.remove("active");
      home.classList.add("active");
    } else if (scroll >= 2400 && scroll < 3600) {
      home.classList.remove("active");
      contact.classList.remove("active");
      intern.classList.add("active");
    } else if (scroll >= 3600) {
      home.classList.remove("active");
      intern.classList.remove("active");
      contact.classList.add("active");
    }
  };

  render() {
    window.addEventListener("scroll", this.scrollBehavior);
    return (
      <div className="header row">
        <div className="col ">
          <img
            className="header--logo "
            src={digitalexpertlogo}
            alt="golomt_logo"
            onClick={this.scrollToHome}
          />
        </div>
        <div className="col">
          <ul>
            <li>
              <a href="#home" id="homeAnchor">
                Home
              </a>
            </li>
            <li>
              <a href="#intern" id="internAnchor">
                Internship
              </a>
            </li>
            <li>
              <a href="#contact" id="contactAnchor">
                Contact
              </a>
            </li>
            <li className="header_li">
              <img href="#golomt" src={logo} className="header_li_logo" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

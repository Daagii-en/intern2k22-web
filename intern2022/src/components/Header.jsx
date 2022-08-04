import React, { Component } from "react";
import digitalexpertlogo from "../logo/digital-expert-logo.png";
import logo from "../logo/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.prevY = 0;
  }
  scrollToHome = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  navScrollBehavior = (prevY) => {
    let nav = document.querySelector("#nav");
    let scroll = window.scrollY;
    console.log(scroll);
    if (scroll > prevY && scroll > 10) {
      nav.classList.add("removeNav");
      //console.log("added class");
    } else if (scroll <= prevY) {
      nav.classList.remove("removeNav");
      //console.log("deleted class");
    }
    this.prevY = scroll;
  };

  scrollBehavior = () => {
    this.navScrollBehavior(this.prevY);

    let homeA = document.querySelector("#homeAnchor");
    let internA = document.querySelector("#internAnchor");
    let contactA = document.querySelector("#contactAnchor");
    let home = document.querySelector("#home");
    let intern = document.querySelector("#intern");
    let contact = document.querySelector("#contact");
    let homeY = home.getBoundingClientRect().y;
    let internY = intern.getBoundingClientRect().y;
    let contactY = contact.getBoundingClientRect().y;
    // console.log("home => " + homeY)
    // console.log("intern => " + internY)
    // console.log("contact => " + contactY)
    //console.log(home.getBoundingClientRect().y)
    //let intern = document.querySelector("#internAnchor");
    //let contact = document.querySelector("#contactAnchor");
    // let scroll = window.scrollY;
    if (homeY > 200) {
      homeA.classList.remove("active");
      internA.classList.remove("active");
      contactA.classList.remove("active");
    } else if (homeY <= 200 && internY > 200) {
      internA.classList.remove("active");
      contactA.classList.remove("active");
      homeA.classList.add("active");
    } else if (internY <= 200 && contactY > 400) {
      homeA.classList.remove("active");
      contactA.classList.remove("active");
      internA.classList.add("active");
    } else if (contactY <= 400) {
      homeA.classList.remove("active");
      internA.classList.remove("active");
      contactA.classList.add("active");
    }
    // if (scroll < 700) {
    //   home.classList.remove("active");
    //   intern.classList.remove("active");
    //   contact.classList.remove("active");
    // } else if (scroll >= 700 && scroll < 2300) {
    //   intern.classList.remove("active");
    //   contact.classList.remove("active");
    //   home.classList.add("active");
    // } else if (scroll >= 2400 && scroll < 3600) {
    //   home.classList.remove("active");
    //   contact.classList.remove("active");
    //   intern.classList.add("active");
    // } else if (scroll >= 3600) {
    //   home.classList.remove("active");
    //   intern.classList.remove("active");
    //   contact.classList.add("active");
    // }
  };

  render() {
    window.addEventListener("scroll", this.scrollBehavior);
    return (
      <div>
        <div className="header row" id="nav">
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
            </ul>
          </div>
        </div>
        <div>
          <div className="header_li">
            <img
              href="#golomt"
              src={logo}
              className="header_li_logo"
              onClick={this.scrollToHome}
            />
          </div>
        </div>
      </div>
    );
  }
}

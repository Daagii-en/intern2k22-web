import React, { Component } from "react";
import digitalexpertlogo from "../logo/digital-expert-logo.png";
import logo from "../logo/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevY: 0,
      like: 1,
      clicked: false,
    };
  }
  handleButtonHeart = (e) => {
    this.setState({ like: this.state.like + 1, clicked: !this.state.clicked });
    if (e.target.tagName === "path") {
      e.target = e.target.parentNode;
    }
    console.log(e.target.classList.contains("bi-heart1"));
    if (!e.target.classList.contains("bi-heart1")) {
      e.target.classList.add("bi-heart-active");
      console.log(e.target.classList);
      console.log("yes i have heart1 bitch ass nigga");
    } else {
      e.target.classList.remove("bi-heart-active");
      console.log(e.target);
    }
    //console.log(e.target);
    console.log(this.state.like);
  };
  scrollToHome = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  navScrollBehavior = (prevY) => {
    let nav = document.querySelector("#nav");
    let scroll = window.scrollY;

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
    //let socialA = document.querySelector("#socialAnchor");
    // let partnerA = document.querySelector("#partnerAnchor");
    let internA = document.querySelector("#internAnchor");
    let contactA = document.querySelector("#contactAnchor");
    let home = document.querySelector("#home");
    // let social = document.querySelector("#social");
    // let partner = document.querySelector("#partner");
    let intern = document.querySelector("#intern");
    let contact = document.querySelector("#contact");
    let homeY = home.getBoundingClientRect().y;
    // let socialY = social.getBoundingClientRect().y;
    // let partnerY = partner.getBoundingClientRect().y;
    let internY = intern.getBoundingClientRect().y;
    let contactY = contact.getBoundingClientRect().y;
    // console.log("home => " + homeY);
    // console.log("social => " + socialY);
    // console.log("partner => " + partnerY);
    // console.log("intern=> " + internY);
    // console.log("contact => " + contactY);
    //console.log(home.getBoundingClientRect().y)
    //let intern = document.querySelector("#internAnchor");
    //let contact = document.querySelector("#contactAnchor");
    // let scroll = window.scrollY;
    // if (homeY > 200) {
    //   homeA.classList.remove("active");
    //   // socialA.classList.remove("active");
    //   // partnerA.classList.remove("active");
    //   internA.classList.remove("active");
    //   contactA.classList.remove("active");
    // } else if (homeY <= 200 && socialY > 330) {
    //   internA.classList.remove("active");
    //   contactA.classList.remove("active");
    //   // socialA.classList.remove("active");
    //   // partnerA.classList.remove("active");
    //   homeA.classList.add("active");
    // } else if (socialY <= 330 && partnerY > 300) {
    //   internA.classList.remove("active");
    //   contactA.classList.remove("active");
    //   // socialA.classList.add("active");
    //   // partnerA.classList.remove("active");
    //   homeA.classList.remove("active");
    // } else if (partnerY <= 300 && internY > 300) {
    //   internA.classList.remove("active");
    //   contactA.classList.remove("active");
    //   socialA.classList.remove("active");
    //   partnerA.classList.add("active");
    //   homeA.classList.remove("active");
    // } else if (internY <= 300 && contactY > 300) {
    //   contactA.classList.remove("active");
    //   socialA.classList.remove("active");
    //   partnerA.classList.remove("active");
    //   homeA.classList.remove("active");
    //   internA.classList.add("active");
    // } else if (contactY <= 300) {
    //   socialA.classList.remove("active");
    //   partnerA.classList.remove("active");
    //   homeA.classList.remove("active");
    //   internA.classList.remove("active");
    //   contactA.classList.add("active");
    // }
    if (homeY > 200) {
      homeA.classList.remove("active");
      internA.classList.remove("active");
      contactA.classList.remove("active");
    } else if (homeY <= 200 && internY > 200) {
      internA.classList.remove("active");
      contactA.classList.remove("active");
      homeA.classList.add("active");
    } else if (internY <= 200 && contactY > 500) {
      homeA.classList.remove("active");
      contactA.classList.remove("active");
      internA.classList.add("active");
    } else if (contactY <= 500) {
      homeA.classList.remove("active");
      internA.classList.remove("active");
      contactA.classList.add("active");
    }
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
          <div className="col menu">
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
              <li>
                {this.state.clicked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                    onClick={this.handleButtonHeart}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-heart bi-heart1"
                    viewBox="0 0 16 16"
                    type="button"
                    onClick={this.handleButtonHeart}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="header_like">
          <div className="header_like_heart">
            <div className="heart-icon">
              
            </div>
          </div>
        </div> */}
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

import React, { Component } from "react";
import digitalexpertlogo from "../logo/digital-expert-logo.png";
import logo from "../logo/logo.png";

export default class Header extends Component{

    render(){
        return(
            <div className="header row">
                <div className="col ">
                    <img className="header--logo " src={digitalexpertlogo} alt="golomt_logo"/>
                </div>
                <div className="col">
                <ul >
                        <li><a className="active" href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                        <li className="header_li"><img href="#golomt" src={logo}   className="header_li_logo"/></li>
                </ul>
                </div>
            </div>
        )
    }
}
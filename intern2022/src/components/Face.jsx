import React from "react";
import Header from "./Header";
import digitallogo from "../logo/digital-logo.png";
import ScrollReveal from "scrollreveal";

const slidUp = {
  distance: "50px",
  origin: "bottom",
  duration: 1500,
  interval: 500,
  reset: true,
};
export function Face() {
  ScrollReveal().reveal(".face", slidUp);

  return (
    <div className="face">
      <Header />
    </div>
  );
}

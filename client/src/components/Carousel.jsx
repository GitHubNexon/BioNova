import React from "react";
import "../components/styles/Hero.css";
import "../components/custom/background.css";
import "../components/custom/card.css";
import "../components/styles/Carousel.scss";
import images from "../utils/Carousel"; // Import the image module

const logos = [
  { src: images.lg1, alt: "Microsoft Logo" },
  { src: images.lg2, alt: "AWS Logo" },
  { src: images.lg3, alt: "Broadcom Logo" },
  { src: images.lg4, alt: "Cisco Logo" },
  { src: images.lg5, alt: "Google Logo" },
  { src: images.lg6, alt: "IBM Logo" },
  { src: images.lg7, alt: "Intel Logo" },
  { src: images.lg8, alt: "Adobe Logo" },
  { src: images.lg9, alt: "OpenAI logo" },
  { src: images.lg10, alt: "Android Logo" },
  { src: images.lg11, alt: "GitHub Logo" },
  { src: images.lg12, alt: "Nvidia Logo" },
  { src: images.lg13, alt: "Autodesk Logo" },
  { src: images.lg14, alt: "Meta logo" },
  { src: images.lg15, alt: "Oracle Logo" },
];

const Carousel = () => {
  return (
    <div className="relative h-full w-full">
      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="slide mx-8 flex justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
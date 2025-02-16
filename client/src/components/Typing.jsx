import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <p
      className="md:text-6xl text-[0.8em] tracking-tight"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <TypeAnimation
        sequence={[
          "FULL STACK DEVELOPER",
          1000,
          "GRAPHIC AND VISUAL DESIGNER",
          1000,
          "ETHICAL HACKER",
          1000,
          "AI DEVELOPER",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        className="font-bold italic"
      />
    </p>
  );
};

export default Typing;

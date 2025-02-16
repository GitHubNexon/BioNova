import React from "react";
import "../styles/Card1.css";

const Card1 = ({ title, content, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card Icon" className="object-cover h-screen w-full" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{content}</p>
      </div>
    </div>
  );
};

export default Card1;

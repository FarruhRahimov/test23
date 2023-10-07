import React from "react";
import s from "./style.module.css";


const Card = ({ text }) => {
  return (
    <div className={s.card}>
      <p>{text}</p>
    </div>
  );
};

export default Card;

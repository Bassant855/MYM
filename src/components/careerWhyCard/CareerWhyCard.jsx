/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import classes from "./CareerWhyCard.module.css";

const CareerWhyCard = ({ title, img, text, imgSmall }) => {
    return (
        <div className={`${classes["career-why__card"]}`}>
            <h3 className={`${classes["career-why__card--title"]}`}>{title}</h3>
            <div
                className={`${classes["career-why__card--img"]} ${
                    imgSmall ? classes["career-why__card--img-small"] : ""
                }`}
            >
                <img src={img} alt="image card" />
            </div>
            <p className={`${classes["career-why__card--text"]}`}>{text}</p>
        </div>
    );
};

export default CareerWhyCard;

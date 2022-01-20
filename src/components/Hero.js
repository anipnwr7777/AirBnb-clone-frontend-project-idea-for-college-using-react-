import React from "react";
import mainImage from "../images/Group 77.png"

export default function Hero() {
    return (
        <div className="hero--wrapper">
            <div className="hero--img-wrapper">
                <img src={mainImage} className = "hero--image" alt=""/>
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    )
}
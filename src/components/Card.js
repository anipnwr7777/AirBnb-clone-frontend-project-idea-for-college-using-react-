import React from "react";
import star from "../images/Star 1.png"


export default function Card(props) {
    const imgAddress = require("../images/" + props.coverImg)

    return (
        <div className = "card--wrapper">
            <img src={imgAddress} className = "card--main-image" alt=""/>
            <div>
                <img src={star} className="card--star" alt=""/>
                <span>
                   &nbsp; {props.stats.rating} &nbsp;
                </span>
                <span className="card--review-count">
                    ({props.stats.reviewCount}) &bull; {props.location}
                </span>

            </div>
            <p className="card--desc">{props.title}</p>
            <div>
                <span className="card--price">From ${props.price}</span>
                <span>/ person</span>
            </div>
        </div>
    )
}
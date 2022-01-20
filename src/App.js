import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"
import arr from "./data.js";

export default function App() {
    const cards = arr.map(item => {
        return (
            <Card
                id = {item.id}
                {...item}
            />
        )
    })

    console.log(cards)

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card--content-container">{cards}</div>
            <footer></footer>
            
        </div>
    )
}
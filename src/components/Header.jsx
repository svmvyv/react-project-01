import React from "react";
import reactLogo from "../assets/react.svg"

export default function Header() {
    return (
            <nav className="navbar">
        <div><img src={reactLogo}/>
            <h3>ReactFacts</h3></div>
            <h5>React Course - Project 1</h5>
        </nav>
    )
}
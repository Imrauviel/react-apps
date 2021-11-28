import React from "react";
import camera from '../camera.png'

export default function Header() {
    return (
        <nav>
            <img src={camera} className="nav--icon" />
            <h4 className="nav--title">Ranking of worst Nolan's Movies </h4>
        </nav>
    )
}

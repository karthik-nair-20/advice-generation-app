import React from "react";
import dice from "../images/icon-dice.svg"


export default function Dice(porps) {

    return (
        <div className=" bg-lime-600 w-10 rounded-full p-3 mx-auto my-4 hover:bg-lime-400" onClick={porps.new}>
            <img className="block mx-auto" src={dice} alt="dice_svg" />
        </div>
    )
}
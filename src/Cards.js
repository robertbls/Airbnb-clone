import React from "react";
import Card from "./Card"
import {AiFillStar} from "react-icons/ai";
import card1 from "./heroimg/card1.png"
import card2 from "./heroimg/card2.png"
import card3 from "./heroimg/card3.png"

export default function Cards() {
    return (
        <>
            <div className="cards">
                <Card
                    img={card1}
                />
                <Card
                    img={card2}
                />
                <Card
                    img={card3}
                />
            </div>
        </>
)
}

// <div className="card_content">
//     <img className="card" src={require("./heroimg/card1.png")}/>
//     <p className="card_rating"><AiFillStar className="star"/> 5.0 <span className="grey_rating">(6) USA</span></p>
//     <p className="card_description">Life lessons with Katie Zaferes</p>
//     <p className="card_price"> <span className="bold"> From $136 </span> /person</p>
//     <p></p>
// </div>
import React from "react";
import {AiFillStar} from 'react-icons/ai';

export default function Card(props) {
    return (
        <>
            <div className="card_content">
                <img className="card" src={props.img}/>
                <p className="card_rating"><AiFillStar className="star"/> 5.0 <span className="grey_rating">(6) USA</span></p>
                <p className="card_description">Life lessons with Katie Zaferes</p>
                <p className="card_price"> <span className="bold"> From $136 </span> /person</p>
                <p></p>
            </div>
        </>
    )
}
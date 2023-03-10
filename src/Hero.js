import React from "react";


export default function Hero () {
    return (
    <>
        <section className="hero_section">

                {/*<img className="hero_pic one" src={require("./heroimg/pic2.png")} alt="happy"/>*/}
                {/*<img className="hero_pic two" src={require("./heroimg/pic1.png")}/>*/}
                {/*<img className="hero_pic three" src={require("./heroimg/pic3.png")}/>*/}
                {/*<img className="hero_pic four" src={require("./heroimg/pic4.png")}/>*/}
                {/*<img className="hero_pic five" src={require("./heroimg/pic5.png")}/>*/}
                {/*<img className="hero_pic six" src={require("./heroimg/pic6.png")}/>*/}
                {/*<img className="hero_pic seven" src={require("./heroimg/pic7.png")}/>*/}
                <img src={require("./heroimg/hero_pic.png")} className="hero_pics"/>
            <h1 className="h1_section">Online Experiences</h1>
            <p className="p_section">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>

    </>
          )
}


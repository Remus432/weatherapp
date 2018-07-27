import React from "react";
import pinpoint from "./placeholder.png";
import umbrella from "./umbrella.png";

const Weather = ({ current, location, showLocation }) => {
    return (
        <div className="container">

        <div className="Weather" target="_blank">
            <h1 className="Weather__country">{location.city}, {location.country}</h1>
            <div className="Weather__icons">

                <div className="Weather__checkbox Weather__checkbox--1">
                    <input type="radio" id="location" name="data"/>
                    <label htmlFor="location" onClick={showLocation}>
                        <img className="Weather__icon Weather__icon--1" src={pinpoint} alt="Pin point"/>
                    </label>    
                </div>

                <div className="Weather__checkbox Weather__checkbox--2">
                    <input type="radio" id="weather" name="data"/>
                    <label htmlFor="weather">
                        <img className="Weather__icon Weather__icon--1" src={umbrella} alt="Pin point"/>
                    </label>   
                </div>

            </div>
        </div>
            <div className="Weather__card">
                dads
            </div>
        </div>
    )
}

export default Weather;
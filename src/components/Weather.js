import React from "react";

const Weather = props => (
    <div>
        <h2>{props.city}</h2>
        <h1>{props.temperature}</h1>
        <h5>Currently: {props.description}</h5>
        {props.error && <h5>{props.error}</h5>}
    </div>
)
   


export default Weather; 
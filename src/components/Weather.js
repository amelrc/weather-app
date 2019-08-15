import React from "react";

const Weather = props => (

    <div className={`weather ${props.className} `}>
        <h2 className='city'>{props.city}</h2>
        <h1 className='temperature'>{props.temperature}&#176;</h1>
        <h5 className='description'>Currently: {props.description}</h5>
        {props.error && <h5 className='error'>{props.error}</h5>}
    </div>
)

export default Weather; 
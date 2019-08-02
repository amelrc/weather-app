import React from "react";


const Form = props => (
    <form autoComplete='off' className='form' onSubmit={props.getWeather}>
        <input className='input' type="text" name="city" placeholder="Choose City"/>
        <button className='button'>Get Weather</button>
    </form>
)
export default Form; 
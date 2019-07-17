import React from "react";

const Background = props => {

    let currently;
    console.log(props)
    switch (props.weather) {
        case 'Clouds':
          currently = "../img/why-you-can-smell-rain.jpeg";
          break;
        case 'clear':
          currently = "Monday";
          break;
        case 2:
           currently = "Tuesday";
          break;
        case 3:
          currently = "Wednesday";
          break;
        case 4:
          currently = "Thursday";
          break;
        case 5:
          currently = "Friday";
          break;
        default:
          currently = "blank";

      }
      console.log(currently)

   return (
    <div className='background' style={{backgroundImage: "url(" + currently + ")"}} >
        <h1>Hello Weather</h1>
        {props.children}
    </div>
   ) 
}

export default Background; 
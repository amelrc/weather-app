import React from "react";

const Background = props => {
  let imageBackground = {
   backgroundImage: props.image,
  };
  console.log('gagag', props.image)
 
  return (
  <div style={ imageBackground } className='background__image'>
      {props.children}
  </div>
  ) 
}

export default Background; 
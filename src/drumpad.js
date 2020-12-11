import React, { useState, useEffect } from 'react';
import './res/stylesheet/style.css';

const DrumPad = (props) => {



  return (
    <React.Fragment>

     <button 
     className="drum-pad" 
     id={props.clipId}
     name={props.id}
     onClick={props.setPlay}
     keycode={props.keycode}
     >
    <audio
      className='clip'
      id={props.label}
      src={props.clip}
      
     />
     {props.label}
     </button>
    </React.Fragment>
  )
};
export default DrumPad;
//
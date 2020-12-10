import React,{useState} from 'react';
import './res/stylesheet/style.css';

const DrumPad = (props) => {
  
  
  return (
    <React.Fragment>
    <div className="buttons">
     <button 
     className="drum-pad" 
     id={props.clipId}
     name={props.id}
     onClick={props.onClick}
     onKeyUp={props.keyCode}
     >
    <audio
      className='clip'
      id={props.label}
      src={props.clip}
     />
     {props.label}
     </button>
    </div>
    </React.Fragment>
  )
};
export default DrumPad;
//
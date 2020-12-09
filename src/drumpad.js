import React from 'react';
import './res/stylesheet/style.css';

const DrumPad = (props) => {
  return (
    <React.Fragment>
    <div className="buttons">
     <button 
     className="drum-pad" 
     id={props.id}>
    
    <audio
      className='clip'
      id={props.id}
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
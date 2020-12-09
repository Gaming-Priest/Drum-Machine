import React from 'react';
import './res/stylesheet/style.css'
const Tools = (props) => {
  return (
    <div className="tools">
      <div className="toggler">
      <div onClick={props.powerDrum} style={props.powerStyle} className="switch" ></div>
      </div>
      <div id="display">{props.display}</div>
      
      <input
      className="volume-progress"
      type="range"
      max="1"
      min="0"
      step="0.01"
      />
      
      <div id="switch-drum"
      className="toggler">
      <div onClick={props.switchDrum} style={props.faceStyle} className="switch"></div>
      </div>
      </div>
  )

}
export default Tools;
//
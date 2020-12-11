import React from 'react';
import './res/stylesheet/style.css'
const Tools = (props) => {
  return (
    <React.Fragment>
      <div>
        <h6 className="label">POWER</h6> 
        <div className="toggler">
        <div onClick={props.powerDrum} style={props.powerStyle} className="switch" ></div>
        </div>
      </div>
      <div id="display">{props.display}</div>
      
      <input
      className="volume-progress"
      type="range"
      onChange={props.adjustVol}
      max="1"
      min="0"
      step="0.01"
      value={props.volueVal}
      />
      <div>
    <h6 className="label">SETS</h6> 
      <div id="switch-drum"
      className="toggler">
      <div onClick={props.switchDrum} style={props.faceStyle} className="switch"></div>
      </div>
      </div>
    </React.Fragment>
  )

}
export default Tools;
//
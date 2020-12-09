import React from 'react';
import './res/stylesheet/style.css'
const Drum = (props) => {
  
  return (
    <div id="drum-machine">
    
    <div className="buttons">
     <button className="drum-pad" id="">Q</button>
     <button className="drum-pad" id="">W</button>
     <button className="drum-pad" id="">E</button>
     <button className="drum-pad" id="">A</button>
     <button className="drum-pad" id="">S</button>
     <button className="drum-pad" id="">D</button>
     <button className="drum-pad" id="">Z</button>
     <button className="drum-pad" id="">X</button>
     <button className="drum-pad" id="">C</button>

    </div>
    <div className="tools">
    
    <div className="toggler"><div className="switch"></div></div>
    <div id="display"></div>
    <div id="">volume</div>
    <div className="toggler"><div className="switch"></div></div>
  
    </div>
    </div>
  )
}
export default Drum;
//  
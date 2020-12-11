import React, { useState, useEffect } from "react";
import DrumPad from './drumpad';
import Tools from './tools'
import { setOne, setTwo } from './assets'
import './res/stylesheet/style.css'


const Drum = (props) => {

  //STATES DECLARATIONS 
  const [keyData, setKeyData] = useState({
    currentSet: [],
    display: '',
    CurrentId: ''
  })
  const [display, setDisplay] = useState({ value: String.fromCharCode(160) })

  const [power, setPower] = useState({
    style: { left: '28px' },
    status: true
  })
  const [volumeVal, setVolumeVal] = useState({
    currentVal: 0.4
  })

  const [style, setStyle] = useState({
    left: '0px'
  })
  const [keys, setKeys] = useState({ code: 0 })

  //SWITCH BETWEEN DRUMS SETS

  function switchDrum(e) {
    if (style.left === '28px') {
      setStyle({
        left: '0px'
      })
      setKeyData({
        currentSet: setOne,
        display: 'Heater kit',
        CurrentId: 'Heater kit'
      })
      setDisplay({
        value: keyData.display
      })

    } else {
      setStyle({
        left: '28px'
      })
      setKeyData({
        currentSet: setTwo,
        display: 'Smooth piano kit',
        CurrentId: 'Smooth piano kit'
      })
      setDisplay({
        value: keyData.display
      })
    }
  };

  // SET DRUM POWER SWITCH
  function powerDrum(e) {
    e.preventDefault()
    if (power.style.left === '28px') {
      setPower({
        style: { left: '0px' },
        status: false
      })
    } else {
      setPower({
        style: { left: '28px' },
        status: true
      })
    }
  };

  //SET PLAY FUNCTION
  
  document.addEventListener('keydown', handleKey)
  function handleKey(event){
    if (event.key === String.fromCharCode(keys.code)) {
  setPlay(event);
}
}
  function setPlay(e) {
    const C = e.target.getAttribute('id');
    const ID = e.target.innerText
    const CODE = e.target.getAttribute('keycode')
    console.log(String.fromCharCode(keys.code));
    const SOUND = document.getElementById(ID)
    setKeys({ code: CODE })
    if (power.status) {
      setDisplay({
        value: C
      })

      SOUND.play();
      SOUND.volume = volumeVal.currentVal
    }
    String.fromCharCode(160)
  };

  //HANDLE VOLUME ADJUSTMENT; 

  const adjustVol = (e) => {
    let val = e.target.value
    setVolumeVal({
      currentVal: val
    })
    setDisplay({
      value: 'volume: ' + Math.floor(val * 100) + '%'
    })
  };

  //FIRES WHEN COMPONENTS MOUNTS

  useEffect(() => {
    switchDrum()
  }, []);

  return (
    <div id="drum-machine">
      <div className="drum-pad-comtainer">
        {keyData.currentSet.map(i=>{
          return( 
          <DrumPad 
          clip={i.url}
          key={i.keyTrigger}
          label={i.keyTrigger}
          clipId={i.id}
          setPlay={setPlay}
          keycode={i.keyCode}
           />
      )})}
    </div> 
    <div className="tools">
     <Tools
      powerDrum = { powerDrum }
      switchDrum = { switchDrum }
      powerStyle = { power.style }
      faceStyle = { style }
      volueVal={volumeVal.currentVal}
      adjustVol={adjustVol}
      display={power.status?display.value:String.fromCharCode(160)}
    />
    </div>
    </div>
  )
}
export default Drum;
//  
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

    //CONTROLS METHODS AND SELECT DRUM FACE

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

    function setPlay(e) {
      e.preventDefault()
      const C = e.target.getAttribute('id');
      const ID = e.target.innerText
      const SOUND = document.getElementById(ID)
      if (power.status) {
        setDisplay({
          value: C
        })
        SOUND.play();
        SOUND.volume = volumeVal.currentVal
      }
      String.fromCharCode(160)
    };
    const adjustVol = (e) => {
      let val = e.target.value
      setVolumeVal({
        currentVal: val
      })
      setDisplay({
        value: 'volume: ' + Math.floor(val * 100) + '%'
      })
      setTimeout(() => {
        setDisplay({
          value: String.fromCharCode(160)
        }, 3000)
      })
    }

    // const handleKeyUp = (e) => {
    //   let ID = e.target.innerText
    // const trigger =  ID.addEventListener(keyUp, event =>{
    //     event.keyCode === ''
    //   })
       
    // }
      
      useEffect(() => {
        switchDrum()
      }, [])


      return (
        <div id="drum-machine">
  
    { keyData.currentSet.map(i=>{
      return( <DrumPad 
       clip={i.url}
       key={i.keyTrigger}
       label={i.keyTrigger}
       clipId={i.id}
       id={i.keyTrigger}
       onClick={setPlay}
       keyCode={''}
       />)
    }) }
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
      )
    }
    export default Drum;
    //  
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

  const [power, setPower] = useState({
    style: { left: '0px' },
    status: false
  })

  const [style, setStyle] = useState({
    left: '28px'
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
      setTimeout(()=>{setKeyData({
        currentSet:setOne,
        display:'',
        CurrentId:'Heater kit'
      })},2000)
      
      
    } else {
      setStyle({
        left: '28px'
      })
      setKeyData({
        currentSet: setTwo,
        display: 'Smooth piano kit',
        CurrentId: 'Smooth piano kit'
      })
      setTimeout(()=>{setKeyData({
        currentSet:setTwo,
        display:'',
        CurrentId:'Smooth piano kit'
      })},2000)
    }
  }

  function powerDrum(e) {
    if (power.style.left === '0px') {
      setPower({
        style: { left: '28px' },
        status: false
      })
    } else {
      setPower({
        style: { left: '0px' },
        status: true
      })
    }
  }
  

  //Will render once conponent mounts
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
       id={keyData.CurrentId}
       />)
    }) }
<Tools 
powerDrum={powerDrum}
switchDrum={switchDrum}
powerStyle={power.style}
faceStyle={style}
display={keyData.display}
/>
    </div>
  )
}
export default Drum;
//  
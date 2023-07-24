import React from "react";
import { useState } from "react";

function Form(props) {
  const [trickName, setTrickName] = useState('')
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  function submitTricks(event) {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      trickName,
      stance, 
      obstacle,
      tutorial
    }
    console.log('NEWTRICK', newTrick)
    props.addTrick(newTrick)
    clearInput()
  }

  function clearInput() {
    setTrickName('')
    setStance('')
    setObstacle('')
    setTutorial('')
  }

  return (
    <form>
      <select value={stance} onChange={event => setStance(event.target.value)}>
        <option value='' disabled selected>choose your stance</option>
        <option value='regular'>regular</option>
        <option value='switch'>switch</option>
      </select>
      <input type='text' 
      placeholder='Name of Trick' value={trickName} onChange={event => setTrickName(event.target.value)}>
      </input>
      <select value={obstacle} onChange={event => setObstacle(event.target.value)}>
        <option value='' disabled selected>choose your obstacle</option>
        <option value='flatground'>flatground</option>
        <option value='ledge'>ledge</option>
        <option value='rail'>rail</option>
        <option value='stairs'>stairs</option>
        <option value='pool'>pool</option>
      </select>
      <input type='text'
      placeholder='Link to Tutorial' value={tutorial} onChange={event => setTutorial(event.target.value)}>
      </input>
      <button onClick={event => submitTricks(event)}>SEND IT!</button>
    </form>
  )
}

export default Form;
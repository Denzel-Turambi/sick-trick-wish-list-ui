import React from "react";
import { useState } from "react";

function Form() {
  const [trickName, setTrickName] = useState('')
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  return (
    <form>
      <select>
        <option value='' disabled selected>choose your stance</option>
        <option value='regular'>regular</option>
        <option value='switch'>switch</option>
      </select>
      <input type='text'
      placeholder='Name of Trick'>
      </input>
      <select>
        <option value='' disabled selected>choose your obstacle</option>
        <option value='flatground'>flatground</option>
        <option value='ledge'>ledge</option>
        <option value='rail'>rail</option>
        <option value='stairs'>stairs</option>
        <option value='pool'>pool</option>
      </select>
      <input type='text'
      placeholder='Link to Tutorial'>
      </input>
      <button>SEND IT!</button>
    </form>
  )
}

export default Form;
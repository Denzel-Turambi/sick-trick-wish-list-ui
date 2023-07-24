import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../../ApiCalls';
import CardContainer from '../CardContainer';
import Form from '../Form';

function App() {

  const [tricks, setTricks] = useState([])

  useEffect(() => {
    getData()
    .then(data => setTricks(data))
  }, [])

  function addTrick(newTrick) {
    console.log('addnewtrick', newTrick)
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <CardContainer className="card-container" tricks={tricks}/>
    </div>
  );
}

export default App; 

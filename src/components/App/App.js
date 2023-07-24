import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../../ApiCalls';
import Card from '../Card';
import CardContainer from '../CardContainer';

function App() {

  const [tricks, setTricks] = useState([])

  useEffect(() => {
    getData()
    .then(data => setTricks(data))
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <CardContainer className="card-container" tricks={tricks}/>
    </div>
  );
}

export default App; 

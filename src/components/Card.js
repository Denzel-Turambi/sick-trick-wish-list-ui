import React from "react";
import './Card.css'

function Card({name, obstacle, tutorial, id}) {
  
  return (
    <div id={id} className="single-card">
      <p id={id}>name: {name}</p>
      <p id={id}>obstacle: {obstacle}</p>
      <p id={id}>tutorial: {tutorial}</p>
    </div>
  )
}

export default Card;
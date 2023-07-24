import React from "react";
import CardContainer from "./CardContainer";

function Card({name, obstacle, tutorial, id}) {
  // console.log('name', name)
  console.log(name)
  return (
    <div id={id} className="single-card">
      <p id={id}>name: {name}</p>
      <p id={id}>obstacle: {obstacle}</p>
      <p id={id}>tutorial: {tutorial}</p>
    </div>
  )
}

export default Card;
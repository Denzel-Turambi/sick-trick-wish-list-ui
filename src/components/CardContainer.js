import React from "react";
import Card from "./Card";
import './CardContainer.css'

function CardContainer(props) {
  let trickCards = [];
  const tricksArray = props.tricks;

trickCards = tricksArray.map(trick => {
  return (
    <div>
      <Card
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    </div>
  )
})

return (
  <section className='card-container'>
    {trickCards}
  </section>
)

}

export default CardContainer;
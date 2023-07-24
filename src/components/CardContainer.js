import React from "react";
import Card from "./Card";

function CardContainer(props) {
  let trickCards = [];
  const tricksArray = props.tricks;
  console.log('PROPS', tricksArray)

trickCards = tricksArray.map(trick => {
  return (
    <div className='card'>
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
  <section>
    {trickCards}
  </section>
)

}

export default CardContainer;
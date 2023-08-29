import React from 'react'

const Cards = ({modifier }) => {
  const cardsClasses = `stytle_cards ${modifier ? `stytle_cards_${modifier}` : ''}`
  return (
    <div className={cardsClasses}>Cards</div>
  )
}

export default Cards
import React from 'react'

const Cards = ({modifier,children }) => {
  const cardsClasses = `stytle_cards ${modifier ? `stytle_cards_${modifier}` : ''}`
  return (
    <div className={cardsClasses}>{children}</div>
  )
}

export default Cards
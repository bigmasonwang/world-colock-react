import React from 'react'
import './NumberBox.scss'

const NumberBox = ({number}) => {

  return (
    <div className='NumberBox'>
      {number.length === 1 ? `0${number}` : number}
    </div>
  )
}

export default NumberBox

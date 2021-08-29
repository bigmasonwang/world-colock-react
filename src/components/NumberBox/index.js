import React from 'react'
import './NumberBox.scss'

const NumberBox = ({number}) => {
  return (
    <div className='NumberBox'>
      {number}
    </div>
  )
}

export default NumberBox

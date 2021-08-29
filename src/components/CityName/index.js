import React from 'react';
import './CityName.scss'

const CityName = ({cityName}) => {
  return (
    <div className='CityName'>
      <h2>{cityName}</h2>
    </div>
  )
}

export default CityName

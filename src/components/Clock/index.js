import React from 'react';
import CityName from '../CityName';
import CurDate from '../CurDate';
import CurTime from '../CurTime';
import './Clock.scss';

const Clock = ({ cityName, timeZone }) => {
  return (
    <div className='Clock'>
      <CityName cityName={cityName} />
      <CurDate timeZone={timeZone} />
      <CurTime timeZone={timeZone} />
    </div>
  );
};

export default Clock;

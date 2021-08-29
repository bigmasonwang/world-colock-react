import React, { useState, useEffect } from 'react';
import NumberBox from '../NumberBox';
import './CurTime.scss';

const CurTime = ({ timeZone }) => {
  const [curHour, setCurHour] = useState('');
  const [curMinute, setCurMinute] = useState('');
  const [curSecond, setCurSecond] = useState('');
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurHour(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone,
          hour: 'numeric',
          hour12: false,
        }).format(date)
      );
      setCurMinute(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone,
          minute: 'numeric',
        }).format(date)
      );
      setCurSecond(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone,
          second: 'numeric',
        }).format(date)
      );
    }, 1000);
  }, [timeZone]);
  return (
    <div className='CurTime'>
      <NumberBox number={curHour} /> :
      <NumberBox number={curMinute} /> :
      <NumberBox number={curSecond} />
    </div>
  );
};

export default CurTime;

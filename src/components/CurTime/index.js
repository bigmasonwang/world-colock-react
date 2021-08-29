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
      const option = {
        timeZone: timeZone,
        hour12: false,
      };
      setCurHour(
        new Intl.DateTimeFormat('en-US', {
          ...option,
          hour: '2-digit',
        }).format(date)
      );
      setCurMinute(
        new Intl.DateTimeFormat('en-US', {
          ...option,
          minute: '2-digit',
        }).format(date)
      );
      setCurSecond(
        new Intl.DateTimeFormat('en-US', {
          ...option,
          second: '2-digit',
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

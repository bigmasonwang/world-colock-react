import React, { useState, useEffect } from 'react';
import './CurDate.scss'

const CurDate = ({timeZone}) => {
    const [curDate, setCurDate] = useState('');

    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        const dateString = new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone,
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })
          .format(date)
          .replaceAll(',', '');
        setCurDate(dateString);
      }, 1000);
    }, [timeZone]);
  return (
    <div className='CurDate'>
      {curDate}
    </div>
  )
}

export default CurDate

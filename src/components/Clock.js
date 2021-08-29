import React, { useState, useEffect } from 'react';

const Clock = ({ cityName, timeZone }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('')

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
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      }).format(date);

      setDate(dateString);
      setTime(timeString);
    }, 1000);
  }, [timeZone]);

  return <div>
    <h2>{cityName}</h2>
    <p>{date}</p>
    <p>{time}</p>
  </div>;
};

export default Clock;

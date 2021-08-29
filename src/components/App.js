import React from 'react';
import Clock from './Clock';


function App() {
  return (
    <div className='App'>
      <Clock cityName='Sydney' timeZone='Australia/Sydney' />
      <Clock cityName='Seoul' timeZone='Asia/Seoul' />
      <Clock cityName='London' timeZone='Europe/London' />
      <Clock cityName='New York' timeZone='America/New_York' />
    </div>
  );
}

export default App;

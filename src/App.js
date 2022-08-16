import './App.css';
import React from 'react';
import Form from './components/Form';
import InfoHeader from './components/InfoHeader';
import TempToDay from './components/TempToDay';
import PogodaOnXDay from './components/PogodaOnXDay';





const App = (props) => {



  return (
    <div className="App">
      <div className='header-background-image'>
        <div className='header'>
          <InfoHeader state={props.state} />
          <Form weaterMethode={props.gettngWeather} state={props.state} />
        </div>
        <TempToDay state={props.state} />
      </div>

      <div className="main">
        <div className='main__pogodaTime'>Прогноз на 10 дней</div>

        <PogodaOnXDay state={props.state} />
      </div>
    </div>
  );
}


export default App;
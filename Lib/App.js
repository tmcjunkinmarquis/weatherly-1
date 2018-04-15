import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
import data from '../Data/mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHr from './SevenHr';
import TenDay from './TenDay'
import { currWeatherCleaner, sevenHrCleaner, tenDayCleaner } from './Cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: []
    };

    this.cleanData = this.cleanData.bind(this);

  }

  cleanData() {
    const currWeatherObj = currWeatherCleaner(data);
    const hourArray = sevenHrCleaner(data);
    const dayArray = tenDayCleaner(data)
    // const nextState = Object.assign({}, { currWeatherObj: currWeatherClean }, { hourArray: sevenHrClean } );
    // const { currWeatherObj, hourArray } = nextState;

    this.setState({ currWeatherObj, hourArray, dayArray })
  }

  componentDidMount() {
    this.cleanData();//run our JSON.data throuhg our cleaner in this functionality   
  }

  render() {
    console.log(this.state)
    return (
      <div className="main-page">
        <div className="top-section">
          <CurrentWeather
            currWeatherObj={this.state.currWeatherObj}
          // currTemp={this.state.currTemp}
          // currExpectHigh={this.state.currExpectHigh}
          // currExpectLow={this.state.currExpectLow}
          // currDate={this.state.currDate}
          // currWeatherIcon={this.state.currWeatherIcon}
          // currWeatherDescrip={this.state.currWeatherDescrip}
          />
        </div>
        <div className="bottom-section">
          <SevenHr
            hourArray={this.state.hourArray}
          />
          <TenDay
            dayArray={this.state.dayArray}
          />
        </div>
      </div>
    );
  }
}

export default App;
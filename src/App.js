import React, { Component } from 'react';
import Weather from "./components/Weather";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        cloud: 0,
        is_day: 0,
        temp_c: 0
      },
      location: {
        country: "",
        localtime: "",
        city: "",
        region: ""
      }
    }
  }


  getCity = (e) => {
    console.log(e.target.value);
    fetch(`http://api.apixu.com/v1/current.json?key=eac7ca1087144cc6b1c130638171606&q=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const current = data.current;
        const location = data.location;

        this.setState({
          current: {
            cloud: current.cloud,
            is_day: current.is_day,
            temp_c: current.temp_c
          },
          location: {
            country: location.country,
            localtime: location.localtime,
            city: location.name,
            region: location.region
          },
          switcher: false
        })

        console.log(this.state.location);
      })
  }

  showLocation = (e) => {
  
  }

  render() {
    return (
      <div className="App">
        <div className="App-form">
          <input className="App__input" onChange={this.getCity} type="text" placeholder="Enter city name" name="city"/>
          <label className="App__label" htmlFor="city">Enter city name</label>
        </div>
        <Weather current={this.state.current} location={this.state.location} showLocation={this.showLocation}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

export default class MainContent extends Component {
  render() {
    const real = this.props.data;
    return (
      <React.Fragment>
        <div className="col-1">
          <div className="data">
            <label>Temperature</label>
            <span>
              {real.tempC} <sup>o</sup>C
            </span>
          </div>
          <div className="data">
            <label>MaxTemp</label>
            <span>
              {real.maxtempC} <sup>o</sup>C
            </span>
          </div>
          <div className="data">
            <label>MinTemp</label>
            <span>
              {real.mintempC} <sup>o</sup>C
            </span>
          </div>
        </div>
        <div className="col-2">
          <div className="data">
            <label>Pressure</label>
            <span>{real.pressure} atm</span>
          </div>
          <div className="data">
            <label>Precipitate</label>
            <span>{real.precipMM} mm</span>
          </div>
          <div className="data">
            <label>Wind Speed</label>
            <span>{real.windspeedKmph} kmph </span>
          </div>
        </div>

        <div className="col-3">
          <div className="data">
            <label>Humidity</label> <span>{real.humidity}%</span>
          </div>
          <div className="data">
            <label>Dew Point</label>
            <span>
              {real.DewPointC} <sup>o</sup>C
            </span>
          </div>
          <div className="data">
            <label>Cloud Cover</label>
            <span>{real.cloudcover}</span>
          </div>
        </div>
        <div className="Button" onClick={() => this.props.handleClick()}>
          Show Predictions
        </div>
      </React.Fragment>
    );
  }
}

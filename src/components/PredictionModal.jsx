import React, { Component } from "react";

export default class PredictionModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 0
    };
  }
  handleNext = () => {
    this.setState(prevState => ({
      day: prevState.day + 1
    }));
  };
  handlePrev = () => {
    this.setState(prevState => ({
      day: prevState.day - 1
    }));
  };

  render() {
    const prediction = this.props.data[this.state.day];
    console.log(prediction);
    const date = new Date();
    date.setDate(date.getDate() + this.state.day);
    console.log(date);
    return (
      <div className="modal-container">
        <header className="Header">
          <div className="content">
            {/* <h1>What's to Come</h1> */}
            <h1>{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</h1>
          </div>
        </header>
        <main className="body">
          <div className="body-container">
            <div className="col-1">
              <div className="data">
                <label>Temperature</label>
                <span>
                  {Math.round(prediction.tempC, 2)} <sup>o</sup>C
                </span>
              </div>
              <div className="data">
                <label>MinTemp</label>
                <span>
                  {Math.round(prediction.mintempC, 2)} <sup>o</sup>C
                </span>
              </div>
              <div className="data">
                <label>MaxTemp</label>
                <span>
                  {Math.round(prediction.maxtempC, 2)} <sup>o</sup>C
                </span>
              </div>
            </div>
            <div className="col-2">
              <div className="data">
                <label>Pressure</label>
                <span>{Math.round(prediction.pressure, 2)} atm</span>
              </div>
              <div className="data">
                <label>Humidity</label>
                <span>{Math.round(prediction.humidity, 2)}%</span>
              </div>
              <div className="data">
                <label>DewPointC</label>
                <span>
                  {Math.round(prediction.DewPointC, 2)} <sup>o</sup>C
                </span>
              </div>
            </div>
            {/* <div className="row-2">We recommend {"Temp"}</div> */}
          </div>
        </main>
        <footer className="footer">
          <div className="Button" onClick={() => this.props.handleClose()}>
            Close
          </div>
          <div
            className="Button"
            onClick={() => (this.state.day === 0 ? null : this.handlePrev())}
          >
            Prev
          </div>
          <div
            className="Button"
            onClick={() => (this.state.day === 2 ? null : this.handleNext())}
          >
            Next
          </div>
        </footer>
      </div>
    );
  }
}

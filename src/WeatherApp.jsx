import React, { Component } from "react";
import Window from "./components/Window";
import Splash from "./components/Splash";
import axios from "axios";

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    };
  }
  componentDidMount() {
    axios
      .get("https://weather-prediction-server.herokuapp.com/")
      .then(response => {
        const data = response.data;
        this.setState({
          isLoading: false,
          data: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTheme() {
    const hr = new Date().getHours();
    let theme;
    if (hr >= 6 && hr <= 11) {
      theme = "morning";
    } else if (hr > 11 && hr < 16) {
      theme = "afternoon";
    } else if (hr >= 16 && hr < 19) {
      theme = "evening";
    } else {
      theme = "night";
    }
    return theme + "-theme";
  }
  render() {
    const theme = this.handleTheme();
    const { isLoading } = this.state;
    let ui = null;
    if (isLoading) {
      ui = (
        <div>
          <Splash />
        </div>
      );
    } else {
      ui = (
        <div className={theme}>
          <Window data={this.state.data} theme={theme} />
        </div>
      );
    }
    return <React.Fragment>{ui}</React.Fragment>;
  }
}

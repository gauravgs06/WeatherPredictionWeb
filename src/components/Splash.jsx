import React, { Component } from "react";
import Lottie from "react-lottie";
import AppLoadingAnimation from "../assets/lottie/splash.json";
import cloud from "../assets/lottie/images/cloud.png";
import bg from "../assets/lottie/images/bg.png";

export default class Splash extends Component {
  render() {
    AppLoadingAnimation.assets[0].u = "";
    AppLoadingAnimation.assets[0].p = cloud;
    AppLoadingAnimation.assets[1].u = "";
    AppLoadingAnimation.assets[1].p = bg;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: AppLoadingAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div className="splash">
        <Lottie options={defaultOptions}  />
      </div>
    );
  }
}

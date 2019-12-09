import React, { Component } from "react";
import MainContent from "./MainContent";
import Modal from "./Modal";
import PredictionModal from "./PredictionModal";

export default class Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  modalShow = () => {
    this.setState({
      showModal: true
    });
  };

  modalHide = () => {
    this.setState({
      showModal: false
    });
  };
  render() {
    const { prediction, real } = this.props.data;
    const modal = this.state.showModal ? (
      <Modal theme={this.props.theme}>
        <div className="modal">
          <PredictionModal data={prediction} handleClose={this.modalHide} />
        </div>
      </Modal>
    ) : null;

    return (
      <div className="GridContainer">
        <div className="TitleBarConatainer"></div>
        <div className="AnimationContainer">
          <div>ML Based Weather Prediction</div>
          <div className="button-panel">
            <button className="Button"></button>
          </div>
        </div>
        <div className="ContentContainer">
          <div className="MainContent">
            <MainContent data={real} handleClick={this.modalShow} />
          </div>
        </div>
        {modal}
      </div>
    );
  }
}

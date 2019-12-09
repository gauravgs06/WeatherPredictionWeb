import { Component } from "react";
import ReactDOM from "react-dom";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.modalRoot = document.getElementById("modal-root");
    this.element = document.createElement("div");
    this.element.classList.add(this.props.theme);
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

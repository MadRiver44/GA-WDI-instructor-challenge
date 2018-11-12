import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Modals are a perfect use case for React.portals, look here...
// https://reactjs.org/docs/portals.html

class Modal extends Component {
  render() {
    const { isOpen, selector, ...rest } = this.props;
    const element = document.querySelector(selector);
    if (!isOpen || !element) return null;

    return ReactDOM.createPortal(<div {...rest}>{this.props.children}</div>, element);
  }
}

export default Modal;

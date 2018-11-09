import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const { isOpen, selector, ...rest } = this.props;
    const element = document.querySelector(selector);
    if (!isOpen || !element) return null;

    return ReactDOM.createPortal(<div {...rest}>{this.props.children}</div>, element);
  }
}

export default Modal;

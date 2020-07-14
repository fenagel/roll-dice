import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
  render() {
    return (
      <i className={`Die fas fa-dice-${this.props.num} ${this.props.rolling && "shaking"}`}></i>
    );
  }
}

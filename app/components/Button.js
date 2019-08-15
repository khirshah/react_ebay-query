import React, { Component} from "react";
import "./button.css";

export default class Button extends Component{
  render() {
    return (
      <button onClick={this.props.onclick}>{this.props.label}</button>
      )
  } 
}
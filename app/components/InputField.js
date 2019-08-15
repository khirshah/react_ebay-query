import React, { Component} from "react";
import "./inputField.css";

export default class InputField extends Component{
  render() {
    return (
      <input placeholder={this.props.placeholder}></input>
      )
  } 
}
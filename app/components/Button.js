//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./button.css";

//---------------------- COMPONENT -------------------------------
export default class Button extends Component{
  render() {
    return (
      <button onClick={this.props.onclick}>{this.props.label}</button>
      )
  } 
}
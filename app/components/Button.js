//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {PureComponent} from "react";

//------------------------- styles --------------------------------
import styles from "./button.css";

//---------------------- COMPONENT -------------------------------
export default class Button extends PureComponent{
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onclick}>{this.props.label}</button>
      )
  } 
}
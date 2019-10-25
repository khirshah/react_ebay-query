//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./inputField.css";

//---------------------- COMPONENT -------------------------------
export default class InputField extends Component{
  render() {
    return (
      <input className={styles.inputField} placeholder={this.props.placeholder} onChange={(event) => this.props.inputchange(this.props.itemkey,event.target.value)}></input>
    )
  } 
}
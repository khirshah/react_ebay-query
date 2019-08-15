//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./dropDown.css";

//---------------------- COMPONENT -------------------------------
export default class DropDown extends Component{
  state = {
    value: "select",
    classname: "default"
  }

  render() {
    return (
      <select className={styles.dropDown} defaultValue={this.state.value}>
         <option className={styles[this.state.classname]} value="select" disabled >-- select --</option>
         <option>option1</option>
      </select>
    )
  } 
}
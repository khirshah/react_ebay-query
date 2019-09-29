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
      <select className={styles.dropDown} defaultValue={this.state.value} onChange={(event) => this.props.inputchange(this.props.itemkey,event.target.value,"field")}>
         <option className={styles[this.state.classname]} value="select" disabled >-- select --</option>
         <option value="title">Title</option>
         <option value="limit">Number of items</option>
      </select>
    )
  } 
}
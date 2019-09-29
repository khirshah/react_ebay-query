//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./searchRow.css";

//---------------------- components -------------------------------
import InputField from "./InputField.js"
import DropDown from "./DropDown.js"

//---------------------- COMPONENT -------------------------------
export default class SearchRow extends Component{
  render() {
    return (
        <div className={styles.searchRow}>
          <InputField inputchange={this.props.inputchange} itemkey={this.props.itemkey}/>
          <DropDown inputchange={this.props.inputchange} itemkey={this.props.itemkey}/>
        </div>
      )
  } 
}
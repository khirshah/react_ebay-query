//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./searchRow.css";

//---------------------- components -------------------------------
import InputField from "./InputField.js"

//---------------------- COMPONENT -------------------------------
export default class SearchRow extends Component{
  render() {
    return (
        <div className={styles.searchRow}>
          <InputField inputchange={this.props.inputchange} value={this.props.value} itemkey={this.props.itemkey} placeholder="Type a keyword to search"/>
        </div>
      )
  } 
}
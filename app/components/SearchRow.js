//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {PureComponent} from "react";

//------------------------- styles --------------------------------
import styles from "./searchRow.css";

//---------------------- components -------------------------------
import InputField from "./InputField.js"

//---------------------- COMPONENT -------------------------------
export default class SearchRow extends PureComponent{
  render() {
    return (
        <div className={styles.searchRow}>
          <InputField inputchange={this.props.inputchange} itemkey={this.props.itemkey} placeholder="Type a keyword to search"/>
        </div>
      )
  } 
}
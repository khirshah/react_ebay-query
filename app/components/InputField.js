//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {PureComponent} from "react";

//------------------------- styles --------------------------------
import styles from "./inputField.css";

//---------------------- COMPONENT -------------------------------
export default class InputField extends PureComponent{
  render() {
    return (
      <input className={styles.inputField} placeholder={this.props.placeholder} onChange={(event) => this.props.inputchange(event.target.value)}></input>
    )
  } 
}
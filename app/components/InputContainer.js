//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {PureComponent} from "react";

//------------------------- styles --------------------------------
import styles from "./inputContainer.css";

//---------------------- COMPONENT -------------------------------
export default class InputContainer extends PureComponent{

  render() {
    return (
      <div className={styles.inputContainer}>
        {this.props.children}
        <div className={styles.textContainer}>
          <p className={styles.text}>{this.props.text}</p>
        </div>
      </div>
    )
  } 
}
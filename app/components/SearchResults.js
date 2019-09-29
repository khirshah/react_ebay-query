//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./searchResults.css";

//---------------------- COMPONENT -------------------------------
export default class SearchResults extends Component{
  render() {
    return (
      <div className={styles.searchResults}>{this.props.content}</div>
    )
  } 
}
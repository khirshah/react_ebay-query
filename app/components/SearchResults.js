//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./searchResults.css";

//---------------------- COMPONENT -------------------------------
export default class SearchResults extends Component{
  render() {
    return (
      <div>{this.props.content}</div>
      )
  } 
}
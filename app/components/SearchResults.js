//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./searchResults.css";

//---------------------- components -------------------------------
import ResultRow from "./ResultRow.js"

//---------------------- COMPONENT -------------------------------
export default class SearchResults extends Component{

  handleIncomingData = () => {
    console.log(this.props.content)
    let rows = this.props.content.map((item, index) => {
      return <ResultRow key={index} content={item}/>
    })
    return rows
  }

  render() {
    return (
      <div className={styles.searchResults}>
        {this.handleIncomingData()}
      </div>
    )
  } 
}
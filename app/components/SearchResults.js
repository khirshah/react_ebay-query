//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {PureComponent} from "react";

//------------------------- styles --------------------------------
import styles from "./searchResults.css";

//---------------------- components -------------------------------
import ResultRow from "./ResultRow.js"

//---------------------- COMPONENT -------------------------------
export default class SearchResults extends PureComponent{

  handleIncomingData = () => {
    let rows = this.props.content.map((item, index) => {
      return <ResultRow key={index} content={item}/>
    })
    return rows
  }

  render() {
    return (
      <div className={styles.searchResults}>
        <div className={styles.searchResText}>{`${this.props.searchDetails.limit} results for: ${this.props.searchDetails.keyword}`}</div>
        {this.handleIncomingData()}
      </div>
    )
  } 
}
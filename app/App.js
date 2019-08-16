//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- axios --------------------------------
const axios = require('axios');

//------------------------- styles --------------------------------
import styles from "./app.css";

//---------------------- components -------------------------------
import Button from "./components/Button.js"
import SearchContainer from "./components/SearchContainer.js"
import SearchResults from "./components/SearchResults.js"

//---------------------- COMPONENT -------------------------------

export default class App extends Component{
  state = {
    isResultsVisible: false,
    results: "These are the results"
  }

  handleSearch = () => {
      axios({
        url: "http://localhost:3010/getData",
        method: "post",
        data: {
          keyword: "arkham"
        }
      }).then(
        response => {
          this.setState({
            isResultsVisible: true,
            results: response.data
          })
        },
        error => {
          console.log(error);
        }
      )
  }

  render(){
    return(
      <div className={styles.app}>
        <div className={styles.appContainer}>
          <div className={styles.appTitle}>Ebay Search</div>
          <SearchContainer/>
          <Button className={styles.searchButton} label="Search" onclick={this.handleSearch.bind(this)} />
          {this.state.isResultsVisible && <SearchResults content={this.state.results}/>}
        </div>
      </div>
    );
  }
}
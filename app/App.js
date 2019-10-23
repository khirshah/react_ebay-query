//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- axios --------------------------------
const axios = require('axios');

//------------------------- styles --------------------------------
import styles from "./app.css";

//---------------------- components -------------------------------
import SearchContainer from "./components/SearchContainer.js"
import SearchResults from "./components/SearchResults.js"

//---------------------- COMPONENT -------------------------------

export default class App extends Component{
  state = {
    isResultsVisible: false,
    results: "These are the results",
    isSearchComplete: false
  }

  handleSearch = (formData) => {
    let keyword=""
    let limit=formData.limit

    formData.content.map(i => {
      keyword += `${i.trim().replace(" ",",")},`  
    })

    if(keyword != "") {
      axios({ //https://agi-ebay-query-server.herokuapp.com/ , http://localhost:3010/getData
        url: "https://agi-ebay-query-server.herokuapp.com/getData",
        method: "post",
        data: {
          keyword: keyword,
          limit: limit
        }
      }).then(
        response => {
          if (typeof response != "string") {
            this.setState({
              isResultsVisible: true,
              results: response.data,
              isSearchComplete: true
            })
          }
          else{
            alert("Something went wrong, please try again!")
          }
        },
        error => {
          console.log(error);
        }
      )
    }
    else{
      alert("No search keyword has been provided!")
    }
  }

  setSearchComplete = (val) => {
    this.setState({
      isSearchComplete: val
    })
  }

  render() {
    return(
      <div className={styles.app}>
        <div className={styles.appContainer}>
          <div className={styles.appTitle}>Ebay Search</div>
          <SearchContainer buttonclick={this.handleSearch.bind(this)} setSearchComplete={this.setSearchComplete.bind(this)} isSearchComplete={this.state.isSearchComplete}/>
          {this.state.isResultsVisible && <SearchResults content={this.state.results}/>}
        </div>
      </div>
    );
  }
}
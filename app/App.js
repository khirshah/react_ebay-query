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
    let keyword="";
    let limit=formData.limit;
    let country=formData.country;

    formData.content.map(i => {
      keyword += `${i.trim().replace(" ",",")},`  
    })

    if(keyword != "") {
      axios({ //https://agi-ebay-query-server.herokuapp.com/getData , http://localhost:3010/getData
        url: "http://localhost:3010/getData",
        method: "post",
        data: {
          keyword: keyword,
          country: country,
          limit: limit
        }
      }).then(
        response => {
          if (typeof response.data != "string") {
            this.setState({
              isResultsVisible: true,
              results: response.data,
              isSearchComplete: true
            })
          }
          else{
            alert("You have probably misspelled the keyword(s) or there are no search results with these settings. Edit your search and try again!")
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
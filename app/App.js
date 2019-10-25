//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {PureComponent} from "react";

//------------------------- axios --------------------------------
const axios = require('axios');

//------------------------- styles --------------------------------
import styles from "./app.css";

//---------------------- components -------------------------------
import SearchContainer from "./components/SearchContainer.js"
import SearchResults from "./components/SearchResults.js"

//---------------------- COMPONENT -------------------------------

export default class App extends PureComponent{
  state = {
    isResultsVisible: false,
    isSearchComplete: false,
    results: "These are the results"
  }

  handleSearch = (formData) => {
    let keyword="";
    let limit=formData.limit;
    let country=formData.country;

    formData.content.map(i => {
      keyword += `${i.trim().replace(/\s/g,",")},`  
    })
    keyword = keyword.slice(0,-1);

    if(keyword != "") {
      axios({ //https://agi-ebay-query-server.herokuapp.com/getData , http://localhost:3010/getData
        url: "https://agi-ebay-query-server.herokuapp.com/getData",
        method: "post",
        data: {
          keyword: keyword,
          country: country,
          limit: limit
        }
      }).then(
        response => {
          if (typeof response.data != "string") {
            console.log(keyword,keyword.replace(/,/g,", "))
            this.setState({
              isResultsVisible: true,
              isSearchComplete: true,
              results: response.data,
              searchDetails: {
                limit: limit,
                keyword: keyword.replace(/,/g,", "),
                country: country
              }
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
          {this.state.isResultsVisible && <SearchResults content={this.state.results} searchDetails={this.state.searchDetails}/>}
        </div>
      </div>
    );
  }
}
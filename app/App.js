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

  handleSearch = (formData) => {
    let keyword=""
    let limit=5

    formData.map(i => {
      if (i.field == "title") {
        keyword += `${i.content},`
      }
      else if (i.field == "limit"){
        limit = i.content
      }
    })

    if(keyword != "") {
      axios({
        url: "http://localhost:3010/getData",
        method: "post",
        data: {
          keyword: keyword,
          limit: limit
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
    else{
      alert("No search keyword has been provided!")
    }
  }

  render(){
    return(
      <div className={styles.app}>
        <div className={styles.appContainer}>
          <div className={styles.appTitle}>Ebay Search</div>
          <SearchContainer buttonclick={this.handleSearch.bind(this)}/>
          {this.state.isResultsVisible && <SearchResults content={this.state.results}/>}
        </div>
      </div>
    );
  }
}
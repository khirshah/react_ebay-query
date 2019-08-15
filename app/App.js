//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./app.css";

//---------------------- components -------------------------------
import Button from "./components/Button.js"
import SearchContainer from "./components/SearchContainer.js"
import SearchResults from "./components/SearchResults.js"

//---------------------- COMPONENT -------------------------------

export default class App extends Component{
  state = {
    displayMode: "search"
  }

  render(){
    return(
      <div className="App">
        {this.state.displayMode == "search" ? <SearchContainer/> : null}
        {this.state.displayMode == "search" ? <Button label="Search"/>: null}
        {this.state.displayMode != "search" ? <SearchResults content="These are the results"/> : null}
      </div>
    );
  }
}
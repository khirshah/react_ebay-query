import React, { Component} from "react";
import "./app.css";
import Button from "./components/Button.js"
import SearchContainer from "./components/SearchContainer.js"

class App extends Component{

  render(){
    return(
      <div className="App">
        <SearchContainer/>
        <Button label="Search"/>
      </div>
    );
  }
}

export default App;
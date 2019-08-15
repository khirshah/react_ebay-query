import React, { Component} from "react";
import "./searchRow.css";
import InputField from "./InputField.js"
import DropDown from "./DropDown.js"

export default class SearchRow extends Component{
  render() {
    return (
        <div>
          <InputField/>
          <DropDown/>
        </div>
      )
  } 
}
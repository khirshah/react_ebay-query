//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./dropDown.css";

//------------------------- data ----------------------------------
import countries from "../data/countrycodes.json";

//---------------------- COMPONENT -------------------------------
export default class DropDown extends Component{
  state = {
    value: "select",
    classname: "default"
  }

  createOptions = () => {
    const optionList = [];
    countries.map((i,index) => {
      optionList.push(
        <option key={index} value={i.code}>{i.name}</option>
        )
    });
    return optionList;
  }

  render() {
    return (
      <select className={styles.dropDown} defaultValue={this.state.value} onChange={(event) => this.props.ddchange(event.target.value)}>
         <option className={styles[this.state.classname]} value="select" disabled >-- select country --</option>
         {this.createOptions()}
      </select>
    )
  } 
}
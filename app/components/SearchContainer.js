//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";

//------------------------- styles --------------------------------
import styles from "./searchContainer.css";

//---------------------- components -------------------------------
import SearchRow from "./SearchRow.js"
import Button from "./Button.js"

//---------------------- COMPONENT -------------------------------
export default class SearchContainer extends Component {
    
    state = {
      formData: [{
        content: "",
        field: ""
      }],
    }

  handleinputFieldChange = (key,value, target) => {
    var {formData} = this.state
    formData[key][target]= value
    this.setState({
      formData: formData
    })
  }

  handleAddSearchRow = () => {
    this.setState({formData: 
      this.state.formData.concat([{
        content: "",
        field: ""
      }])})
  }
  
  handleRemoveSearchRow = () => {
    this.setState({
      formData: this.state.formData.filter((i, index) => {
        return index != (this.state.formData.length-1)
      })
    })
  }

  createSearchRows = () => {
    const rows = this.state.formData.map((i, index) => {
      return <SearchRow key={index} itemkey={index}  inputchange={this.handleinputFieldChange.bind(this)}/>
    })
    return rows
  }

  render() {
    return (
        <div className={styles.searchContainer} >
          {this.createSearchRows()}
          <div className={styles.buttonsContainer}>
          <Button className={styles.btn} onclick={this.handleAddSearchRow.bind(this)} label="More"/>
          <Button className={styles.btn} onclick={this.handleRemoveSearchRow.bind(this)} label="Less"/>
          </div>
          <Button className={styles.searchButton} label="Search" onclick={() => this.props.buttonclick(this.state.formData)} />
        </div>
      )
  } 
}
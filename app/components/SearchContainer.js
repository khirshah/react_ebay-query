import React, { Component} from "react";
import "./searchContainer.css";
import SearchRow from "./SearchRow.js"
import Button from "./Button.js"

export default class SearchContainer extends Component{
    state = {
      searchRows: ["item"]
    }

  handleAddSearchRow = () => {
    this.setState({searchRows: this.state.searchRows.concat(["item"])})
  }
  
  handleRemoveSearchRow = () => {
    this.setState({
      searchRows: this.state.searchRows.filter((i, index) => {
        return index != (this.state.searchRows.length-1)
      })
    })
  }

  createSearchRows = () => {
    const rows = this.state.searchRows.map((i, index) => {
      return <SearchRow key={index}/>
    })
    return rows
  }

  render() {
    return (
        <div>
          {this.createSearchRows()}
          <Button onclick={this.handleAddSearchRow.bind(this)} label="More"/>
          <Button onclick={this.handleRemoveSearchRow.bind(this)} label="Less"/>
        </div>
      )
  } 
}
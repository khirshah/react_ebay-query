//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component} from "react";
import { connect } from 'react-redux';
import reducer from '../reducer/reducer.js'

//------------------------- styles --------------------------------
import styles from "./searchContainer.css";

//---------------------- components -------------------------------
import SearchRow from "./SearchRow.js"
import Button from "./Button.js"
import DropDown from "./DropDown.js"

//---------------------- COMPONENT -------------------------------
class SearchContainer extends Component {
    
    state = {
      id: 1,
      formData: {
        content: [""],
        limit: 5,
        country: ""
      }
    }

  handleinputFieldChange = (key,value) => {
    this.props.dispatch({
      type: 'INPUT_FIELD_CHANGE',
      value: value,
      id: key})
    let {formData} = this.state
    formData.content[key]= value
    this.setState({
      formData: formData
    })
  }

  handleLimitChange = (value) => {
    let {formData} = this.state
    formData.limit = value
    this.setState({
      formData: formData
    })
  }

  handleCountryChange = (value) => {
    let {formData} = this.state
    formData.country = value
    this.setState({
      formData: formData
    })
  }

  handleAddSearchRow = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_SEARCH_ROW',
      id: this.state.id++
    })
    let {formData} = this.state
    formData.content = formData.content.concat([""])
    this.setState({formData: formData})
  }
  
  handleRemoveSearchRow = (event) => {
    event.preventDefault()
    if (this.state.formData.content.length > 1) {
      let {formData} = this.state
      formData.content = formData.content.filter((i, index) => {
          return index != (this.state.formData.content.length-1)
        })
      this.setState({
        formData: formData
      })
    }
  }

  createSearchRows = (data) => {
    const rows = data.content.map((i, index) => {
      return <SearchRow key={index} itemkey={index} inputchange={this.handleinputFieldChange.bind(this)}/>
    })
    return rows
  }

  resetSearch = () => {
    this.setState({
      id: 1,
      formData: {
        content: [""],
        limit: 5,
        country: ""
      }
    })
    this.props.setSearchComplete(false);
    this.myFormRef.reset();

  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.isSearchComplete != this.props.isSearchComplete) {
      this.resetSearch()
    }
  }

  render() {
    return (
        <div className={styles.searchContainer} >
          <form className={styles.searchForm}  ref={(el) => this.myFormRef = el} >
            {this.createSearchRows(this.state.formData)}
            <div className={styles.buttonsContainer}>
              <Button className={styles.btn} onclick={this.handleAddSearchRow.bind(this)} label="More"/>
              <Button className={styles.btn} onclick={this.handleRemoveSearchRow.bind(this)} label="Less"/>
            </div>
            <DropDown ddchange={this.handleCountryChange.bind(this)}/>
            <input className={styles.limit} placeholder="#result rows" onChange={(event) => this.handleLimitChange(event.target.value)}></input>
          </form>
            <Button 
              className={styles.searchButton} 
              label="Search" 
              onclick={() => {this.props.buttonclick(this.state.formData)}}/>
        </div>
      )
  } 
}

/*const mapDispatchToProps = {
  signin
}*/

const mapStateToProps = (state) => {
  return {state: state}
}

//console.log(connect)
export default connect(mapStateToProps/*, mapDispatchToProps*/)(SearchContainer)
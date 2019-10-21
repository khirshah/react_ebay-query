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

//---------------------- COMPONENT -------------------------------
class SearchContainer extends Component {
    
    state = {
      id: 1,
      formData: {
        content: [""],
        limit: 5
      }
    }

  handleinputFieldChange = (key,value) => {
    this.props.dispatch({
      type: 'INPUT_FIELD_CHANGE',
      value: value,
      id: key})
    var {formData} = this.state
    formData.content[key]= value
    this.setState({
      formData: formData
    })
  }

  handleRowsNumChange = (value) => {
    var {formData} = this.state
    formData.limit = value
    this.setState({
      formData: formData
    })
  }

  handleAddSearchRow = () => {
    this.props.dispatch({
      type: 'ADD_SEARCH_ROW',
      id: this.state.id++
    })
    var {formData} = this.state
    formData.content= formData.content.concat([""])
    this.setState({formData: formData})
  }
  
  handleRemoveSearchRow = () => {
    this.setState({
      formData: this.state.formData.content.filter((i, index) => {
        return index != (this.state.formData.content.length-1)
      })
    })
  }

  createSearchRows = () => {
    console.log(this.state)
    const rows = this.state.formData.content.map((i, index) => {
      return <SearchRow key={index} itemkey={index}  inputchange={this.handleinputFieldChange.bind(this)}/>
    })
    return rows
  }

  render() {
    console.log("SearchContainer.props: ",this.props)
    return (
        <div className={styles.searchContainer} >
          {this.createSearchRows()}
          <div className={styles.buttonsContainer}>
            <Button className={styles.btn} onclick={this.handleAddSearchRow.bind(this)} label="More"/>
            <Button className={styles.btn} onclick={this.handleRemoveSearchRow.bind(this)} label="Less"/>
          </div>
          <input className={styles.limit} placeholder="#items" onChange={(event) => this.handleRowsNumChange(event.target.value)}></input>
          <Button className={styles.searchButton} label="Search" onclick={() => this.props.buttonclick(this.state.formData)} />
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
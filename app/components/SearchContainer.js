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
      formData: [{
        content: "",
        field: ""
      }],
    }

  handleinputFieldChange = (key,value, target) => {
    this.props.dispatch({
      type: 'INPUT_FIELD_CHANGE',
      value: value,
      id: target})
    var {formData} = this.state
    formData[key][target]= value
    this.setState({
      formData: formData
    })
  }

  handleAddSearchRow = () => {
    this.props.dispatch({
      type: 'ADD_SEARCH_ROW',
      id: this.state.id++
    })
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
    console.log("SearchContainer.props: ",this.props)
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

/*const mapDispatchToProps = {
  signin
}*/

const mapStateToProps = (state) => {
  return {state: state}
}

//console.log(connect)
export default connect(mapStateToProps/*, mapDispatchToProps*/)(SearchContainer)
//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, {Component} from "react";
import { connect } from 'react-redux';
import reducer from '../reducer/reducer.js'

//------------------------- styles --------------------------------
import styles from "./searchContainer.css";

//---------------------- components -------------------------------
import SearchRow from "./SearchRow.js"
import Button from "./Button.js"
import InputContainer from "./InputContainer.js"
import DropDown from "./DropDown.js"

//---------------------- COMPONENT -------------------------------
class SearchContainer extends Component {
    
    state = {
      formData: {
        keyword: "",
        limit: 5,
        country: ""
      }
    }

  handleinputFieldChange = (value) => {
    this.props.dispatch({
      type: 'INPUT_FIELD_CHANGE',
      value: value
    })
    let {formData} = this.state
    formData.keyword = value
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

  resetSearch = () => {
    this.setState({
      id: 1,
      formData: {
        keyword: "",
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
            <SearchRow inputchange={this.handleinputFieldChange.bind(this)}/>
            <InputContainer text="if you want to search in a specific country (optional)">
              <DropDown ddchange={this.handleCountryChange.bind(this)}/>
            </InputContainer>
            <InputContainer text="number of result rows to show (default:5)">
              <input className={styles.limit} placeholder="#results" onChange={(event) => this.handleLimitChange(event.target.value)}></input>
            </InputContainer>
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
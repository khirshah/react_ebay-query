//----------------------- IMPORT --------------------------------------
//----------------------- React -----------------------------------
import React, { Component, Linking} from "react";

//------------------------- styles --------------------------------
import styles from "./resultRow.css";

//---------------------- COMPONENT -------------------------------
export default class ResultRow extends Component{

  render() {
    return (
      <div className={styles.resultRow} >
        <div className={styles.titleContainer}>
          <a className={styles.title} href={this.props.content.ref} target="_blank" rel="noopener noreferrer">{this.props.content.title}</a>
        </div>
        <div className={styles.details}>
          <img src={this.props.content.image.imageUrl} />
          <div className={styles.infoBox}>
            <div className={styles.price}>{`Price: ${this.props.content.price.value} ${this.props.content.price.currency}`}</div>
            <div className={styles.location}>Country: {this.props.content.loc.country}</div>
          </div>
        </div>
      </div>
    )
  } 
}
import React from 'react';
import './CustomColorItem.css';

export class CustomColorItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.customColor,
      isAvailable: true
    }
    this.removeColorItem = this.removeColorItem.bind(this);
  }


  removeColorItem(event) {
    this.setState({
      isAvailable : false
    })
    console.log(this.props.index);
    this.props.removeColorItemFromColorArray(this.props.index);
  }

  render() {
    return(
      this.state.isAvailable?
        <div className="dynamic-color-item-space">
        <span onClick={this.removeColorItem}><i className="fas fa-times"></i></span>
        <span title="click to change drawer color" className="custom-color-item" style={{backgroundColor: this.state.color}}></span> 
      </div>: ''
      
      
    )
  }
}
import React from 'react';
import './CustomColorItem.css';

export class CustomColorItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.customColor,
      isAvailable: true,
      index: props.index
    }
    this.removeColorItem = this.removeColorItem.bind(this);
  }


  removeColorItem() {
    this.setState({
      isAvailable : false
    })
    // remove it from customColorArray in header using index of item
    this.props.removeColorFromCustomArray(this.state.index)
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
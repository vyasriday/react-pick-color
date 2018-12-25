import React, {Component} from 'react';
import './Color-Item.css';

class ColorItem extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    } 
    this.setColor = this.setColor.bind(this);
  }

  setColor() {
    this.props.changeColor(this.state.color);
  }
   render() {
     return(
       <div>
         <span title="click to change drawer color" className="color-item" style={{backgroundColor: this.state.color}} onClick={this.setColor}></span>
      </div>
     )
   }
    
  
} 

export default ColorItem;
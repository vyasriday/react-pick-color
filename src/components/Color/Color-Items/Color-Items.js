import React, {Component} from 'react';
import './Color-Items.css';

class ColorItem extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    } 
    this.getColor = this.getColor.bind(this);
  }

  getColor = () => {
    this.props.changeColor(this.state.color);
  }
   render() {
     return(
       <div>
         <span className="color-item" style={{backgroundColor: this.state.color}} onClick={this.getColor}></span>
      </div>
     )
   }
    
  
} 

export default ColorItem;
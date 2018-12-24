import React, {Component} from 'react';
import './Color.css';
import ColorItem from './Color-Items/Color-Items';

class Color extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
    this.changeParentColor = this.changeParentColor.bind(this);
  }

  changeParentColor(newColor) {
    this.setState({
      color: newColor
    })

    this.props.changeColor(this.state.color);
  }
  render() {
    return(
      <div className="colorBox">
      {this.props.colorArray.map((color, key) => <ColorItem  color= {color} key={key} changeColor={this.changeParentColor} />
      )}
      </div>
    )
  }
}

export default Color;
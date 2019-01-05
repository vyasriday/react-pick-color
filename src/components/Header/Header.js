import React, {Component} from 'react';
import './Header.css';
import ColorPallete from './ColorPallete/ColorPallete';
import { CustomColorPallete } from './CustomColorPallete/CustomColorPallete';
import {Form} from './Form';
class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      formVisible: false,
      customColorArray: []
    }
    this.changeParentColor = this.changeParentColor.bind(this);
    this.addFormComponent = this.addFormComponent.bind(this);
    this.removeFormComponent = this.removeFormComponent.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.removeColorFromCustomArray = this.removeColorFromCustomArray.bind(this);
  }

  changeParentColor(newColor) {
    this.props.changeColor(newColor);
  }

  addFormComponent() {
    this.setState({
      formVisible: true,
      newColor: ''
    })
  }

  removeFormComponent() {
    this.setState({
      formVisible: false
    })
  }

  addNewColor(color) {
    // TODO: Don't manipulate state directly here
    this.state.customColorArray.push(color)
    this.setState({
      customColorArray: this.state.customColorArray
    })
  }

  removeColorFromCustomArray(index) {
    let customArray = this.state.customColorArray.filter((el, i) => i !== index);
    this.setState({
      customColorArray: customArray
    });
    console.log('Custom Array', customArray);
  }

  render() {
    return(
      <div className="header">
        <ColorPallete changeColor={this.changeParentColor} />
        <CustomColorPallete 
          newColor={this.state.newColor} 
          customColorArray={this.state.customColorArray}
          removeColorFromCustomArray = {this.removeColorFromCustomArray}
          changeColor = {this.changeParentColor}  
        />
        <span id="plus-icon" onClick={this.addFormComponent}><i className="fas fa-plus"></i> </span>
        {this.state.formVisible? <Form  removeForm={this.removeFormComponent} addNewColor = {this.addNewColor}/> : ''}
        
      </div>

    )
  }
}

export default Header;
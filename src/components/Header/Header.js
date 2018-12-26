import React, {Component} from 'react';
import './Header.css';
import ColorPallete from './ColorPallete/ColorPallete';
import { CustomColorPallete } from './CustomColorPallete/CustomColorPallete';
import {Form} from './Form';
class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      formVisible: false
    }
    this.changeParentColor = this.changeParentColor.bind(this);
    this.addFormComponent = this.addFormComponent.bind(this);
    this.removeFormComponent = this.removeFormComponent.bind(this);
  }
  
  // this will change the parent app's color state 
  changeParentColor(newColor) {
    this.props.changeColor(newColor);
  }

  addFormComponent() {
    this.setState({
      formVisible: true
    })
  }

  removeFormComponent() {
    this.setState({
      formVisible: false
    })
  }

  render() {
    return(
      <div className="header">
        <ColorPallete changeColor={this.changeParentColor} />
        <CustomColorPallete />
        <span id="plus-icon" onClick={this.addFormComponent}><i className="fas fa-plus"></i> </span>
        {this.state.formVisible? <Form removeForm={this.removeFormComponent}/> : ''}
        
      </div>

    )
  }
}

export default Header;
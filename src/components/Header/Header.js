import React, { Component } from 'react';
import ColorPallete from './ColorPallete/ColorPallete';
import CustomColorPallete from './CustomColorPallete/CustomColorPallete';
import Form from './Form';
import './Header.css';

class Header extends Component {
  state = {
    formVisible: false,
    customColorArray: [],
  };

  changeParentColor = newColor => {
    this.props.changeColor(newColor);
  };

  addFormComponent = () => {
    this.setState({
      formVisible: true,
      newColor: '',
    });
  };

  removeFormComponent = () => {
    this.setState({
      formVisible: false,
    });
  };

  addNewColor = color => {
    this.setState({
      customColorArray: [...this.state.customColorArray, color],
    });
  };

  removeColorFromCustomArray = index => {
    let customArray = this.state.customColorArray.filter(
      (el, i) => i !== index,
    );
    this.setState({
      customColorArray: customArray,
    });
  };

  render() {
    return (
      <div className="header">
        <ColorPallete changeColor={this.changeParentColor} />
        <CustomColorPallete
          customColorArray={this.state.customColorArray}
          removeColorFromCustomArray={this.removeColorFromCustomArray}
          changeColor={this.changeParentColor}
        />
        <span id="plus-icon" onClick={this.addFormComponent}>
          <i className="fas fa-plus"></i>{' '}
        </span>
        {this.state.formVisible && (
          <Form
            removeForm={this.removeFormComponent}
            addNewColor={this.addNewColor}
          />
        )}
      </div>
    );
  }
}

export default Header;

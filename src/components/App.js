import React, { Component } from 'react';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
    this.changeDrawerColor = this.changeDrawerColor.bind(this);
  }
  changeDrawerColor(newColor) {
    this.setState({
      color: newColor,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header changeColor={this.changeDrawerColor} />
        <Drawer drawerColor={this.state.color} />
      </div>
    );
  }
}

export default App;

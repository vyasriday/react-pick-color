import React, { Component } from 'react';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import './App.css';

class App extends Component {
  state = {
    color: '#ed8e0e',
  };

  changeDrawerColor = newColor => {
    this.setState({
      color: newColor,
    });
  };

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

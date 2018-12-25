import React, { Component } from 'react';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        color: 'orangered'
    }
    this.changeDrawerColor = this.changeDrawerColor.bind(this);
  }
   changeDrawerColor(newColor) {
     this.setState({
       color: newColor
     })
   } 

  render() {
    return (
      <div className="wrapper">
       <Header changeColor= {this.changeDrawerColor}/>
       <Drawer 
        drawerColor = {this.state.color} />
      </div>
    );
  }
} 

export default App;

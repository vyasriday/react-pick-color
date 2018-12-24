import React, { Component } from 'react';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        color: ''
    }
    this.onDrawerColorChange = this.onDrawerColorChange.bind(this);
  }
   onDrawerColorChange(newColor) {
     this.setState({
       color: newColor
     })
   } 

  render() {
    return (
      <div className="wrapper">
       <Header changeColor= {this.onDrawerColorChange}/>
       <Drawer 
        drawerColor = {this.state.color} />
      </div>
    );
  }
}

export default App;

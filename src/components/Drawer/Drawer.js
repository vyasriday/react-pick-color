import React, { Component } from 'react';
import './Drawer.css';

class Drawer extends Component {
  render() {
    return (
      <section
        className="drawer"
        style={{ backgroundColor: this.props.drawerColor }}
      >
        <h2>Color Drawer</h2>
      </section>
    );
  }
}

export default Drawer;

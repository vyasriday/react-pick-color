import React, {Component} from 'react';
import './Drawer.css';

class Drawer extends Component {

  drawerColor = this.props.drawerColor;
  state = {
    background: this.drawerColor
  }
  
  componentDidMount() {
    this.setState({
      background: this.drawerColor
    })
  }
  render() {
    return(
      <section className="drawer" style={{backgroundColor: this.state.background }}>
      
      </section>
    )
  }
}

export default Drawer;

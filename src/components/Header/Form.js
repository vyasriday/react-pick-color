import React, {Component} from 'react';
import './Form.css';

export class Form extends Component {

  state = {value: ''}

  setColor = e => {
    this.setState({value: e.target.value});
  }
  
  submit = e => {
    e.preventDefault();
    this.props.addNewColor(this.state.value)
    this.props.removeForm();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <label>
              <input 
                type="color" 
                onChange = {this.setColor} />
            </label>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}


import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 100};
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <input
            type="range"
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})} />
      </div>
    );
  }
}

export default App;

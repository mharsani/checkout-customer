import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FirstStep extends Component {
  constructor () {
    super();
    this.state =  {
      text: 'harsani'
    }
  }
  render() {
    return (
        <p className="App-intro">
        <h1 onClick={() => this.setState({
          text: 'Matheus'
        })}>{this.state.text} </h1>
          <Link to="/">Ir para a página sobre \o/</Link>
        </p>
    );
  }
}
export default FirstStep;
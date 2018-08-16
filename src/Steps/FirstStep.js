import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FirstStep extends Component {
  render() {
    return (
        <p className="App-intro">
          <Link to="/">Ir para a página sobre \o/</Link>
        </p>
    );
  }
}
export default FirstStep;
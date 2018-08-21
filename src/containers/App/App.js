import React, { Component } from 'react';
import styles from './App.scss';
import { Link } from 'react-router-dom';
import  Header from '../../components/Header/Header.js';
import AppGithub from '../../components/AppGitHub/AppGithub.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
        color: 'orange',
        showTimer: true,
        time: 0
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <p className="App-intro">
            <Link to="/first-step">Ir para a página sobre \o/</Link>
          </p>
          <Header />
          <AppGithub />
        </div>
        </div>
    );
  }
}

export default App;

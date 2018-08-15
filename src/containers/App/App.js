import React, { Component } from 'react';
import styles from './App.scss';
import { Link } from 'react-router-dom';
import  Header from '../../components/Header/Header.js';



class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <p className="App-intro">
            <Link to="/first-step">Ir para a página sobre \o/</Link>
          </p>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;

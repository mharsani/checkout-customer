import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './App.scss';
import  Header from '../../components/Header/Header.js';



class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <Header name='Matheus Harsani'/>
        </div>
      </div>
    );
  }
}

export default App;

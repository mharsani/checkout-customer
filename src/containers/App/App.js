import React, { Component } from 'react';
import styles from './App.scss';
import { Link } from 'react-router-dom';
import  Header from '../../components/Header/Header.js';
import Square from '../../components/Square/Square.js';
import Button from '../../components/Square/Button.js';
import LikeButton from '../../components/Square/like-button.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
        color: 'orange'
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
          <div>
              <Square color={this.state.color}/>
           
          </div>
          <div>
        {['green', 'purple', 'pink'].map((color,index) => (
          <Button key={index} handleClick={() => this.setState({color})}>
          {color}
            </Button>
        ))}
        <Button>
          shadiuhd
          </Button>
         <LikeButton/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;

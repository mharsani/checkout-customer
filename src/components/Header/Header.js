import React, { Component } from 'react';
import styles from './Header.scss';
import Title from '../Title/Title';

class Header extends Component {

    render(){
       return (
            <header className={styles.header}>
              <Title name="Matheus" lastname="Harsani"/>
            </header>
       );
    }
}

export default Header;
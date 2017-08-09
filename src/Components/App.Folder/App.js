//Imports
import React, { Component } from 'react'
import Header from '../Header.Folder/Header.js'
import styles from './App.css'
import 'normalize.css'
import classNames from 'classnames/bind';

//Consts
const cx = classNames.bind(styles);


class App extends Component {
  render () {
    return(<span className={cx('App')}>
      <Header/>
      <div className='heading'> HELLO WORLD </div>
  </span>)
  }
}

export default App

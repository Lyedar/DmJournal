//Imports
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../Header.Folder/Header.js'
import Home from '../Home.Folder/Home.js'
import styles from './App.css'
import 'normalize.css'
import classNames from 'classnames/bind'

//Consts
const cx = classNames.bind(styles);


class App extends Component {
  render () {
    return(
        <div>
          <Header/>
          <Route path="/Home" component={Home}/>
          <Route path="/" render={()=> (<div> THE APP IS RENDERING </div>)}/>
        </div>
    )
  }
}

export default App

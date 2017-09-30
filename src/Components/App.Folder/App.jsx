//Imports
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header.Folder/Header.jsx'
import Home from '../Home.Folder/Home.jsx'
import styles from './App.css'
import 'normalize.css'
import classNames from 'classnames/bind'

//Consts
const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/" render={() => (
            <h2 className={styles.heading}>
              THE APP IS RENDERING
            </h2>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

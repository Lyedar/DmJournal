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
      <div className={cx}>
        <Header/>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/" render={() => (
            <div>
              THE APP IS RENDERING
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

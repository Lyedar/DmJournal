import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



export default class Header extends Component {

  render() {
    return (<div>
      HEADER IS RENDERING
      <nav>
        <Link to="/">App</Link><br/>
        <Link to="/Home">Home</Link>
      </nav>
    </div>)
  }
}

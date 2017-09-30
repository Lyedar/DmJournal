import React, { Component } from 'react'
import Spell from '../../Classes/Spell.class.js'
import './Home.css'

import SpellDisplay from '../Spell.Folder/SpellView.Folder/SpellDisplay.jsx'
import {testSpell} from '../../Constants/TestingObjects'



export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      spell : new Spell(testSpell),
    }
  }

  render() {
    return (<div>
      <h2>THE HOME PAGE IS HERE TO STAY</h2>
      <SpellDisplay />
    </div>)
  }
}

import React, { Component } from 'react'
import './SpellDisplay.css'
import { Button, Modal } from 'react-bootstrap'
//var _ = require('lodash')

//import Components
import DiceDisplay from '../../Dice.Folder/Dice.jsx'

//Import Test Spell and class
import {testSpell} from '../../../Constants/TestingObjects'
import Spell from '../../../Classes/Spell.class.js'

export default class SpellDisplay extends Component {

  constructor(props){
    super(props)
    this.state= {
      spell : new Spell(testSpell),
      openModal: false
    }
    this.spell = this.state.spell
    this.spellInfo = this.state.spell.info
  }

  Modal(){
    return(<div>
      <Modal show={this.state.openModal} onHide={()=> this.setState({openModal: !this.state.openModal})} >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">SPELL DISPLAY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Spell name: {this.spellInfo.name} </span> <br />
          <span>Spell level: {this.spellInfo.level} </span> <br />
          <span>Spell casting time: {this.spellInfo.casting_time} </span> <br />
          <span>Spell range: {this.spellInfo.range} </span> <br />
          <span>Spell creator: {this.spellInfo.creator} </span> <br />
          <span>Spell school: {this.spellInfo.school} </span> <br />
          <span>Spell duration: {this.spellInfo.duration} </span> <br />
          <span>Spell ritual: {this.spellInfo.ritual ? 'true' : 'false'} </span> <br />
          <span>Spell description: {this.spellInfo.description} </span> <br />
          <span>Spell class: {this.spellInfo.class} </span> <br />
          <span>Spell concentration: {this.spellInfo.concentration} </span> <br />
          <span>Spell Dice Type: {this.spellInfo.diceType} </span> <br />
          <Button onClick={()=>this.spell.rollAttack()}>Cast Spell</Button>
          <DiceDisplay />
        </Modal.Body>
      </Modal>
    </div>)
  }

  render() {
    console.log('SpellDisplay this.spell ', this.spell)
    return (<div className='SpellDiv'>
      {/* {this.Modal()} */}

      <span>Spell name: {this.spellInfo.name} </span> <br />
      <span>Spell level: {this.spellInfo.level} </span> <br />
      <span>Spell casting time: {this.spellInfo.casting_time} </span> <br />
      <span>Spell range: {this.spellInfo.range} </span> <br />
      <span>Spell creator: {this.spellInfo.creator} </span> <br />
      <span>Spell school: {this.spellInfo.school} </span> <br />
      <span>Spell duration: {this.spellInfo.duration} </span> <br />
      <span>Spell ritual: {this.spellInfo.ritual ? 'true' : 'false'} </span> <br />
      <span>Spell description: {this.spellInfo.description} </span> <br />
      <span>Spell class: {this.spellInfo.class} </span> <br />
      <span>Spell concentration: {this.spellInfo.concentration} </span> <br />
      <span>Spell Dice Type: {this.spellInfo.diceType} </span> <br />
      <DiceDisplay />

      <Button onClick={()=> this.setState({openModal: !this.state.openModal}) }> Open Spell </Button>
    </div>)
  }
}

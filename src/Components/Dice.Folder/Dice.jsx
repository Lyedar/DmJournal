import React, { Component } from 'react'
//import classNames from 'classnames/bind'
import './Dice.css'
//const cx = classNames.bind(styles)
var Parser = require('html-react-parser')
import { Button , Modal} from 'react-bootstrap'
import diceParser from '../../Classes/DiceRoller.js'

export default class DiceDisplay extends Component {

  constructor(props){
    super(props)
    this.state = {
      modal: false,
      dice: false,
    }
  }

  //str = str + "<span class='type'>d"+data.type[i]+"</span>"
  //str = str + "<span class='roll "+special+"'>" + Math.abs(data.res[i]) + "</span>"
  //str = str + " = <span class='total'>" + total + "</span>"

  diceDisplayer(dice){
    if (!dice) return
    var data = diceParser(dice)
    if (data) {
      var str = ''
      var total = 0
      for (var i=0; i<data.res.length; i++) {
        total = total + data.res[i]
        if (data.res.length>0) {
          var special = ''
          if (i) str = str + ((data.res[i])>=0?' + ':' - ')
          if (data.type[i]) {
            str = `${str} <span className='type'>d${data.type[i]}</span>`
            if( data.type[i] == data.res[i] ) special = 'crit'
            if( data.res[i] == 1 ) special = 'fum'
          }
          str = `${str}<span className='roll ${special}'>${Math.abs(data.res[i])}</span>`
        }
      }
      str = `${str}=<span className={total}>${total}</span>`
      return str
    }
    else {
      return 'Error in roll formula'
    }
  }

  theModal(){
    return(
      <Modal show={this.state.modal} onHide={()=> this.setState({modal: !this.state.modal})} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">DICE ROLL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {this.diceDisplayer('2d10+5')}
          </div>
        </Modal.Body>
      </Modal>
    )
  }

  render() {
    return (<div>
      <Button onClick={()=> this.setState({modal : true})}>DiceParser</Button>
      <span>{Parser(this.diceDisplayer('2d10+5'))}</span>
    </div>)
  }
}

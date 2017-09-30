

class Spell {
  constructor (spell) {
    this.info = Object.assign({}, spell)
    this.attack={}
  }

  takeAction(target) {
    console.log('ATTACK')
    this.target = target ? target : 'self'
    if (this.target === 'self') {
      this.attack.target === 'self'
    } else {
      this.attack.target === target
    }
  }
}

export default Spell

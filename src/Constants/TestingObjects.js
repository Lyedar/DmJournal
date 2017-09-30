var testSpell = {
  name: 'Abi-Dalzim’s Horrid Wilting', // Name should be String
  level: 8, //  Level should be number
  casting_time: '1 Action', //  Casting Time Should be a String
  range: '150ft', //  Range should be a string
  components: {  // 3 Types true or false with list of materials needed as a string
    vocal: true,
    somatic: true,
    material: true,
    list: 'a bit of sponge'
  },
  creator: 'Offical', //  creator is a string of the spells origin, be it a book, player, or homebrew
  school: 'Necromancy', //  school is a string
  duration: 'Instant', // duration is a string
  ritual: false, // ritual is a boolean
  description: 'You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren’t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.',
  //  description is a string
  class: ['Sorcerer', 'Wizard'], // class is an array of strings
  concentration: false, //  concentration is a boolean
  diceType: '10d8'
}

module.exports = {
  testSpell
}

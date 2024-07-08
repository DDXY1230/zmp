const Chainable = require('./Chainable')

class ChainedSet extends Chainable{
  constructor(parent) {
    super(parent)
    this.store = new Set()

  }
  add (value) {
    this.store.add(value)
    return this
  }
}
module.exports = ChainedSet
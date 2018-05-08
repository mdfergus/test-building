const { expect } = require('chai')
const wrap = require('./wrap')

describe ('wrap', function() {
  it("returns a string", function() {
    expect(wrap("hey there", 3)).to.be.a('string')
  })
  it("returns the correct output for the given string", function() {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.')
  })
  it("returns the correct output for the given string", function() {
    expect(wrap("The quick brown fox jumped over the lazy dog. I went to the store to buy some new jam.", 22)).to.equal('The quick brown fox\njumped over the lazy\ndog. I went to the\nstore to buy some new\njam.')
  })
})

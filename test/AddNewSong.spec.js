/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
const sinon = require('sinon')

const AddNewSong = require('../js/AddNewSong')

describe('AddNewSong Initial State', () => {

  it('should have an intial linkToNewArtist state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().linkToNewArtist).to.be.defined
  })

  it('linkToNewArtist state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().linkToNewArtist).to.equal(false)
  })

  it('should have an intial artists state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().artists).to.be.defined
  })

  it('artists state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().artists).to.be.empty
  })

  it('should have an intial albums state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().albums).to.be.defined
  })

  it('albums state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().albums).to.be.empty
  })

  it('should have an intial line2 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line2).to.be.defined
  })

  it('line2 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line2).to.equal(false)
  })

  it('should have an intial line3 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line3).to.be.defined
  })

  it('line3 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line3).to.equal(false)
  })

  it('should have an intial line4 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line4).to.be.defined
  })

  it('line4 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line4).to.equal(false)
  })

  it('should have an intial line5 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line5).to.be.defined
  })

  it('line5 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line5).to.equal(false)
  })

  it('should have an intial line6 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line6).to.be.defined
  })

  it('line6 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line6).to.equal(false)
  })

  it('should have an intial line7 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line7).to.be.defined
  })

  it('line7 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line7).to.equal(false)
  })

  it('should have an intial line8 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line8).to.be.defined
  })

  it('line8 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line8).to.equal(false)
  })

  it('should have an intial line9 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line9).to.be.defined
  })

  it('line9 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line9).to.equal(false)
  })

  it('should have an intial line10 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line10).to.be.defined
  })

  it('line10 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line10).to.equal(false)
  })

  it('should have an intial line11 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line11).to.be.defined
  })

  it('line11 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line11).to.equal(false)
  })

  it('should have an intial line12 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line12).to.be.defined
  })

  it('line12 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line12).to.equal(false)
  })

  it('should have an intial line13 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line13).to.be.defined
  })

  it('line13 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line13).to.equal(false)
  })

  it('should have an intial line14 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line14).to.be.defined
  })

  it('line14 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line14).to.equal(false)
  })

  it('should have an intial line15 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line15).to.be.defined
  })

  it('line15 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line15).to.equal(false)
  })

  it('should have an intial line16 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line16).to.be.defined
  })

  it('line16 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line16).to.equal(false)
  })

  it('should have an intial line17 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line17).to.be.defined
  })

  it('line17 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line17).to.equal(false)
  })

  it('should have an intial line18 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line18).to.be.defined
  })

  it('line18 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line18).to.equal(false)
  })

  it('should have an intial line19 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line19).to.be.defined
  })

  it('line19 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line19).to.equal(false)
  })

  it('should have an intial line20 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line20).to.be.defined
  })

  it('line20 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line20).to.equal(false)
  })

  it('should have an intial line21 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line21).to.be.defined
  })

  it('line21 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line21).to.equal(false)
  })

  it('should have an intial line22 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line22).to.be.defined
  })

  it('line22 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line22).to.equal(false)
  })

  it('should have an intial line23 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line23).to.be.defined
  })

  it('line23 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line23).to.equal(false)
  })

  it('should have an intial line24 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line24).to.be.defined
  })

  it('line24 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line24).to.equal(false)
  })

  it('should have an intial line25 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line25).to.be.defined
  })

  it('line25 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line25).to.equal(false)
  })

  it('should have an intial line26 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line26).to.be.defined
  })

  it('line26 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line26).to.equal(false)
  })

  it('should have an intial line27 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line27).to.be.defined
  })

  it('line27 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line27).to.equal(false)
  })

  it('should have an intial line28 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line28).to.be.defined
  })

  it('line28 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line28).to.equal(false)
  })

  it('should have an intial line29 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line29).to.be.defined
  })

  it('line29 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line29).to.equal(false)
  })

  it('should have an intial line30 state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line30).to.be.defined
  })

  it('line30 state initially should be false', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().line30).to.equal(false)
  })
})

describe('calls componentDidMount', () => {
  sinon.spy(AddNewSong.prototype, 'componentDidMount')
  const wrapper = mount(<AddNewSong />)
  expect(AddNewSong.prototype.componentDidMount.calledOnce).to.equal(true)
})

/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')

const AddNewSong = require('../js/AddNewSong')

describe('<AddNewSong />', () => {

  it('should have an intial linkToNewArtist state', () => {
    const wrapper = mount(<AddNewSong />)
    expect(wrapper.state().linkToNewArtist).to.equal(false)
  })

})

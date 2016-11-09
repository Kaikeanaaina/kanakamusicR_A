/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')

const SongList = require('../js/SongList')

describe('<SongList />', () => {
  it('should have an initial songs state', () => {
    const wrapper = mount(<SongList />)
    expect(wrapper.state().songs.length).to.equal(0)
  })
})

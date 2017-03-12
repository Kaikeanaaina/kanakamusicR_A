/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')

const HeaderNavBar = require('../js/HeaderNavBar')
const { Link } = require('react-router')

describe('<HeaderNavBar />', () => {
  it('should have Links', () => {
    const wrapper = mount(<HeaderNavBar />)
    expect(wrapper.find(Link)).to.have.length(6)
  })
})

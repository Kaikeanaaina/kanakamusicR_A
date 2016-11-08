/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')

const HeaderNavBar = require('../js/HeaderNavBar')
const { Link } = require('react-router')

describe('<HeaderNavBar />', () => {

  it('should be true', () => {
    expect(2+2).to.equal(4)
  })

  it('should have Links', () => {
    const wrapper = mount(<HeaderNavBar />)
    expect(wrapper.find(Link)).to.have.length(6)
  })

  it('should have search input', () => {
    const wrapper = shallow(<HeaderNavBar />)
    expect(wrapper.find('input')).to.have.length(1)
  })

})

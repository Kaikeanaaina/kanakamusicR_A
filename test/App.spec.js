/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Artists = require('../js/Artists')
const { shallow } = require('enzyme')

describe('<Artists /> ', () => {
  it('should render the branch', () => {
    const wrapper = shallow(<Artists />)
    console.log(wrapper.debug())
    expect(wrapper.contains(<h2 className='brand'>Aloha</h2>)).to.be.true
  })
})

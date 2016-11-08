/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')

const Layout = require('../js/Layout')

describe('<Layout />', () => {

  it('should have props for children', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper.props().children).to.be.defined
  })

})

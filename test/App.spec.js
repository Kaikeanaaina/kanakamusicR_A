/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const OtherRoute = require('../js/OtherRoute')
const MyTitle = require('../js/MyTitle')
const { shallow } = require('enzyme')

describe('<OtherRoute />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<OtherRoute />)
    expect(wrapper.contains(<MyTitle title='Hello this is the english version' />)).to.be.true
  })
})

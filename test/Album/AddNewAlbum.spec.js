/* eslint-env mocha */

const React = require('react')
const { expect } = require('chai')
const { mount, shallow } = require('enzyme')

const AddNewAlbum = require('../../js/MainContent/Album/AddNewAlbum')

describe('<AddNewAlbum />', () => {

  describe('State', () => {

    it('this.state.recordLabels ', () => {
      const wrapper = mount(<AddNewAlbum />)
      expect(wrapper.state().recordLabels.to.equal(0))
      expect(wrapper.state().recordLabels).to.be.defined
    })

  })

})




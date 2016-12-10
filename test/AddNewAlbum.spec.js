/* eslint-env mocha */

const React = require('react')
const { expect } = require('chai')
const { mount, shallow } = require('enzyme')

const AddNewAlbum = require('../js/MainContent/Album/AddNewAlbum')

describe('<AddNewAlbum />', () => {

  describe('State', () => {
    const wrapper = mount(<AddNewAlbum />)
    const state = wrapper.state()

    it('this.state.recordLabels ', () => {
      expect(wrapper.state().recordLabels).to.be.defined
      expect(wrapper.state().recordLabels).to.be.an('array')
      expect(wrapper.state().recordLabels.length).to.equal(0)
    })

    it('this.state.type', () => {
      expect(wrapper.state().type).to.be.defined
      expect(wrapper.state().type).to.be.an('string')
      expect(wrapper.state().type).to.equal('')
    })

    it('this.state.artist', () => {
      expect(wrapper.state().artists).to.be.defined
      expect(wrapper.state().artists).to.be.an('array')
      expect(wrapper.state().artists.length).to.equal(0)
    })

    it('this.state.modalIsOpen', () => {
      expect(wrapper.state().modalIsOpen).to.be.defined
      expect(wrapper.state().modalIsOpen).to.be.an('boolean')
      expect(wrapper.state().modalIsOpen).to.equal(false)
    })

    it('this.state.successModalIsOpen', () => {
      expect(wrapper.state().successModalIsOpen).to.be.defined
      expect(wrapper.state().successModalIsOpen).to.be.an('boolean')
      expect(wrapper.state().successModalIsOpen).to.equal(false)
    })

    it('this.state.object', () => {
      expect(wrapper.state().object).to.be.defined
      expect(wrapper.state().object).to.be.an('object')
    })

  })

})




/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')

const SongList = require('../js/MainContent/Song/SongList')

describe('<SongList />', () => {
  describe('state', () => {
    it('should have an initial songs state', () => {
      const wrapper = mount(<SongList />)
      expect(wrapper.state().songs.length).to.equal(0)
    })

    it('should all have all div that are arrays', () => {
      const wrapper = mount(<SongList />)
      expect(wrapper.state().songs4DivArray1).to.be.defined
      expect(wrapper.state().songs4DivArray1).to.be.an('array')
      expect(wrapper.state().songs4DivArray1.length).to.equal(0)

      expect(wrapper.state().songs4DivArray2).to.be.defined
      expect(wrapper.state().songs4DivArray2).to.be.an('array')
      expect(wrapper.state().songs4DivArray2.length).to.equal(0)

      expect(wrapper.state().songs4DivArray3).to.be.defined
      expect(wrapper.state().songs4DivArray3).to.be.an('array')
      expect(wrapper.state().songs4DivArray3.length).to.equal(0)

      expect(wrapper.state().songs4DivArray4).to.be.defined
      expect(wrapper.state().songs4DivArray4).to.be.an('array')
      expect(wrapper.state().songs4DivArray4.length).to.equal(0)

      expect(wrapper.state().songs3DivArray1).to.be.defined
      expect(wrapper.state().songs3DivArray1).to.be.an('array')
      expect(wrapper.state().songs3DivArray1.length).to.equal(0)

      expect(wrapper.state().songs3DivArray2).to.be.defined
      expect(wrapper.state().songs3DivArray2).to.be.an('array')
      expect(wrapper.state().songs3DivArray2.length).to.equal(0)

      expect(wrapper.state().songs3DivArray3).to.be.defined
      expect(wrapper.state().songs3DivArray3).to.be.an('array')
      expect(wrapper.state().songs3DivArray3.length).to.equal(0)

      expect(wrapper.state().songs2DivArray1).to.be.defined
      expect(wrapper.state().songs2DivArray1).to.be.an('array')
      expect(wrapper.state().songs2DivArray1.length).to.equal(0)

      expect(wrapper.state().songs2DivArray2).to.be.defined
      expect(wrapper.state().songs2DivArray2).to.be.an('array')
      expect(wrapper.state().songs2DivArray2.length).to.equal(0)
    })
  })
})

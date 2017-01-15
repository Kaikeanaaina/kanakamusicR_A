const React = require('react')
const MyTitle = require('./../MyTitle')
const GigCard = require('./GigCard')
const { Link } = require('react-router')
const axios = require('axios')
const { domain } = require('../Domain')

class Gigs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      priceFilter: 0,
      ageFilter: 0,
      gigs: [],
      searchInputFilter: '',
      dateFilter: ''
    }
    this.searchInputFilterEvent = this.searchInputFilterEvent.bind(this)
    this.dateFilterEvent = this.dateFilterEvent.bind(this)
    this.ageFilterEvent = this.ageFilterEvent.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/gigs`)
    .then((res) => {
      this.setState({
        gigs: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  searchInputFilterEvent (e) {
    this.setState({
      searchInputFilter: e.target.value
    })
  }
  dateFilterEvent (e) {
    this.setState({
      dateFilter: e.target.value
    })
  }
  ageFilterEvent (e) {
    this.setState({
      ageFilter: e.target.value
    })
  }
  render () {
    return (
      <div>
        <MyTitle title='Gigs' />

        <div>
          <button>
            <Link to='/AddNewGig'> +Gig </Link>
          </button>
          <button>
            <Link to='/AddNewVenue'> +Venue </Link>
          </button>
        </div>

        <div style={{backgroundColor: 'rgba(0,0,255, 0.4)'}}>
          <h2>filters</h2>
          <input placeholder='search' onChange={this.searchInputFilterEvent} type='text' ref='search' />

          <h3>date bar</h3>
          <select type='number' ref='date' onChange={this.dateFilterEvent}>
            <option value=''> All </option>
            <option value={'Jan'}> January</option>
            <option value={'Feb'}> February</option>
            <option value={'Mar'}> March</option>
            <option value={'Apr'}> April</option>
            <option value={'May'}> May</option>
            <option value={'Jun'}> June</option>
            <option value={'Jul'}> July</option>
            <option value={'Aug'}> August</option>
            <option value={'Sep'}> September</option>
            <option value={'Oct'}> October</option>
            <option value={'Nov'}> November</option>
            <option value={'Dec'}> December</option>
          </select>

          <h3>age</h3>
          <select type='number' onChange={this.ageFilterEvent}>
            <option value={0}> All Ages</option>
            <option value={18}> 18+</option>
            <option value={21}> 21+</option>
            <option value={24}> 24+</option>
          </select>

        </div>

        <br />

        {this.state.gigs
          .filter((gig) => `${gig.name} ${gig.description}`.toUpperCase().indexOf(this.state.searchInputFilter.toUpperCase()) >= 0)
          .filter((gig) => `${gig.Month}`.toUpperCase().indexOf(this.state.dateFilter.toUpperCase()) >= 0)
          .filter((gig) => gig.age >= this.state.ageFilter)
          .map((gig, i) => (
            <GigCard gig={gig} key={i} />
        ))}
      </div>
    )
  }
}

module.exports = Gigs

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
      gigs: []
    }
    this.onChange = this.onChange.bind(this)
    this.changeAgeFilter = this.changeAgeFilter.bind(this)
    this.changePriceFilter = this.changePriceFilter.bind(this)
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
  onChange (e) {
    e.preventDefault()
    console.log(e.target.value)
  }
  changeAgeFilter (e) {
    e.preventDefault()
    this.setState({
      ageFilter: e.target.value
    })
  }
  changePriceFilter (e) {
    e.preventDefault()
    this.setState({
      priceFilter: e.target.value
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
          <input placeholder='search' />

          <h3>date bar</h3>
          <select type='number'>
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
          <select type='number' onChange={this.changeAgeFilter}>
            <option value={0}> All Ages</option>
            <option value={18}> 18+</option>
            <option value={21}> 21+</option>
            <option value={24}> 24+</option>
          </select>

          <h3>price</h3>
          <select type='number' onChange={this.changePriceFilter}>
            <option value=''> All</option>
            <option value={0}> Free</option>
            <option value={10}> $10</option>
            <option value={25}> $25</option>
            <option value={50}> $50</option>
            <option value={100}> $100</option>
            <option value={101}> $100+</option>
          </select>

          <h3>venue</h3>
          <select type='text' onChange={this.onChange}>
            <option value=''> All</option>
          </select>

        </div>

        <br />

        {this.state.gigs.map((gig, i) => (
          <GigCard gig={gig} key={i} />
        ))}

      </div>
    )
  }
}

module.exports = Gigs

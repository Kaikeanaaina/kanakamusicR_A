const React = require('react')
const MyTitle = require('./../MyTitle')
const GigCard = require('./GigCard')
const { Link } = require('react-router')

class Gigs extends React.Component {
  constructor (props) {
    super(props)
    this.setState = {
      priceFilter: 0,
      ageFilter: 0
    }
    this.onChange = this.onChange.bind(this)
    this.changeAgeFilter = this.changeAgeFilter.bind(this)
    this.changePriceFilter = this.changePriceFilter.bind(this)
  }
  componentDidMount () {
    console.log('call of gigs')
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
            <option value={1}> January</option>
            <option value={2}> February</option>
            <option value={3}> March</option>
            <option value={4}> April</option>
            <option value={5}> May</option>
            <option value={6}> June</option>
            <option value={7}> July</option>
            <option value={8}> August</option>
            <option value={9}> September</option>
            <option value={10}> October</option>
            <option value={11}> November</option>
            <option value={12}> December</option>
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

        <GigCard />

      </div>
    )
  }
}

module.exports = Gigs

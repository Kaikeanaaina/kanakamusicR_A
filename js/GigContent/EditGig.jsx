const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
const ConfirmDeleteModal = require('./Modal/confirmDeleteModal')

class EditGig extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Gig: {},
      artists: [],
      venues: [],
      modalIsOpen: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.openConfirmDeleteCard = this.openConfirmDeleteCard.bind(this)
    this.delete = this.delete.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/gigs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Gig: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })

    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })

    axios.get(`${domain}/venues`)
    .then((res) => {
      this.setState({
        venues: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openConfirmDeleteCard (e) {
    e.preventDefault()
    this.setState({
      modalIsOpen: true
    })
  }
  delete (e) {
    e.preventDefault()
    console.log('delete')
    axios.delete(`${domain}/gigs/${this.state.Gig.id}`)
    .then((res) => {
      this.setState({
        modalIsOpen: false
      })
      window.location.href = '/#/Gigs'
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  closeModal () {
    this.setState({
      modalIsOpen: false
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      id: this.state.Gig.id
    }

    if (this.refs.name.value) {
      let splitName = this.refs.name.value.split('')
      let splitNameStartWithCap = splitName[0].toUpperCase()
      splitName.splice(0, 1, splitNameStartWithCap)
      let capitalizeName = splitName.join('')
      object.name = capitalizeName
    } else {
      object.name = this.state.Gig.name
    }

    if (this.refs.Artists.value) {
      object.ArtistId = this.refs.Artist.value
    } else {
      object.ArtistId = this.state.Gig.ArtistId
    }

    if (this.refs.Month.value) {
      object.Month = this.refs.Month.value
    } else {
      object.Month = this.state.Gig.Month
    }

    if (this.refs.Day.value) {
      object.Day = this.refs.Day.value
    } else {
      object.Day = this.state.Gig.Day
    }

    if (this.refs.Year.value) {
      object.Year = this.refs.Year.value
    } else {
      object.Year = this.state.Gig.Year
    }

    if (this.refs.startHour.value) {
      object.startHour = this.refs.startHour.value
    } else {
      object.startHour = this.state.Gig.startHour
    }

    if (this.refs.startMinute.value) {
      object.startMinute = this.refs.startMinute.value
    } else {
      object.startMinute = this.state.Gig.startMinute
    }

    if (this.refs.Age.value) {
      object.Age = this.refs.Age.value
    } else {
      object.Age = this.state.Gig.age
    }

    if (this.refs.Price.value) {
      object.Price = this.refs.Price.value
    } else {
      object.Price = this.state.Gig.price
    }

    if (this.refs.Promoter.value) {
      object.Promoter = this.refs.Promoter.value
    } else {
      object.Promoter = this.state.Gig.promoter
    }

    if (this.refs.Contact.value) {
      object.Contact = this.refs.Contact.value
    } else {
      object.Contact = this.state.Gig.contact
    }

    if (this.refs.description.value) {
      object.description = this.refs.description.value
    } else {
      object.description = this.state.Gig.description
    }

    if (this.refs.Venue.value) {
      object.VenueId = this.refs.Venue.value
    } else {
      object.VenueId = this.state.Gig.VenueId
    }

    axios.put(`${domain}/gigs/${this.state.Gig.id}`, object)
    .then((res) => {
      window.location.href = '/#/Gigs'
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <h1> Edit Gig </h1>

        <form onSubmit={this.onSubmit}>
          <label>
            name:
            <input type='text' ref='name' placeholder={this.state.Gig.name} />
            <br />
          </label>

          <label>
            Artists:
            <select type='text' ref='Artists' placeholder='artists' >
              <option value=''> artist here </option>
              {this.state.artists.map((artist, i) => (
                <option key={i} value={artist.id} >{artist.name}</option>
              ))}
            </select>
          </label>
          {this.state.Gig.ArtistId}
          <br />

          <div>
            <label>
              Month:
              <select type='number' ref='Month' >
                <option value='' > -- </option>
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
            </label>
            {this.state.Gig.Month}
            <br />

            <label>
              Day:
              <select type='number' ref='Day' >
                <option value='' > -- </option>
                <option value={1}> 1</option>
                <option value={2}> 2</option>
                <option value={3}> 3</option>
                <option value={4}> 4</option>
                <option value={5}> 5</option>
                <option value={6}> 6</option>
                <option value={7}> 7</option>
                <option value={8}> 8</option>
                <option value={9}> 9</option>
                <option value={10}> 10</option>
                <option value={11}> 11</option>
                <option value={12}> 12</option>
                <option value={13}> 13</option>
                <option value={14}> 14</option>
                <option value={15}> 15</option>
                <option value={16}> 16</option>
                <option value={17}> 17</option>
                <option value={18}> 18</option>
                <option value={19}> 19</option>
                <option value={20}> 20</option>
                <option value={21}> 21</option>
                <option value={22}> 22</option>
                <option value={23}> 23</option>
                <option value={24}> 24</option>
                <option value={25}> 25</option>
                <option value={26}> 26</option>
                <option value={27}> 27</option>
                <option value={28}> 28</option>
                <option value={29}> 29</option>
                <option value={30}> 30</option>
                <option value={31}> 31</option>
              </select>
            </label>
            {this.state.Gig.Day}
            <br />

            <label>
              Year:
              <select type='number' ref='Year' >
                <option value={2016}> current year</option>
                <option value={2017}> next year</option>
              </select>
            </label>
            {this.state.Gig.Year}
            <br />

            <label>
              Start Hour:
              <select type='number' ref='startHour' >
                <option value='' > -- </option>
                <option value={0}> 12am</option>
                <option value={1}> 1am</option>
                <option value={2}> 2am</option>
                <option value={3}> 3am</option>
                <option value={4}> 4am</option>
                <option value={5}> 5am</option>
                <option value={6}> 6am</option>
                <option value={7}> 7am</option>
                <option value={8}> 8am</option>
                <option value={9}> 9am</option>
                <option value={10}> 10am</option>
                <option value={11}> 11am</option>
                <option value={12}> 12pm</option>
                <option value={13}> 1pm</option>
                <option value={14}> 2pm</option>
                <option value={15}> 3pm</option>
                <option value={16}> 4pm</option>
                <option value={17}> 5pm</option>
                <option value={18}> 6pm</option>
                <option value={19}> 7pm</option>
                <option value={20}> 8pm</option>
                <option value={21}> 9pm</option>
                <option value={22}> 10pm</option>
                <option value={23}> 11pm</option>
              </select>
            </label>
            {this.state.Gig.startHour}
            <br />

            <label>
              Start Minute:
              <select type='number' ref='startMinute' >
                <option value=''> -- </option>
                <option value={0}> 00</option>
                <option value={15}> 15</option>
                <option value={30}> 30</option>
                <option value={45}> 45</option>
              </select>
            </label>
            {this.state.Gig.startMinute}
            <br />
          </div>

          <div>
            <label>
              Age:
              <select type='number' ref='Age' >
                <option value='' > -- </option>
                <option value={0} > All Ages</option>
                <option value={18} > 18+</option>
                <option value={21} > 21+</option>
                <option value={24} > 24+</option>
              </select>
            </label>
            {this.state.Gig.age}
            <br />
          </div>

          <div>
            <label>
              Price:
              <select type='number' ref='Price' >
                <option value=''> -- </option>
                <option value={0}> Free</option>
                <option value={10}> $10</option>
                <option value={25}> $25</option>
                <option value={50}> $50</option>
                <option value={100}> $100</option>
                <option value={101}> $100+</option>
              </select>
            </label>
            {this.state.Gig.price}
            <br />
          </div>

          <div>
            <label>
              Promoter:
              <input placeholder={this.state.Gig.promoter} type='text' ref='Promoter' />
            </label>
            <br />
          </div>

          <div>
            <label>
              Contact:
              <input placeholder={this.state.Gig.contact} type='text' ref='Contact' />
            </label>
            <br />
          </div>

          <div>
            <label>
              Venue:
              <select type='text' ref='Venue' >
                <option value=''> -- </option>
                {this.state.venues.map((venues, i) => (
                  <option key={i} value={venues.id} >{venues.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <label>
            Description:
              <textArea placeholder={this.state.Gig.description} ref='description' />
            </label>
          </div>

          <div>
            <button type='submit'> Edit Gig </button>
          </div>

        </form>

        <button onClick={this.openConfirmDeleteCard} >Delete</button>
        <ConfirmDeleteModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} contentLabel={'deleteModal'} delete={this.delete} />

      </div>
    )
  }
}

EditGig.propTypes = {
  params: React.PropTypes.object,
  gig: React.PropTypes.object
}

module.exports = EditGig

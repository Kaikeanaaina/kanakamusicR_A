const React = require('react')
const axios = require('axios')
const { domain } = require('../MainContent/Domain')

class AddNewGig extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: [],
      showSubmitButton: false
    }
    this.showSubmitButton = this.showSubmitButton.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })

    var d = new Date(1991, 6, 21, 10, 30)
    // new Date(year, month, day, hours, minutes)
    console.log(d)

    var D = new Date()

    // months
    console.log(D.getMonth())
    // date
    console.log(D.getDate())
    // day of the week
    console.log(D.getDay())
    // year
    console.log(D.getFullYear())
    // hour
    console.log(D.getHours())
    // minute
    console.log(D.getMinutes())
  }
  showSubmitButton (e) {
    if (this.refs.eventName.value &&
        this.refs.Artists.value &&
        this.refs.Month.value &&
        this.refs.Day.value &&
        this.refs.Year.value &&
        this.refs.Hour.value &&
        this.refs.Minute.value &&
        this.refs.Age.value &&
        this.refs.Promoter.value &&
        this.refs.Venue.value &&
        this.refs.Contact.value) {
      this.setState({
        showSubmitButton: true
      })
    }
  }
  render () {
    let submitButton = null
    if (this.state.showSubmitButton) {
      submitButton = <div><button onClick={this.openModal}> Add Song </button></div>
    }
    return (
      <div>
        <h1> Add New Gig </h1>

        <div>
          <form onSubmit={this.onSubmit}>
            <label>
              EventName:
              <input type='text' ref='eventName' placeholder='event name' onChange={this.showSubmitButton} />
              <br />
            </label>

            <label>
              Artists:
              <select type='text' ref='Artists' placeholder='artists' onChange={this.showSubmitButton}>
                <option value=''> artist here </option>
                {this.state.artists.map((artist, i) => (
                  <option key={i} value={artist.id} >{artist.name}</option>
                ))}
              </select>
              <br />
            </label>

            <div>
              <label>
                Month:
                <select type='number' ref='Month' onChange={this.showSubmitButton} >
                  <option value='' > -- </option>
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
              </label>

              <label>
                Day:
                <select type='number' ref='Day' onChange={this.showSubmitButton} >
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

              <label>
                Year:
                <select type='number' ref='Year' onChange={this.showSubmitButton} >
                  <option value={2016}> current year</option>
                  <option value={2017}> next year</option>
                </select>
              </label>

              <label>
                Hour:
                <select type='number' ref='Hour' onChange={this.showSubmitButton} >
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

              <label>
                Minute:
                <select type='number' ref='Minute' onChange={this.showSubmitButton} >
                  <option value={0}> 00</option>
                  <option value={15}> 15</option>
                  <option value={30}> 30</option>
                  <option value={45}> 45</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Age:
                <select type='number' ref='Age' onChange={this.showSubmitButton} >
                  <option value={0} > All Ages</option>
                  <option value={18} > 18+</option>
                  <option value={21} > 21+</option>
                  <option value={24} > 24+</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Price:
                <select type='number' ref='Price' onChange={this.showSubmitButton} >
                  <option value=''> -- </option>
                  <option value={0}> Free</option>
                  <option value={10}> $10</option>
                  <option value={25}> $25</option>
                  <option value={50}> $50</option>
                  <option value={100}> $100</option>
                  <option value={101}> $100+</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Promoter:
                <select type='text' ref='Promoter' onChange={this.showSubmitButton} >
                  <option value=''> -- </option>
                  <option value='name'>name</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Venue:
                <select type='text' ref='Venue' onChange={this.showSubmitButton} >
                  <option value=''> -- </option>
                  <option value='venue'>venue</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Contact:
                <select type='text' ref='Contact' onChange={this.showSubmitButton} >
                  <option value=''> -- </option>
                  <option value='contact'>contact</option>
                </select>
              </label>
            </div>

          </form>
          {submitButton}

        </div>

      </div>
    )
  }
}

module.exports = AddNewGig

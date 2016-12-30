const React = require('react')

class AddNewVenue extends React.Component {
  render () {
    return (
      <div>
        <h1> add new venue </h1>

        <div>
          <form>

            <label>
              Name:
              <input type='text' placeholder='name' />
            </label>
            <br />

            <label>
              Street Address:
              <input type='text' placeholder='street address' />
            </label>
            <br />

            <label>
              City:
              <input type='text' placeholder='city' />
            </label>
            <br />

            <label>
              Zip Code:
              <input type='text' placeholder='zip code' />
            </label>
            <br />

            <label>
              State:
              <input type='text' placeholder='state' />
            </label>
            <br />

          </form>
        </div>

      </div>
    )
  }
}

module.exports = AddNewVenue

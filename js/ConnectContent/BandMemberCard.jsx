const React = require('react')

const style = {
  backgroundColor: 'rgba(100,100,100,0.2)',
  padding: '5px',
  borderRadius: '5px',
  margin: '5px'
}

const BandMemberCard = (props) => (
  <div style={style}>
    <h1> {props.bandMember.name} </h1>
    <p> {props.bandMember.instrument} </p>
    <p> {props.bandMember.howYouStartedToPlayMusic} </p>
    <p> {props.bandMember.whatMotivatesYouToPlayMusic} </p>
    <p> {props.bandMember.whoDoYouLookUpTo} </p>
    <p> {props.bandMember.additionComments} </p>
  </div>
)

const { object, func } = React.PropTypes

BandMemberCard.propTypes = {
  bandMember: object,
  openEditModal: func,
  openDeleteModal: func
}

module.exports = BandMemberCard

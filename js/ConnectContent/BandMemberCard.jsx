const React = require('react')

const BandMemberCard = (props) => (
  <div>
    <h1> {props.bandMember.name} </h1>
    <p> {props.bandMember.instrument} </p>
    <p> {props.bandMember.howYouStartedToPlayMusic} </p>
    <p> {props.bandMember.whatMotivatesYouToPlayMusic} </p>
    <p> {props.bandMember.whoDoYouLookUpTo} </p>
    <p> {props.bandMember.additionComments} </p>
    <p> {props.bandMember.ArtistId} </p>
  </div>
)

const { object } = React.PropTypes

BandMemberCard.propTypes = {
  bandMember: object
}

module.exports = BandMemberCard

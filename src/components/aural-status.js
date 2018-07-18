import React from 'react';
import {connect} from 'react-redux';

export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {createAuralUpdate(props)}
    </p>
  );
}

function createAuralUpdate(props) {
  console.log(props.guesses)

  // If there's not exactly 1 guess, we want to
  // pluralize the nouns in this aural update.
  const pluralize = props.guesses.length !== 1;

  let  auralStatus = `Here's the status of the game right now: ${props.feedback} You've made ${props.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  if (props.guesses.length > 0) {
    auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${props.guesses.reverse().join(', ')}`;
  };

  console.log("Aural Status is ", auralStatus);
  return auralStatus;
}


export const mapStateToProps = state =>({
  guesses: [...state.guesses],
  feedback: state.feedback,
  correctAnswer: state.correctAnswer 
})

export default connect(mapStateToProps)(AuralStatus);
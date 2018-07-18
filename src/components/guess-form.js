import React from 'react';
import {connect} from 'react-redux';

import {makeGuess, getFeedback} from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let guess = this.input.value;
    this.props.dispatch(makeGuess(guess))
    this.props.dispatch(getFeedback(guess))
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

export const mapStateToProps = state =>({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer 
})

export default connect(mapStateToProps)(GuessForm);
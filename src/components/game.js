import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export function Game (props) {

    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = props.feedback ? `${props.feedback} | Hot or Cold` : 'Hot or Cold';
    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
}

export const mapStateToProps = state =>({
  guesses: [...state.guesses],
  feedback: state.feedback,
  correctAnswer: state.correctAnswer 
})

export default connect(mapStateToProps)(Game);
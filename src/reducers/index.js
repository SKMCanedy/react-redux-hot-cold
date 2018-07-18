import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100) + 1   
}

export const gameReducer = (state=initialState, action)=> {
    console.log("Correct Answer is", state.correctAnswer);

    if (action.type === actions.NEW_GAME) {
        console.log("New Game Action");

        return Object.assign({},state,{
            correctAnswer: Math.round(Math.random() * 100) + 1
        })
    }

    if (action.type === actions.MAKE_GUESS){
        console.log ("Make Guess", action.guess)

        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess]
        })
    }

    if (action.type === actions.GET_FEEDBACK){
        console.log ("Get Feedback on", action.guess)
        let guess = parseInt(action.guess, 10)

        if (isNaN(guess)) {
            return Object.assign({},state,{
                feedback: 'Please enter a valid number' 
            })
        }
          
        const difference = Math.abs(guess - state.correctAnswer);
          
        let feedback;
            if (difference >= 50) {
              feedback = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
              feedback = 'You\'re Cold...';
            } else if (difference >= 10) {
              feedback = 'You\'re Warm.';
            } else if (difference >= 1) {
              feedback = 'You\'re Hot!';
            } else {
              feedback = 'You got it!';
            }
        
        return Object.assign({},state,{
            feedback
        })
    }

    return state;
}
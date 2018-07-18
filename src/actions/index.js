
//Update Aural Status
//Make Guess

export const NEW_GAME = 'NEW_GAME';
export const newGame = ()=>({
    type: NEW_GAME
})

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = (guess)=>({
    type: MAKE_GUESS,
    guess
})

export const GET_FEEDBACK = "GET_FEEDBACK";
export const getFeedback = (guess)=>({
    type: GET_FEEDBACK,
    guess
})
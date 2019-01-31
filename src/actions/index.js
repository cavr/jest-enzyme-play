import axios from "axios";
import {
  getLetterMatchCount
} from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
  RESET_GAME: "RESET_GAME",
  GIVE_UP: "GIVE_UP",
  SHOW_USER_WORD_FORM: "SHOW_USER_WORD_FORM",
  SAVE_USER_WORD: "SAVE_USER_WORD",
  WORD_CHANGE: "WORD_CHANGE"
};

export const guessWord = guessedWord => {
  return function ( dispatch, getState ) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount( guessedWord, secretWord );

    dispatch( {
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    } );

    if ( guessedWord === secretWord ) {
      dispatch( {
        type: actionTypes.CORRECT_GUESS
      } );
    }
  };
};

export const resetGame = () => {
  return dispatch => {
    dispatch( {
      type: actionTypes.RESET_GAME
    } );
    return getSecretWord()( dispatch );
  };
};

export const giveUP = () => {
  return dispatch => {
    dispatch( {
      type: actionTypes.GIVE_UP
    } );
  }
}

export const getSecretWord = () => {
  return dispatch => {
    return axios
      .get( "https://localhost:3030" )
      .then( response => {
        dispatch( {
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data
        } );
      } )
      .catch( () => {
        dispatch( {
          type: actionTypes.SET_SECRET_WORD,
          payload: "PARTY"
        } );
      } );
  };
};

export const showUserWord = () => {
  return ( {
    type: actionTypes.SHOW_USER_WORD_FORM
  } )
}

export const saveUserWord = ( word ) => {
  return ( dispatch ) => {
    debugger;
    dispatch( {
      type: actionTypes.SAVE_USER_WORD,
      payload: word
    } );
    dispatch( {
      type: actionTypes.SET_SECRET_WORD,
      payload: word
    } );
  }
}

export const wordCHange = ( word ) => {
  return {
    type: actionTypes.WORD_CHANGE,
    payload: word
  };
}
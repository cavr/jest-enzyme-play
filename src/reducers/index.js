import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from './guessWordsReducer';
import secretWord from './secretWordReducer';
import giveUp from './giveUpReducer';
import showUserWord from './showUserWordReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  giveUp,
  showUserWord
  
});

import { configureStore } from "../test/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  describe("no guessed word", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = configureStore(initialState);
    });
    test("updates state correctyly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ],
        giveUp:false,
        "showUserWord": {"showForm": false, "word": ""}
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctyly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ],
        giveUp: false,
        "showUserWord": {"showForm": false, "word": ""}
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guessed word", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = configureStore(initialState);
    });
    test("updates state correctyly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ],
        giveUp: false,
        "showUserWord": {"showForm": false, "word": ""}

      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctyly for successful guess", () => {
        store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ],
        giveUp: false,
        "showUserWord": {"showForm": false, "word": ""}
      };
      expect(newState).toEqual(expectedState);
    });
  });
});

import moxios from "moxios";

import {
  configureStore
} from "../../test/testUtils";
import {
  getSecretWord,
  resetGame,
  giveUP,
  actionTypes,
  showUserWord,
  saveUserWord
} from "./";

describe( "getSecretWord action creator", () => {
  beforeEach( () => {
    moxios.install();
  } );
  afterEach( () => {
    moxios.uninstall();
  } );

  test( "adds response word to state", done => {
    const secretWord = "party";
    const store = configureStore();
    store.dispatch( getSecretWord() ).then( () => {
      const newState = store.getState();
      expect( newState.secretWord ).toBe( secretWord );
      done();
    } );
    moxios.wait( () => {
      const request = moxios.requests.mostRecent();
      request.respondWith( {
        status: 200,
        response: secretWord
      } );
    } );
  } );
  test( 'resetGame should set guessedWords to empty ', ( done ) => {
    const oldState = {
      success: true,
      guessedWords: [ {
        guessedWord: 'unsuccessfulGuess',
        letterMatchCount: 3,
        secretWord: 'oldWord',
        giveUp: false,
        "showUserWord": {"showForm": false, "word": ""}
      } ]
    }
    const store = configureStore( oldState );
    store.dispatch( resetGame() ).then( () => {
      const newState = store.getState();
      expect( newState ).toEqual( {
        success: false,
        guessedWords: [],
        secretWord: 'newWord',
        giveUp:false,
        "showUserWord": {"showForm": false, "word": ""}
      } );
      done();
    } );
    moxios.wait( () => {
      const request = moxios.requests.mostRecent();
      request.respondWith( {
        status: 200,
        response: 'newWord'
      } );
    } );
  } )
} );

test('give up', ()=>{
  giveUP()((action)=>{
    expect(action).toEqual({type:actionTypes.GIVE_UP});
  })
});

test('SHOW USER FORM ACTION', ()=>{
  const action = showUserWord();
  expect(action).toEqual({type: actionTypes.SHOW_USER_WORD_FORM})
})

test('SAVE USER WORD', ()=>{
  const action = saveUserWord('hello')((action)=>{
   expect(action.payload).toContain('hello')
  });
})
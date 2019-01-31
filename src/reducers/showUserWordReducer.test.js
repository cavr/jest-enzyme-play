import showUserWordReducer from './showUserWordReducer';
import {
    actionTypes
} from '../actions';

test( 'case no type defined', () => {
    const action = {
        type: ''
    };
    const newState = showUserWordReducer( undefined, action );
    const initialState = {
        showForm: false,
        word: ''
    };
    expect(newState).toEqual(initialState);
} );

test( 'case show Form', () => {
    const action = {
        type: actionTypes.SHOW_USER_WORD_FORM
    };
    const newState = showUserWordReducer( undefined, action );
    const initialState = {
        showForm: true,
        word: ''
    };
    expect(newState).toEqual(initialState);
} );

test( 'case show Form with previous word', () => {
    const action = {
        type: actionTypes.SHOW_USER_WORD_FORM
    };
    const initialState = {
        showForm: false,
        word: 'old'
    };
    const newState = showUserWordReducer( initialState, action );
    const expectedState = {
        showForm: true,
        word: 'old'
    };
    expect(newState).toEqual(expectedState);
} );

test( 'case show Form with previous word', () => {
    const action = {
        type: actionTypes.SAVE_USER_WORD,
        payload: 'holando'
    };
    const initialState = {
        showForm: false,
        word: 'old'
    };
    const newState = showUserWordReducer( initialState, action );
    const expectedState = {
        showForm: false,
        word: 'holando'
    };
    expect(newState).toEqual(expectedState);
} );
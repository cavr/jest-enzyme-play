import {
    actionTypes
} from '../actions';


const initialState = {
    showForm: false,
    word: ''
}
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SHOW_USER_WORD_FORM:
            return { ...state,
                showForm: true
            };
        case actionTypes.SAVE_USER_WORD:
            return { ...state,
                showForm: false,
                word: action.payload
            }
        case actionTypes.WORD_CHANGE:
            return { ...state,
                showForm: true,
                word: action.payload
            }
        default:
            return state;
    }
}
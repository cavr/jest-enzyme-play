import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import success from './reducers';

export const middleWares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore)


export default createStoreWithMiddleware(success);
import { actionTypes } from '../actions';
import giveUpReducer from './giveUpReducer';


test('give up', ()=>{
    const giveUp = giveUpReducer(false, {type: actionTypes.GIVE_UP});
    expect(giveUp).toBe(true);
})
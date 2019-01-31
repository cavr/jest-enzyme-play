import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr,  checkProps  } from "../test/testUtils";
import WordEnter from './WordEnter';

test('WordEnter renders ok', ()=>{
    const enterWordFromUser = jest.fn();
    const wrapper = shallow(<WordEnter display={true} enterWordFromUser={enterWordFromUser} />)
    const wordEnterComponent = findByTestAttr(wrapper, 'component-word-enter');
    expect(wordEnterComponent.length).toBe(1);
})

test('WordEnter renders ok but it hidden ', ()=>{
    const enterWordFromUser = jest.fn();
    const wrapper = shallow(<WordEnter display={false} enterWordFromUser={enterWordFromUser} />)
    const wordEnterComponent = findByTestAttr(wrapper, 'component-word-enter');
    expect(wordEnterComponent.length).toBe(0);
})

test('WordEnter  enterWordFromUser is call when click', ()=>{
    const enterWordFromUser = jest.fn();
    const wrapper = shallow(<WordEnter display={true} enterWordFromUser={enterWordFromUser} />)
    const button = findByTestAttr(wrapper, 'button');
    button.simulate('click');
    expect(enterWordFromUser).toHaveBeenCalled();
  
})



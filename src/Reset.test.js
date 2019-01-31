import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Reset from './Reset';



test('it renders reset component without errors', ()=>{
    const resetAction = jest.fn();
    const wrapper = shallow(<Reset resetAction={resetAction} display />);    
    checkProps(wrapper);
    const resetButton = findByTestAttr(wrapper, 'reset-button');    
    expect(resetButton.length).toBe(1);
});
test('it should render total', ()=>{
    const resetAction = jest.fn();
    const wrapper = shallow(<Reset resetAction={resetAction} display />);    
    const resetButton = findByTestAttr(wrapper, 'reset-button');    
    resetButton.simulate('click')
    expect(resetAction).toHaveBeenCalled();
})


test('it renders reset component without errors but no button', ()=>{
    const resetAction = jest.fn();
    const wrapper = shallow(<Reset resetAction={resetAction} display={false} />);    
    checkProps(wrapper);
    const resetButton = findByTestAttr(wrapper, 'reset-button');    
    expect(resetButton.length).toBe(0);
});
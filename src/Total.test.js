import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Total from './Total';



test('it shows total guesses', ()=>{
    const total = 9;
    const wrapper = shallow(<Total total={total} />);
    const totalComponent = findByTestAttr(wrapper, 'total-component');
    checkProps(wrapper);
    expect(totalComponent.length).toBe(1);
});
test('it should render total', ()=>{
    const total = 9;
    const wrapper = shallow(<Total total={total} />);
    const totalComponent = findByTestAttr(wrapper, 'total-component');
    expect(totalComponent.text()).toContain(total);
})
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import WordInput from "./WondInput";
import { wrap } from "module";

test("renders correctly", () => {
  const props = {
    wordChange: jest.fn(),
    userWord: "word",
    submitWord: jest.fn()
  };
  const wrapper = shallow(<WordInput {...props} />);
  const wordInputComponent = findByTestAttr(wrapper, 'word-input-component');
  expect(wordInputComponent.length).toBe(1);
});

test("wordChange changes correctly", () => {
  const props = {
    wordChange: jest.fn(),
    userWord: "word",
    submitWord: jest.fn()
  };
  const wrapper = shallow(<WordInput {...props} />);
  const input = wrapper.find('input');
  input.simulate('change', {preventDefault: ()=>{}, target:{value:9}});
  expect(props.wordChange).toHaveBeenCalled();
});

test("submitWord correctly", () => {
    const props = {
    wordChange: jest.fn(),
    userWord: "word",
    submitWord: jest.fn()
  };
  const wrapper = shallow(<WordInput {...props} />);
  const button = wrapper.find('button');
  button.simulate('click', {preventDefault: ()=>{}});
  expect(props.submitWord).toHaveBeenCalled();
});

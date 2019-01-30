import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";

import { findByTestAttr, configureStore } from "../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

const setup = (initialState = {}) => {
  const store = configureStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <Input />
    </Provider>
  );
  return wrapper.find("Input");
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });
  test("`guessWord`action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord`action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock
    };

    wrapper = shallow(<UnconnectedInput {...props} />);

    wrapper.instance().inputBox.current = { value: guessedWord}

    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault(){}});
  });
  test("calls `guessWord`when button is clicked", () => {
    expect(guessWordMock).toHaveBeenCalled();
  });
  test('calls `guessWord`with input value as argument', ()=>{
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  test('input vox clears on submit', ()=>{
    expect(wrapper.instance().inputBox
    .current.value).toBe('');
  })
});

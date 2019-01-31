import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { configureStore } from "../test/testUtils";

import App, { UnconnectedApp } from "./App";

const setup = (state = {}) => {
  const store = configureStore(state);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  ).find("App");
  return wrapper;
};

describe("redux properties", () => {
  test("has access to `success`state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("has access to `secretword`state", () => {
    const wrapper = setup();
    const getSecretWord = wrapper.instance().props.getSecretWord;
    expect(getSecretWord).toBeInstanceOf(Function);
  });
});



test("`getSecretWord`runs on App mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
    giveUp: false,
  };

  const wrapper = shallow(
    <UnconnectedApp
      {...props}
    />
  );

  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});

test('Reset button when success is false', ()=>{

  const props = {
    success: true,
    guessedWords: [],
    giveUp: false
  };

  const wrapper = setup(props);

  wrapper.instance().componentDidMount();

  const resetButton = wrapper.find('Reset').children();

  


  expect(resetButton.text()).toContain("New Word");
});

test('when reset button success should be false', ()=>{
  const props = {
    success: true,
    guessedWords: []    ,
    giveUp: false,
  };

  const wrapper = setup(props);

  wrapper.instance().componentDidMount();


  const resetButton = wrapper.find('Reset').children();

  resetButton.simulate('click');

  const successProps = wrapper.instance().props.success;

  expect(successProps).toBe(false);

});

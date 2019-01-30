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
    guessedWords: []
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

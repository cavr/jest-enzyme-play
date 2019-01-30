import moxios from "moxios";
import axios from "axios";

import { configureStore } from "../../test/testUtils";
import { getSecretWord } from "./";

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response word to state", done => {
    const secretWord = "party";
    const store = configureStore();
    store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
      done();
    });
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();     
      request.respondWith({
        status: 200,
        response: secretWord
      });     
    });
  });
});

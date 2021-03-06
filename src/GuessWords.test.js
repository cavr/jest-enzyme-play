import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessWords from "./GuessWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3
    }
  ]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessWords, defaultProps);
});

describe("if there are no word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instruction");
    expect(instructions.text().length).not.toBe(0);
  });
  test('total doesnt appears', ()=>{
    const total = findByTestAttr(wrapper, "total");
    expect(total.length).toBe(0);
  })
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test('renders "guessed word" section', () => {
      const guessedWordsNode = findByTestAttr(wrapper,'guessed-words');
      expect(guessedWordsNode.length).toBe(1);
  });
  test("correct number of guessed word", () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
  test('total  appears', ()=>{
    const total = findByTestAttr(wrapper, "total");  
    expect(total.length).toBe(1);
  })
});

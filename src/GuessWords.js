import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  const { guessedWords } = props;
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instruction">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
        <tr data-test="guessed-word" key={index}>
            <td>{index}</td>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
    )
    );
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
        <div>
          <strong>Total Guessess {props.guessedWords.length}</strong>
        </div>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessWords;

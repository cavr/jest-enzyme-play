import React from "react";
import PropTypes, { bool } from "prop-types";

const WordEnter = props => {
  return props.display ? (
    <div data-test="component-word-enter">
      <button
        className="btn btn-primary"
        data-test="button"
        onClick={props.enterWordFromUser}
      >
        Enter your own secretWord
      </button>
    </div>
  ) : (
    <div />
  );
};

WordEnter.propTypes = {
  display: PropTypes.bool,
  enterWordFromUser: PropTypes.func
};

export default WordEnter;

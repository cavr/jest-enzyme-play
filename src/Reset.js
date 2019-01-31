import React from "react";
import Proptypes from "prop-types";

const Reset = ({ resetAction, display }) => {
  return display ? (
    <button className="btn btn-primary" data-test="reset-button" onClick={resetAction}>
      New Word
    </button>
  ) : (
    <div data-test="reset-component" />
  );
};

Reset.propTypes = {
  resetAction: Proptypes.func.isRequired,
  display: Proptypes.bool.isRequired
};

export default Reset;

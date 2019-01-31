import React from "react";
import PropTypes from "prop-types";

const Total = ({ total }) => {
  return (
    <div data-test="total-component">
      <strong>Total Guesses {total}</strong>
    </div>
  );
};

Total.propTypes = {
  total: PropTypes.number.isRequired
};


export default Total;
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { guessWord, giveUP } from "./actions/index";

class Input extends Component {
  constructor(props){
    super(props);
    this.inputBox = React.createRef();
  }
   submitGuessedWord = (evt) =>{
    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if(guessWord && guessWord.length > 0){
      this.props.guessWord(guessedWord);
    }
    this.inputBox.current.value = '';
  }

  giveUp = (evt) =>{
    evt.preventDefault();
    this.props.giveUP();
  }
  render() {
    const contents = !this.props.display ||  this.props.success  ? <div data-test="box" className="card-body">
    The secret word was {this.props.secretWord}
    </div> : (
      <form className="form-inline">
        <input
          data-test="input-box"
          ref={this.inputBox}
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={this.submitGuessedWord}          
        >Try</button>
        <button
          data-test="give-up-button"
          className="btn btn-secondary ml-1 mb-2"
          onClick={this.giveUp}          
        >Give UP</button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

Input.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string
}

export const UnconnectedInput = Input;

const mapStateToProps = ({ success, giveUp, secretWord }) => {
  return { success, display: !giveUp, secretWord };
};

export default connect(
  mapStateToProps,
  { guessWord, giveUP }
)(Input);

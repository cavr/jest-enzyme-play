import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions/index";

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
  render() {
    const contents = this.props.success ? null : (
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
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

export const UnconnectedInput = Input;

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(Input);

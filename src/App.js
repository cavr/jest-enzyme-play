import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import Input from  './Input';
import "./App.css";

import GuessedWords from "./GuessWords";
import Congrats from "./Congrats";
import { getSecretWord } from "./actions";

class App extends Component {
  componentDidMount(){
      this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Input />
        <Congrats success={this.props.success} />
        <GuessedWords
          guessedWords={this.props.guessedWords}
        />
      </div>
    );
  }
}

export const UnconnectedApp = App;

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);

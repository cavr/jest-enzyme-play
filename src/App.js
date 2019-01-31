import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import "./App.css";

import GuessedWords from "./GuessWords";
import Congrats from "./Congrats";
import Reset from "./Reset";
import WordEnter from "./WordEnter";
import WordInput from "./WondInput";
import {
  getSecretWord,
  resetGame,
  wordCHange,
  saveUserWord,
  showUserWord
} from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Input />
        <Congrats success={this.props.success} />
        <Reset
          display={this.props.success}
          resetAction={() => {
            this.props.resetGame();
          }}
        />
        {this.props.showForm ? (
          <WordInput
            wordChange={this.props.wordCHange}
            userWord={this.props.word}
            submitWord={this.props.saveUserWord}
          />
        ) : (
          <div />
        )}
        <GuessedWords guessedWords={this.props.guessedWords} />
        <WordEnter
          display={this.props.showWordEnter}
          enterWordFromUser={this.props.showUserWord}
        />
      </div>
    );
  }
}

export const UnconnectedApp = App;

const mapStateToProps = state => {
  const {
    success,
    guessedWords,
    secretWord,
    giveUp,
    showUserWord: { word, showForm }
  } = state;

  
  console.log(state);
  const showWordEnter = !success && !giveUp;
  return {
    success,
    guessedWords,
    secretWord,
    giveUp,
    showWordEnter,
    word,
    showForm
  };
};

export default connect(
  mapStateToProps,
  { getSecretWord, resetGame, wordCHange, saveUserWord, showUserWord }
)(App);

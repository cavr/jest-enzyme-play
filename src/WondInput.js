import React from 'react';
import PropTypes from 'prop-types';


const WordInput = (props) => {
    return <label data-test='word-input-component'>
        <span>User Word</span>
        <input type="text" onChange={(e) => {e.preventDefault(); props.wordChange(e.target.value)}} value={props.userWord} />
        <button onClick={()=>{props.submitWord(props.userWord)}} >Submit</button>
    </label>
}


WordInput.propTypes = {
    wordChange: PropTypes.func.isRequired,
    userWord: PropTypes.string,
    submitWord: PropTypes.func.isRequired
}

export default WordInput;
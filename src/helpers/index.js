export function getLetterMatchCount( guessedWord, secretWord ) {
    const secretLetterSet = new Set( secretWord.split( '' ) );
    const guessedLetterSet = new Set( guessedWord.split( '' ) );
    return [ ...secretLetterSet ]
        .filter( ( word ) => guessedLetterSet.has( word ) )
        .length
}
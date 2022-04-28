
import { useState } from 'react';
export default function useWordle(solution) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState(['brave', 'ninja']) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    // format a guess into an array of letter objects 
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => { return { key: letter, color: 'grey' } });
        
        // find any green letters
        formattedGuess.forEach((l, i) => {
            if (solution[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // find any yellow letters
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess;
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        //individually keyup regex
        const keyupRegex = /^[a-zA-Z]$/;
        if (key === 'Enter' && currentGuess.length === 5) {
            if (history.includes(currentGuess)) {
                return alert('You already guessed that!');
            }
            if (turn > 5) {
                return alert('You have already guessed 5 times!');
            }
            const a = formatGuess();
            console.log(a)
        }
        if (key === 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1));
            return;
        }
        if (key.match(keyupRegex)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(currentGuess + key)
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

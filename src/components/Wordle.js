import React, { useEffect } from 'react'
import useWordle from './../hooks/useWordle';

export default function Wordle({ solution }) {
    const { currentGuess, guesses, isCorrect, handleKeyup } = useWordle(solution);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup])
    
    return (
        <>
            <p>solution is {solution}</p>
            <p>current guess - {currentGuess}</p>
        </>
    )
}

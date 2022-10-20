import {React, useContext} from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from '../assets/welldone.svg'

import './GameOver.css'

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='gameover'>
        <h2>Fim de Jogo!</h2>
        <p>Pontução: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas. </p>
        <img src={WellDone} alt="fim do quiz" />
        <button onClick={() => dispatch ({ type: "NEW_GAME"}) }>Reiniciar</button>
    </div>
  )
}

export default GameOver
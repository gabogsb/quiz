import React from 'react'
import './Welcome.css'
import quiz from '../assets/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id='welcome'>
        <h2>Seja Bem-vindo</h2>
        <p>Clique no botão abaixo para iniciar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={quiz} alt="quiz" />
    </div>
  )
}

export default Welcome
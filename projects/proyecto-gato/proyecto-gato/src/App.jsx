import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
//const board = Array(9).fill(null)



/**key es identificador unico en este caso es el index pero mas adelante seran id */
function App() {
  //si hay algo en el localstorage entonces lo toma sino toma el valor por defecto
  //ojo que el render es lento
  const [board, setBoard] = useState(() => {
  const boardFromStorage = JSON.parse(window.localStorage.getItem('board'))
    if (boardFromStorage) return boardFromStorage
    return Array(9).fill(null)})
  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage || TURNS.X
  })
  const [winner, setWinner] = useState(null) //null no ganador, false hay empate, x o o gano


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }


  const updateBoard = (index) => {

    //no actualizamos la posicion si ya esta ocupada
    if (board[index] || winner) return

    //si esta vacia la posicion entonces se actualiza
    const newBoard = [...board]
    //otra forma es structureClone[board]
    newBoard[index] = turn //el usuario que clickeo en el cuadro es el que se pone en el tablero x o o
    //no se puede modificar el estado directamente (board) sino que se debe crear una copia y modificar esa copia (newBoard)
    setBoard(newBoard)  

    //cambiar el turno una vez que juega el usuario
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
      })


    //verificar si hay un ganador
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      //si hay un ganador entonces se actualiza el estado
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      //si no hay ganador pero se termina el juego entonces hay empate
      setWinner(false)
    }
  }
/*
  useEffect(() => {
    console.log('useEffect refresh')
  }) //se ejecuta cada vez que se renderiza el componente

  useEffect(() => {
    console.log('useEffect con array vacio')
  }, []) //se ejecuta solo una vez cuando se renderiza el componente por primera vez

  //useEffect solo cuando cambia ganador
  useEffect(() => {
    console.log('useEffect con winner')
  }, [winner])

  //useEffect solo cuando cambia el turno
  useEffect(() => {
    console.log('useEffect con turn')
  }, [turn])  

  //useEffect solo cuando cambia el tablero
  useEffect(() => {
    console.log('useEffect con board')
  }, [board])


  //useEffect solo cuando cambia el tablero o el turno
  useEffect(() => {
    setGame({board: newBoard, turn: newTurn})
    console.log('useEffect con board o turn')
  }, [board, turn])

*/
  return (
    <main className='board'>
    <h1>gato</h1>
    <button onClick={resetGame}>Reset del juego</button>
    <section className='game'>
      {
        board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
      
    </section>

    <section className='turn'>
      <Square isSelected={turn=== TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn=== TURNS.O}>{TURNS.O}</Square>

    </section>

    <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App

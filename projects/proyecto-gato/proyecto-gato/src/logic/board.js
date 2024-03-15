  import { WINNING_COMBINATIONS } from '../constants'
  //esto es mas logica de js que de react

  //verificar si hay un ganador
  export const checkWinner = (boardToCheck) => {
    for (const combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a] //retorna el ganador
      }
    }
    return null //no hay ganador
  }

  export const checkEndGame = (newBoard) => {
    //revisamos si quedan espacios vacios sino hay empate
    return newBoard.every((square) => square !== null)
  }
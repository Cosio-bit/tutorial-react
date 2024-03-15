  //una forma es tener todas las posibles combinaciones de ganar
  export const WINNING_COMBINATIONS = [
    [0, 1, 2], //horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //diagonal
    [2, 4, 6]
  ]

  export const TURNS = {
    //utilizar emojis
    X: '❌',
    O: '⭕'
  }
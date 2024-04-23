import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./components/Constants.js"
import { checkWinnerFrom,checkEndGame } from "./logic/board.js"
import { Winner } from "./Winner.jsx"
function App() {
  const [board,setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
})
  const [turn,setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X
  })
  const [winner,setWinner] = useState(null)

  
  const updateBoard = (index) =>{
    if (board[index] || winner) return //miramos si ya hay algo en esa posicion, o si ya ha ganado
    //actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiamos el turno al otro jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Guardamos en Almacenamiento Local
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',newTurn)
    //Revisamos sin hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  //resetear el juego
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((_,index) => {
            return(
                  <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  >
                    {board[index]}
                  </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn=== TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn=== TURNS.O}>{TURNS.O}</Square>
      </section>
     <Winner resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App

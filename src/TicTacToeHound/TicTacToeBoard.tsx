import { Button, Grid, Paragraph } from "grommet"
import { useState } from "react"
import calculateWinner from "./rules"
import Square from "./Square"
import './tic-tac-toe-hound-styles.css'

const content = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const TicTacToeBoard = () => {
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [xIsNext, setXIsNext] = useState(true)
    
    const handleClick = (i: number) => {
        if (squares[i] !== '' || calculateWinner(squares) !== undefined) 
            return
        
        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? 'X' : 'O'

        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
   
    return (
        <>
            <Paragraph alignSelf="center">{status}</Paragraph>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

export default TicTacToeBoard;
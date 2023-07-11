import { Button, Paragraph, Table, TableBody } from "grommet"
import { useReducer } from "react"
import Row from './ConnectXRow'
import { checkForWin, deepCloneBoard, generateNewBoard } from "./utils/gameUtils"
// import { Button, Text } from '@chakra-ui/react'
// import * as gameStyles from '../styles/Home.module.css'

const gameReducer = (state: any, action: any) => { 
    switch (action.type) {
        case 'newGame':
            return {
                ...initialGameState,
                board: action.board,
            }
        case 'togglePlayer':
            console.log('togglePlayer')
            return {
                ...state,
                currentPlayer: action.nextPlayer,
                board: action.board
            }
        case 'endGame':
            return {
                ...state,
                gameOver: true,
                message: action.message,
                board: action.board
            }
        case 'updateMessage':
            return {
                ...state,
                message: action.message,
            }
        default:
            throw Error(`Action "${action.type}" is not a valid action.`)
    }
    return state 
}

const initialGameState = {
    player1: 1,
    player2: 2,
    currentPlayer: 1,
    board: [
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      ],
    gameOver: false,
    message: '',
}

export const ConnectXGame = () => {
    const [gameState, dispatchGameState] = useReducer(
        gameReducer,
        initialGameState
    )

    const play = (c: any) => {
        if (gameState.gameOver) {
            dispatchGameState({
                type: 'updateMessage',
                message: 'Game Over <3 Start a new game?'
            })
        }
        let board = deepCloneBoard(gameState.board)

        for (let r = 5; r >= 0; r--){
            if (board[r][c] === undefined){
                board[r][c] = gameState.currentPlayer
                break
            }
        }

        // Check status of board
        let result = checkForWin(board)
        if (result === gameState.player1){
            dispatchGameState({
                type: 'endGame',
                message: 'Player 1 wins!',
                board,
            })
        } else if (result === gameState.player2) {
            dispatchGameState({
                type: 'endGame',
                message: 'Player 2 wins!',
                board,
            })
        } else if (result === 'draw') {
            dispatchGameState({
                type: 'endGame',
                message: 'Looks like a tied game!',
                board,
            })
        } else {
            const nextPlayer =
                gameState.currentPlayer === gameState.player1
                    ? gameState.player2        
                    : gameState.player1
    
            dispatchGameState({ type: 'togglePlayer', nextPlayer, board})
        }

    }

    return (
        <>
            <Button secondary 
                label="New Game" 
                onClick={() => {
                    dispatchGameState({ type: 'newGame', board: generateNewBoard()})
                }}
            />
            <Table>
                <TableBody>
                    {gameState.board.map((row: [], i: number) => (
                        <Row key={i} row={row} play={play} />
                    ))}
                </TableBody>
            </Table>

            <Paragraph>{gameState.message}</Paragraph>
        </>
    )
}
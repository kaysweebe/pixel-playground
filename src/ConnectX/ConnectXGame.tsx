import { Button, Paragraph, Table, TableBody } from "grommet"
import { useReducer } from "react"
import Row from './ConnectXRow'
import { deepCloneBoard } from "./utils/gameUtils"
// import { Button, Text } from '@chakra-ui/react'
// import * as gameStyles from '../styles/Home.module.css'

const gameReducer = (state: any, action: any) => { return state }

const initialGameState = {
    player1: 1,
    player2: 2,
    currentPlayer: 1,
    board: [
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, 1, undefined, undefined, undefined, undefined, undefined],
        [1, 2, 2, 1, undefined, undefined, undefined],
      ],
    gameOver: false,
    message: '',
}

export const ConnectXGame = () => {
    const [gameState, dispatchedGameState] = useReducer(
        gameReducer,
        initialGameState
    )

    const play = (c: any) => {
        let board = deepCloneBoard(gameState.board)

        for (let r = 5; r >= 0; r--){
            if (board[r][c] !== undefined){
                board[r][c] = gameState.currentPlayer
                break
            }
        }
        
    }

    return (
        <>
            <Button secondary label="New Game" />
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
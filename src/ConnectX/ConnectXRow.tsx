import { TableCell, TableRow } from "grommet"
import './connect-x-styles.css'

interface CellProps {
    value: any,
    columnIndex: number,
    play: any
}

const Cell = (props: CellProps) => {
    const { value, columnIndex, play } = props

    let color = 'whiteCircle'
    switch(value) {
        case 1: 
            color = 'redCircle'
            break
        case 2:
            color = 'yellowCircle'
            break
        default:
            break
    }

    return (
        <TableCell 
            className="gameCell" 
            border={{
                color: "#0e6126",
                size: "medium",
                style: "dashed",
                side: "all",
            }}
            onClick={() => {
                play(columnIndex)
            }}
        >
            <div className={color}></div>
        </TableCell>
    )
}


interface RowProps {
    row: [],
    play: any
}


const Row = (props: RowProps) => {
    const { row, play} = props
    return (
        <TableRow>
            {row.map((cell, i) => (
                <Cell key={i} value={cell} columnIndex={i} play={play} />
            ))}
        </TableRow>
    )
}

export default Row


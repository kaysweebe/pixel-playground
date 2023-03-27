import { Button } from "grommet";

interface SquareProps {
    value: string,
    onSquareClick: any
}

const Square = (props: SquareProps): JSX.Element => {
    const {value, onSquareClick} = props

    return (
        <div className="square">
            <Button fill={true} label={value} onClick={onSquareClick} />
        </div>
    )
}

export default Square;
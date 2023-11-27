import React from "react"
import Cell from "./Cell"
import { nanoid } from 'nanoid'
import calculateWays from "../helper"


export default function Maze(props) {
    const getCells = () => {
        const newCells = []

        for(let i=0; i<props.size; i++)
        {
            for(let j=0; j<props.size; j++)
            {
                newCells.push({id: nanoid(), row: i, column: j, isBlocked: false})
            }
        }

        return newCells
    }

    const [cells, setCell] = React.useState(getCells())

    React.useEffect(() => {
        const ans = calculateWays(cells, props.size)
        props.getNumberOfWays(ans)
    }, [cells])

    function block(id, row, column) {
        if((row === 0 && column === 0) || (row === (props.size-1) && column === (props.size-1))) {
            return null
        }

        setCell(oldCell => oldCell.map(cell => {
            return cell.id === id ? 
                {...cell, isBlocked : !cell.isBlocked}
                : cell
        }))
    }

    const renderCells = () => cells.map(cell => 
        <Cell 
            key={cell.id} 
            id={cell.id}
            row={cell.row} 
            column={cell.column} 
            isBlocked={cell.isBlocked}
            size={props.size}
            block={block}
        />)

    const styles = {
            width: "500px",
            height: "500px",
            border: "1px solid black",
            outline: "2px solid black",
            outlineOffset: "5px",
            display: "grid",
            gridTemplateColumns: `repeat(${props.size}, 1fr)`,
            gridTemplateRows: `repeat(${props.size}, 1fr)`
    }

    return(
        <div style={styles}>
            {renderCells()}
        </div>
    )
}
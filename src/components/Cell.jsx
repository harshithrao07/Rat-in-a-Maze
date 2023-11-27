import React from "react";

export default function Cell(props) {
    function handleClick() {
        props.block(props.id, props.row, props.column)
    }

    return(
        <div className={props.isBlocked ? "cell blocked" : "cell"} onClick={handleClick} style={{ flexDirection: props.row === (props.size-1) && props.column === (props.size-1) && "column-reverse"}}>
            {props.row === 0 && props.column === 0 && <img src="/images/mouse.png" className="image" alt="mouse.png" /> }
            <p>R:{props.row}<br />C:{props.column}</p>
            {props.row === (props.size-1) && props.column === (props.size-1) && <img src="/images/cheese.png" className="image" alt="cheese.png" />}
        </div>
    )
}
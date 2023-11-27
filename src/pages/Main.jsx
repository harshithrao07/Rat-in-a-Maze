import React from "react";
import Maze from "../components/Maze";

export default function Main(props) {
    const [ways, setWays] = React.useState([])


    function getNumberOfWays(ans) {
        setWays(ans)
    }

    function renderways() {
        return ways.map((way) => <li key={way}>{way}</li>)
    }


    return (
        <main>
            <div className="mazeParent">
                <Maze getNumberOfWays={getNumberOfWays} size={props.size} />
            </div>
            <h1>Total Number of paths: {ways.length}</h1>
            <h1 style={{ textDecoration: "underline" }}>Different Paths:</h1>
            <div className="ways" style={{ textAlign: "left" }}>
                <ol>
                    {renderways()}
                </ol>
            </div>
        </main>
    )
}
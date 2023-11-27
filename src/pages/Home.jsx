import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate()
    const [size, setSize] = React.useState(null)

    function handleChange(e) {
        const inputValue = e.target.value;
        if (inputValue >= 2 && inputValue <= 5) {
            setSize(inputValue);
        } else {
            alert("Invalid input. Please enter a value between 2 and 5.");
        }
    }

    function handleClick() {
        props.getSize(size)
        if (size != null) {
            navigate("/main")
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Rat in a Maze</h1>
            <label htmlFor="size">Enter the size of NxN matrix (b/w 2 and 5):</label><br />
            <input onChange={handleChange} id="size" type="text" min="2" max="5" autoComplete="off" /><br />
            <button type="number" onClick={handleClick}>Take me there</button>
        </div>
    )
}
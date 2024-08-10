import { useState } from "react";
import Board from "./Board";
import './Game.css'

function Game()
{
    const size = 16;
    const getRandomNumber = () => Math.floor(Math.random() * size**2);
    const[moves, setMoves] = useState(0);
    const [robots, setRobots] = useState([getRandomNumber(),getRandomNumber(),getRandomNumber(), getRandomNumber()]);

    function Reset()
    {
        setMoves(0);
    }

    return(
        <>
        <div className="topbar">
            {moves}
            <button onClick={() => Reset()}>R</button>
        </div>
        <Board setMoves={setMoves} robots={robots} setRobots={setRobots} size={size}/>
        </>
    )
}

export default Game;
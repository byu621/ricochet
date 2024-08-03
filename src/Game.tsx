import { useState } from "react";
import Board from "./Board";
import './Game.css'

function Game()
{
    const[moves, setMoves] = useState(0);

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
        <Board setMoves={setMoves}/>
        </>
    )
}

export default Game;
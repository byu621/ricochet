import { useState } from "react";
import Board from "./Board";
import './Game.css'
import Modal from "./Modal";

function GetMarkerImage(marker: number)
{
    if (marker === 0) return 'portal.png'
    if (marker < 5) return `yellow${marker}.png`
    if (marker < 9) return `red${marker - 4}.png`
    if (marker < 13) return `blue${marker - 8}.png`
    return `green${marker - 12}.png`
}

function Game()
{
    const size = 16;
    const getRobotPosition = () => Math.floor(Math.random() * size**2);
    const [moves, setMoves] = useState(0);
    const [robots, setRobots] = useState([getRobotPosition(),getRobotPosition(),getRobotPosition(), getRobotPosition()]);
    const [originalRobots, setOriginalRobots] = useState(robots);

    const [marker, setMarker] = useState(Math.floor(Math.random() * 17));
    const markerImage = GetMarkerImage(marker);
    const yellowMarkers = [22, 46, 148, 168];
    const redMarkers = [74, 99, 209, 238];
    const blueMarkers = [86, 108, 166, 189];
    const greenMarkers = [25, 33, 217, 227];
    const portal = 199;
    const getMarkerPosition = (marker:number) => {
        if (marker === 0) return portal;
        if (marker < 5) return yellowMarkers[marker-1];
        if (marker < 9) return redMarkers[marker-5];
        if (marker < 13) return blueMarkers[marker-9];
        return greenMarkers[marker-13];
    }
    const getMarkerBall = (marker:number) => {
        if (marker === 0) return 'zball0.png';
        const ballIndex = Math.ceil(marker/4);
        return `zball${ballIndex}.png`
    }
    const markerPosition = getMarkerPosition(marker);
    const isWinFunction = () => {
        if (!robots.includes(markerPosition)) return false;
        if (marker === 0) return true;
        if (marker < 5) return robots[0] === markerPosition;
        if (marker < 9) return robots[1] === markerPosition;
        if (marker < 13) return robots[2] === markerPosition;
        return robots[3] === markerPosition;
    }
    const isWin = isWinFunction();

    function Reset()
    {
        setMoves(0);
        setRobots(originalRobots);
    }

    function OnVictoryClick()
    {
        setMoves(0);
        const newRobots = [getRobotPosition(),getRobotPosition(),getRobotPosition(), getRobotPosition()];
        setRobots(newRobots);
        setOriginalRobots(newRobots);
        setMarker(Math.floor(Math.random() * 17));
    }

    return(
        <>
            <div className="topbar">
                <button onClick={() => Reset()}>R</button>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div className="aspect-ratio-box">
                        <img src={getMarkerBall(marker)} />
                    </div>
                    +
                    <div className="aspect-ratio-box">
                        <img src={markerImage}/>
                    </div>
                </div>
                {moves}
                <Modal/>
            </div>
            <Board 
                setMoves={setMoves} 
                robots={robots} 
                setRobots={setRobots} 
                size={size}
                yellowMarkers={yellowMarkers}
                redMarkers={redMarkers}
                blueMarkers={blueMarkers}
                greenMarkers={greenMarkers}
                portal={portal}
            />
            <div className="victory-container">
                {isWin && <button className='victory' onClick={OnVictoryClick}>Victory</button>}
            </div>
        </>
    )
}

export default Game;
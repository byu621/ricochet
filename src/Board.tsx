import { Dispatch, SetStateAction, useState } from "react";
import Square from "./Square";
import useArrowKeyNavigation from "./useArrowKeyNavigation";
import './Board.css'

interface Props {
    setMoves: Dispatch<SetStateAction<number>>;
    robots: number[];
    setRobots: Dispatch<SetStateAction<number[]>>;
    size: number;
    yellowMarkers: number[]
    redMarkers: number[]
    blueMarkers: number[]
    greenMarkers: number[]
    portal: number;
}

function Board({setMoves, robots, setRobots, size, yellowMarkers, redMarkers, blueMarkers, greenMarkers, portal} : Props) {
    const [selectedSquare, setSelectedSquare] = useState(5);
    const botWalls = [17, 22, 25, 30, 70, 74, 79, 80, 92, 99, 103, 104, 135, 136, 148, 150, 159, 160, 168, 173, 183, 193, 217, 222, 227];
    const rightWalls = [4, 10, 22, 24, 32, 46, 74, 86, 98, 107, 118, 120, 134, 136, 147, 165, 168, 188, 199, 209, 216, 227, 238, 244, 251];



    useArrowKeyNavigation({moveUp, moveDown, moveLeft, moveRight});
    function handleClick(index: number)
    {
        setSelectedSquare(index);
    }

    function moveUp() {
        if (!robots.includes(selectedSquare)) return;
        let robot = selectedSquare

        let next = robot;
        while (next - size >= 0 && !botWalls.includes(next - size) && !robots.includes(next - size)) {
            next -= size;
        }

        if (next !== robot) {
            setMoves((moves) => moves + 1);
            setRobots((currentRobots) =>
                currentRobots.map((currentRobot) => (currentRobot === robot ? next : currentRobot))
            );

            setSelectedSquare(next);
        }
    }

    function moveDown(){
        if (!robots.includes(selectedSquare)) return;
        let robot = selectedSquare
        
        let next = robot;
        while (next + size < size ** 2 && !botWalls.includes(next) && !robots.includes(next + size)) {
            next += size;
        }

        if (next !== robot) {
            setMoves((moves) => moves + 1);
            setRobots((currentRobots) =>
                currentRobots.map((currentRobot) => (currentRobot === robot ? next : currentRobot))
            );

            setSelectedSquare(next);
        }
    }

    function moveLeft(){
        if (!robots.includes(selectedSquare)) return;
        let robot = selectedSquare
        
        let next = robot;
        while (next % size != 0 && !rightWalls.includes(next - 1) && !robots.includes(next - 1)) {
            next -= 1;
        }

        if (next !== robot) {
            setMoves((moves) => moves + 1);
            setRobots((currentRobots) =>
                currentRobots.map((currentRobot) => (currentRobot === robot ? next : currentRobot))
            );
            
            setSelectedSquare(next);
        }
    }

    function moveRight(){
        if (!robots.includes(selectedSquare)) return;
        let robot = selectedSquare

        let next = robot;
        while (next % size != size - 1 && !rightWalls.includes(next) && !robots.includes(next + 1)) {
            next += 1;
        }

        if (next !== robot) {
            setMoves((moves) => moves + 1);
            setRobots((currentRobots) =>
                currentRobots.map((currentRobot) => (currentRobot === robot ? next : currentRobot))
            );

            setSelectedSquare(next);
        }
    }

    return (
        <>
            <div className='container'>
            {Array(size ** 2).fill(null).map((_,i) => 
                <Square 
                    index={i} 
                    handleClick={handleClick} 
                    isSelected={selectedSquare === i} 
                    isRestricted={[119, 120, 135, 136].includes(i)}
                    isPortal={portal === i} 
                    isTopWall={botWalls.includes(i - size)} 
                    isBotWall={botWalls.includes(i)}
                    isRightWall={rightWalls.includes(i)}
                    isLeftWall={rightWalls.includes(i-1)}
                    yellowMarker={yellowMarkers.includes(i) ? yellowMarkers.indexOf(i) + 1 : undefined}
                    redMarker={redMarkers.includes(i) ? redMarkers.indexOf(i) + 1 : undefined}
                    blueMarker={blueMarkers.includes(i) ? blueMarkers.indexOf(i) + 1 : undefined}
                    greenMarker={greenMarkers.includes(i) ? greenMarkers.indexOf(i) + 1 : undefined}
                    ballIndex={robots.includes(i) ? robots.indexOf(i) + 1 : undefined}
                />
            )}
            </div>
        </>
    )
}

export default Board;
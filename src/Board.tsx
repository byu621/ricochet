import { Dispatch, SetStateAction, useState } from "react";
import Square from "./Square";
import useArrowKeyNavigation from "./useArrowKeyNavigation";

interface Props {
    setMoves: Dispatch<SetStateAction<number>>;
    robots: number[];
    setRobots: Dispatch<SetStateAction<number[]>>;
    size: number;
}

function Board({setMoves, robots, setRobots, size} : Props) {
    const [selectedSquare, setSelectedSquare] = useState(5);
    const botWalls = [12];
    const rightWalls = [12];
    const portal = 1;

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
                    isRobot={robots.includes(i)} 
                    isPortal={portal === i} 
                    isTopWall={botWalls.includes(i - size)} 
                    isBotWall={botWalls.includes(i)}
                    isRightWall={rightWalls.includes(i)}
                    isLeftWall={rightWalls.includes(i-1)}
                />
            )}
            </div>
        </>
    )
}

export default Board;
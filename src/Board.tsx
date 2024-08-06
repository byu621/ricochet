import { Dispatch, SetStateAction, useState } from "react";
import Square from "./Square";
import useArrowKeyNavigation from "./useArrowKeyNavigation";

interface Props {
    setMoves: Dispatch<SetStateAction<number>>;
}

function Board({setMoves} : Props) {
    const size = 5;
    const [selectedSquare, setSelectedSquare] = useState(5);
    const [robots, setRobots] = useState([3,4]);
    const walls = [0, 24];
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
        while (next - size >= 0 && !walls.includes(next - size) && !robots.includes(next - size)) {
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
        while (next + size < size ** 2 && !walls.includes(next + size) && !robots.includes(next + size)) {
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
        while (next % size != 0 && !walls.includes(next - 1) && !robots.includes(next - 1)) {
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
        while (next % size != size - 1 && !walls.includes(next + 1) && !robots.includes(next + 1)) {
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
            {Array(25).fill(null).map((_,i) => 
            <Square index={i} handleClick={handleClick} isSelected={selectedSquare === i} isRobot={robots.includes(i)} isWall={walls.includes(i)} isPortal={portal === i}/>
            )}
            </div>
        </>
    )
}

export default Board;
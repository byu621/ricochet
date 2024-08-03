interface Props {
    index: number
    handleClick: (index: number) => void;
    isSelected: boolean
    isRobot: boolean
    isWall: boolean
    isPortal: boolean
}

function Square({index, handleClick, isSelected, isRobot, isWall, isPortal}: Props)
{
    const className = `item ${isSelected ? 'selected' : ''} ${isWall ? 'wall' : ''}`
    return (
        <div className={className} onClick={() => handleClick(index)}>
            {isRobot && <img src="cyndaquil.png"/>}
            {isPortal && <img src="portal.webp"/>}
        </div>
    )
}

export default Square;
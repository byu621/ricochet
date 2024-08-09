import './Square.css'

interface Props {
    index: number
    handleClick: (index: number) => void;
    isSelected: boolean
    isRobot: boolean
    isPortal: boolean
    isTopWall: boolean
    isBotWall: boolean
    isLeftWall: boolean
    isRightWall: boolean
}

function Square({index, handleClick, isSelected, isRobot, isPortal, isTopWall, isBotWall, isLeftWall, isRightWall}: Props)
{
    const className = `item ${isSelected ? 'selected' : ''} ${isTopWall ? 'topWall' : ''} ${isBotWall ? 'botWall' : ''} ${isLeftWall ? 'leftWall' : ''} ${isRightWall ? 'rightWall' : ''}`
    return (
        <div className={className} onClick={() => handleClick(index)}>
            {isRobot && <img src="cyndaquil.png"/>}
            {isPortal && <img src="portal.webp"/>}
        </div>
    )
}

export default Square;
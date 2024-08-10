import './Square.css'

interface Props {
    index: number
    handleClick: (index: number) => void;
    isSelected: boolean
    isPortal: boolean
    isTopWall: boolean
    isBotWall: boolean
    isLeftWall: boolean
    isRightWall: boolean
    yellowMarker?: number
    redMarker?: number
    blueMarker?: number
    greenMarker?: number
    ballIndex?: number
}

function Square({index, handleClick, isSelected, isPortal, isTopWall, isBotWall, isLeftWall, isRightWall, yellowMarker, redMarker, blueMarker, greenMarker, ballIndex}: Props)
{
    const className = `item ${isSelected ? 'selected' : ''} ${isTopWall ? 'topWall' : ''} ${isBotWall ? 'botWall' : ''} ${isLeftWall ? 'leftWall' : ''} ${isRightWall ? 'rightWall' : ''}`
    return (
        <div className={className} onClick={() => handleClick(index)}>
            {ballIndex && <img src={`zball${ballIndex}.png`}/>}
            {isPortal && <img src="portal.webp"/>}
            {yellowMarker && <img src={`yellow${yellowMarker}.png`}/>}
            {redMarker && <img src={`red${redMarker}.png`}/>}
            {blueMarker && <img src={`blue${blueMarker}.png`}/>}
            {greenMarker && <img src={`green${greenMarker}.png`}/>}
        </div>
    )
}

export default Square;
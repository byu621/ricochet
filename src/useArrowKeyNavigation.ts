import { useEffect } from 'react';

// Define a type for the arrow key handlers
type ArrowKeyHandlers = {
    moveUp: () => void;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
};

// Custom hook that accepts arrow key handler functions
function useArrowKeyNavigation({
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
}: ArrowKeyHandlers) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                    moveUp();
                    break;
                case 'ArrowDown':
                    moveDown();
                    break;
                case 'ArrowLeft':
                    moveLeft();
                    break;
                case 'ArrowRight':
                    moveRight();
                    break;
                default:
                    break; // Ignore other keys
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [moveUp, moveDown, moveLeft, moveRight]); // Dependencies for the useEffect hook
}

export default useArrowKeyNavigation;

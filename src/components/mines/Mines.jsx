import React, { useState, useEffect } from 'react';

const Mines = ({ rows, cols }) => {
    const [minesArray, setMinesArray] = useState([]);
    const [revealedArray, setRevealedArray] = useState([]);
    const [minesCount, setMinesCount] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);

    useEffect(() => {
        resetGame();
    }, [rows, cols]);

    const resetGame = () => {
        const emptyArray = Array.from({ length: rows }, () => Array(cols).fill(null));
        setMinesArray(emptyArray);
        setRevealedArray(Array.from({ length: rows }, () => Array(cols).fill(false)));
        setGameOver(false);
        setIsGameWon(false);
        placeMines(emptyArray);
    };

    const placeMines = (newMinesArray) => {
        let minesPlaced = 0;
        while (minesPlaced < minesCount) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);
            if (newMinesArray[row][col] !== '💣') {
                newMinesArray[row][col] = '💣';
                minesPlaced++;
            }
        }
        setMinesArray(newMinesArray);
    };

    const countAdjacentMines = (row, col) => {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newRow = row + i;
                const newCol = col + j;
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    minesArray[newRow][newCol] === '💣'
                ) {
                    count++;
                }
            }
        }
        return count;
    };

    const handleCellClick = (row, col) => {
        if (gameOver || revealedArray[row][col]) return;

        if (minesArray[row][col] === '💣') {
            setGameOver(true);
            alert("Game Over! You clicked on a mine.");
            return;
        }

        revealCell(row, col);

        // Check for win condition
        if (checkWinCondition()) {
            setIsGameWon(true);
            alert("Congratulations! You've won!");
        }
    };

    const revealCell = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || revealedArray[row][col]) {
            return;
        }

        const newRevealedArray = [...revealedArray];
        newRevealedArray[row][col] = true; // Mark cell as revealed

        const adjacentMines = countAdjacentMines(row, col);
        minesArray[row][col] = adjacentMines > 0 ? adjacentMines : null; // Store the count or null

        setRevealedArray(newRevealedArray);

        // If there are no adjacent mines, recursively reveal surrounding cells
        // if (adjacentMines === 0) {
        //     for (let i = -1; i <= 1; i++) {
        //         for (let j = -1; j <= 1; j++) {
        //             if (i !== 0 || j !== 0) {
        //                 revealCell(row + i, col + j);
        //             }
        //         }
        //     }
        // }
    };

    const checkWinCondition = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (minesArray[i][j] !== '💣' && !revealedArray[i][j]) {
                    return false; // If any non-mine cell is not revealed, game not won
                }
            }
        }
        return true; // All non-mine cells revealed
    };

    return (
        <div className='flex items-center justify-center flex-col gap-4 py-5'>
            <h1 className='text-3xl font-bold text-lime-500 text-center'>Mines</h1>
            <div>
                <div className='h-full w-80 border border-gray-700 p-3'>
                    <select onChange={(e) => setMinesCount(Number(e.target.value))}>
                        <option value='3'>3</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                    </select>
                </div>
                <div className="minesweeper-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 100px)` }}>
                    {minesArray.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`cell border border-gray-500 ${revealedArray[rowIndex][colIndex] ? 'bg-gray-300' : 'bg-slate-600'}`}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                {revealedArray[rowIndex][colIndex] ? (cell === null ? '' : cell) : null} {/* Show cell content if revealed */}
                            </div>
                        ))
                    )}
                </div>
                {gameOver && <button onClick={resetGame} className="mt-4 bg-red-500 text-white p-2 rounded">Reset Game</button>}
            </div>
        </div>
    );
};

export default Mines;

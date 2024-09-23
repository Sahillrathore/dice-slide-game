import React, { useState } from 'react';

const Mines = ({ rows, cols }) => {
    const [minesArray, setMinesArray] = useState(
        Array.from({ length: rows }, () => Array(cols).fill(null))
    );

    const handleCellClick = (row, col) => {
        console.log(`Cell clicked: ${row}, ${col}`);
        // Add game logic here (e.g., reveal a cell, check for mines)
    };

    return (
        <div className='flex items-center justify-center flex-col gap-4 py-5'>

            <h1 className='text-3xl font-bold text-lime-500 text-center'>Mines</h1>

            <div className="minesweeper-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 100px)` }}>
                {minesArray.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="cell border border-gray-500 bg-slate-600"
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                            style={{
                                width: '100px',
                                height: '100px',
                                // border: '1px solid #ccc',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            {cell} {/* You can render cell content here */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Mines
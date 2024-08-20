import React, { useState } from 'react'
import useDiceContext from '../../context/dicecontext';

const Dicerange = () => {

    const {sliderValue, setSliderValue, winValue, setwinValue, prevBets, setPrevBets, diceButtonClick} = useDiceContext()    

   
    const changeHandler = (e) => {
        const value = e.target.value;
        setwinValue(value)
    }
    
  return (
    <>
        <section className='bg-gray-800 px-8 py-8 '>
            {/* <h1 className='text-3xl font-bold text-lime-500 text-center'>Dice Game</h1> */}

            <div className="range-game-container w-2/4 m-auto mt-12">

                <div className="w-full dice-container transition-all">

                    <div className={`dice border-gray-700 border w-12 font-bold rounded-xl bg-gradient-to-r from-white to-zinc-300 text-center py-2 ${sliderValue > winValue? "text-green-600" : "text-red-600"}`}>
                        {sliderValue}
                    </div>
                </div>

                <div className="input-container h-8 flex items-center px-0.5 bg-zinc-900 rounded-lg">
                    <input type="range" name="dicebar" id="" className='w-full cursor-pointer thumb-only' value={winValue} onChange={changeHandler}/>
                </div>

                <div className="range-numbers text-white/90 w-full flex justify-between">
                    <span>0</span>
                    <span className='text-orange-400 font-medium'>Win Over : {winValue}</span>
                    <span>100</span>
                </div>
            </div>
        </section>

        <section className='w-2/4 flex justify-between m-auto'>
            <div className="button-controls m-auto w-2/4">
                <button className='bg-red-600 hover:bg-red-500 font-semibold text-gray-900 px-6 py-2 rounded-md' onClick={diceButtonClick} >Play</button>
            </div>

            <div className="previous-results m-auto w-2/4 text-zinc-200 font-medium flex justify-end">
                {
                    prevBets?.slice(0,5).map((item, i) => (
                        
                        <span key={i} className={`bg-zinc-700 py-2 w-8 text-center backdrop-blur-sm inline-block rounded-md m-1 ${i === prevBets.length - 1 ? "" : ""} ${item > winValue? "text-green-300" : "text-red-500"} `}>{item}</span>
                            
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Dicerange

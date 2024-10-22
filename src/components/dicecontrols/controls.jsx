import React, { useState } from 'react'

const Controls = () => {
    const [loading, setLoading] = useState(false);

    const handler = () => {
        const randomValue = Math.floor(Math.random()*100)+1;
        console.log(randomValue);
    }
  return (
    <>
        <section className='w-full'>
            <div className="button-controls m-auto w-2/4">
                <button className='bg-green-600 hover:bg-green-500 font-semibold text-gray-900 px-6 py-2 rounded-md'  onClick={handler}>Play</button>

            </div>
        </section>
    </>
  )
}

export default Controls
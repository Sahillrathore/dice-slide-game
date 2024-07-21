import { useState } from 'react'
import Dicerange from './components/diceslider/Dicerange'
import Controls from './components/dicecontrols/controls'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Wheel from './components/wheelgame/Wheel'
import { diceContext } from './context/dicecontext'
// import { diceprovider } from './context/dicecontext'

function App() {

    const [sliderValue, setSliderValue] = useState(20);
    const [winValue, setwinValue] = useState(40);
    const [prevBets, setPrevBets] = useState([]);


    const diceButtonClick = () => {
        const randomValue = Math.floor(Math.random()*100)+1;
        setSliderValue(randomValue);

        const diceContainer = document.querySelector('.dice-container');

        setPrevBets(prevBets => [...prevBets, randomValue])
        // console.log(prevBets);
        if(prevBets.length>=5) {
            prevBets.shift();
        }

        if (randomValue >= 31 && randomValue < 75) {
            diceContainer.style.paddingLeft = randomValue - 4 + '%';

        } else if (randomValue>=75) {
            diceContainer.style.paddingLeft = randomValue - 5 + '%';

        } else if (randomValue>4 && randomValue<=30) {
            diceContainer.style.paddingLeft = randomValue - 3 + '%';
        }
         else {
            diceContainer.style.paddingLeft = randomValue - 1 + '%';
        }

    }

  return (
    

      <diceContext.Provider value={{sliderValue, setSliderValue, winValue, setwinValue, prevBets, setPrevBets, diceButtonClick}} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='dice' element={<Dicerange/>} />
            <Route path='wheel' element={<Wheel/>} />
          </Routes>
        </BrowserRouter>
      </diceContext.Provider>
    
  )
}

export default App

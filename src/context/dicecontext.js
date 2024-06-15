import { createContext, useContext } from "react";

export const diceContext = createContext({
    diceButtonClick: ()=>{},
    setRange: ()=>{},

});

export const diceProvider = diceContext.Provider;

const useDiceContext = () => {
    return useContext(diceContext);
}

export default useDiceContext;
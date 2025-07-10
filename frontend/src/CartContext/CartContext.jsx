import React, { createContext } from "react";
import { useContext } from "react";

const CardContext = createContext();

export const CartProvider = ({ children }) => {


    return(
        <CardContext.Provider value={{

        }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCart = () => useContext(CardContext);
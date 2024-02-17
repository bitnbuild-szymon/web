import { createContext, useState, useContext } from "react";

const NavbarContext = createContext();

const NavbarContextProvider = ({children}) => {
    const [currentButton, setCurrentButton] = useState('home');

    return (
        <NavbarContext.Provider value={{ currentButton: currentButton, setCurrentButton: setCurrentButton}}>
            {children}
        </NavbarContext.Provider>
    )
}

const useNavbarContext = () => {
    return useContext(NavbarContext);
}

export {NavbarContextProvider, useNavbarContext};
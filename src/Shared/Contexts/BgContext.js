import { createContext, useState } from "react";


export const HackBgContext = createContext();

export const HackBgProvider = ({children}) =>{
    const [activeHackBg, setActiveHackBg] = useState(false);

    const toggleHackBg = () =>setActiveHackBg(!activeHackBg);

    return (
        <HackBgContext.Provider value={[{activeHackBg}, toggleHackBg]}>
            {children}
        </HackBgContext.Provider>
    )
};
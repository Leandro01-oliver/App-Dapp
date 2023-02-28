import { useState } from "react"
import { GlobalContext } from "./GlobalContext"

interface props {
    children: React.ReactNode
}


export const GlobalProvider = ({ children }: props) => {


    const [darkMode, setDarkmode] = useState(false);

    const handlerDarkMode = () => setDarkmode(!darkMode);


    return (
        <GlobalContext.Provider value={
                                        { 
                                            handlerDarkMode, 
                                            darkMode
                                        }
                                      }>
            {children}
        </GlobalContext.Provider>
    )
}
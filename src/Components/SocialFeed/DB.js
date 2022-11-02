import {createContext} from 'react';
import db from "./../../DB.json";

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    return <UserContext.Provider value={db}>{children}</UserContext.Provider>
}

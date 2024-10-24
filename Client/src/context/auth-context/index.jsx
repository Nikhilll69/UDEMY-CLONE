import { createContext } from "react";


export const AuthContext=createContext(null);

export default function AuthProvider({children}){
    return <AuthContext.Provider value={(null)}>{children}</AuthContext.Provider>
}
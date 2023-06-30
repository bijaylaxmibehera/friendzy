import axios from "axios";
import {createContext,useEffect,useState} from "react";

export const AuthContext=createContext();

export function AuthProvider({children}){
    return (
        <>
        <AuthContext.Provider>{children}</AuthContext.Provider>
        </>
    )
}
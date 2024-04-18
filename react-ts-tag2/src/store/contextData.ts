import React, { createContext } from "react";


export const UserContext = createContext<{user: boolean; setUser: React.Dispatch<React.SetStateAction<{user: boolean}>>; }>({user:false, setUser:()=>{}});

export const ThemeContext = createContext<string | null>(null)
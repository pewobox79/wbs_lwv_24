import { useState } from "react";


export function useLocalStorage(key: string) {


    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : null
    });


    const setStoredValue =(newValue:unknown)=>{
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return { value, setStoredValue }

}


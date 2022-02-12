import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialState: number) {
    const [state, setState] = useState(() => {
        const retrieve = localStorage.getItem(key);
        return retrieve ? JSON.parse(retrieve) : initialState;
    });

    useEffect(() => {
        if (state !== null && state !== undefined) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [state]);

    return [state, setState];
}

export default useLocalStorage;

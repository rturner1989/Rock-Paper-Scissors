import React, { useContext, useState } from "react";

type ContextType = {};

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useMainContext = () => {
    return useContext(AppContext) as ContextType;
};

export default AppProvider;

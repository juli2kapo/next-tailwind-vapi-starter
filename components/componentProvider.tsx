"use client"

import React from "react";
import { createContext, useState } from "react";

interface LanguageContextProps {
    currentLanguage: string;
    setCurrentLanguage: (lang: string) => void;
  }

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)
export default function LanguageProvider(props:{children:React.ReactNode}){
    const [currentLanguage, setCurrentLanguage] = useState("ES");

    return(
        <LanguageContext.Provider value={{currentLanguage,setCurrentLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (!context) {
      throw new Error('useLanguage must be used within an LanguageProvider');
    }
    return context;
  };    
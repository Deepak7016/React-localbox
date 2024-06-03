import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext();

export function ThemeContextProvider({children}){
     const [theme,setheme]=useState("light")

     const Togglethem=()=>{
      setheme(theme=="light"?"dark":"light")
     }
   return(
      <ThemeContext.Provider value={{theme,Togglethem}}>
       {children}
      </ThemeContext.Provider>
   )
}
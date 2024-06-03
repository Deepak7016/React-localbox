import React, { createContext, useState } from 'react';

export const ToogleContext = createContext();

export function ToogleContextProvider({children}) {
   const [user, setUser] = useState(false);

   const Login=()=>{
      setUser(true)
   }

   const Logout=()=>{
      setUser(false)
   }

   return (
      <ToogleContext.Provider value={{ user,Login,Logout }}>
         {children}
      </ToogleContext.Provider>
   );
}
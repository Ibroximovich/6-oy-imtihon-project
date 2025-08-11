


import { createContext } from "react";
import { useContext, useState } from "react";



export const Context = createContext()

export const SearchInput =({children}) =>{
    const [search,setSearch] = useState()

    function SearchInput(e){
        setSearch(e)
    }

   return(
      <Context.Provider value ={{search,SearchInput}}>
            {children}
    </Context.Provider>
   )
}
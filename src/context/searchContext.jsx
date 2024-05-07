import { createContext, useState } from "react";

export const SearchCon = createContext(null)

const SearchProvider = ({children}) => {
  const [searchMovie,setSearchMovie] = useState('')

  return (
    <SearchCon.Provider value={{searchMovie,setSearchMovie}}>
      {children}
    </SearchCon.Provider>
  )
}

export default SearchProvider
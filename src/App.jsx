import React from "react";
import Banner from "./components/banner/banner";
import NavBar from "./components/navBar/navBar";
import RowPost from "./components/rowPosts/rowPost";
import { originals,action,trending,RomanceMovies,HorrorMovies } from "./url";
import SearchProvider from "./context/searchContext";


function App(){
  return (
      <div>
        <SearchProvider>
        <NavBar />
        <Banner />
        <RowPost url={originals} title ='Netflix Originals'/>
        <RowPost url={trending} title ='Trending' isSmall/>
        <RowPost url={action} title ='Action' isSmall/>
        <RowPost url={RomanceMovies} title ='Romance Movies' isSmall/>  
        <RowPost url={HorrorMovies} title ='Horror Movies ' isSmall/>
        </SearchProvider>  
      </div>   
      
  )
}

export default App
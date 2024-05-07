import React from "react";
import { useContext } from "react";
import { SearchCon } from "../../context/searchContext";

// For Nav
const NavBar = () => {

  const { setSearchMovie } = useContext(SearchCon)

  return (
    <div className="navBar">
      <img
        className="logoImg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        />
      <div class="navbarItems">
      
      </div>
    
      <input className="searchInput" type="text" placeholder="Search Movie" onChange={(e)=>setSearchMovie(e.target.value)}/>
  
      <img  
        className="avatarImg"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatarLogo"
      />
    </div>
  );
};

export default NavBar;

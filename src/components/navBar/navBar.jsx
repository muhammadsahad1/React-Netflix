import React from "react";

// For Nav
const NavBar = () => {
  return (
    <div className="navBar">
      <img
        className="logoImg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        />
      <div class="navbarItems">
        <a className="home">Home</a>
        <a className="shows">TV Shows</a>
        <a className="movies">Movies</a>
      </div>
    
      <input className="searchInput" type="text" placeholder="Search Movie"/>
  
      <img  
        className="avatarImg"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatarLogo"
      />
    </div>
  );
};

export default NavBar;

import React from "react";
import '../StyleSheets/MainBody.css'
import Logo from "../Components/Logo";
import SearchBox from "../Components/SearchBox.js";



const MainBody = () => {

  return (
    <div className="mainBody">
      <Logo />
      <SearchBox />
    </div>
  );

};

export default MainBody;

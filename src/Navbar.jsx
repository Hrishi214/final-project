import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (

      <ul>
  <li><a><Link to="/">Movies </Link></a></li>
  <li><a ><Link to="/about">Cartoon</Link></a></li>
  <li><a><Link to="/contact">Contact </Link></a></li>
  
 
 {/* <p><Link to="/error">Erorr </Link></p>  <li><a><p><Link to="/error">Error</Link></p></a></li>*/}
 
  
</ul>
    );
  };

  export default Navbar; 
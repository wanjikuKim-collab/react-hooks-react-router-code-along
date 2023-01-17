import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles={
    display: "inlin-block",
    width:"50px",
    padding: "12PX",
    margin:"0 6px 6px",
    background: "blue",
    textDecoration:"none",
    color:"white"
  };
  
  /* define the NavBar component */
  function NavBar() {
    return (
      <div>
         {/* set exact so it knows to only set activeStyle when route is deeply equal to link  */}
          {/* add styling to Navlink  */}
          {/* add prop for activeStyle */}
        <NavLink exact to="/" style={linkStyles} activeStyle={{background : "darkblue",}}>Home</NavLink>
        <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue"}}>About</NavLink>
        <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue"}}>LOgin</NavLink>
        
      </div>
    );
  }

  export default NavBar
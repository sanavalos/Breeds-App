import React from "react";
import { NavLink } from "react-router-dom";
import { NotFoundStyle } from "./Styles";
import cheems from "../images/cheems.png";

function NotFound() {
  return (
    <NotFoundStyle>
      <div>
        <h1>404 WOOF!</h1>
        <h2>You got lost! Nothing to be ashamed of...</h2>
        <NavLink to='/home' className='button'>
        <div className='buttonEffect'>
              <p>
                BACK TO THE PACK
                <span></span><span></span><span></span><span></span>
              </p>
        </div>
      </NavLink>
      </div>
      <img src={cheems} alt="Cheems error" />
    </NotFoundStyle>
  );
}

export default NotFound;

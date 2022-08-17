import React from "react";
import { HeaderStyle, HeaderButtons, HeaderLink } from "./Styles";
import SearchBar from "./SearchBar";
import face from "../images/dog_face.png";

function Header({ showSearch }) {
  return (
    <HeaderStyle>
      {showSearch ? (
        <SearchBar />
      ) : (
        <HeaderLink to="/">
          <HeaderButtons>
            {" "}
            LANDING
            <img src={face} alt="favorite heart" />{" "}
          </HeaderButtons>
        </HeaderLink>
      )}
      <ul>
        <li>
          <HeaderLink to="/home">
            <HeaderButtons>HOME</HeaderButtons>
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/create">
            <HeaderButtons>CREATE</HeaderButtons>
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/favorites">
            <HeaderButtons>FAVORITES</HeaderButtons>
          </HeaderLink>
        </li>
      </ul>
    </HeaderStyle>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardStyle, TemperamentsStyle } from "./Styles";
import paw from "../images/dog_paw_art.png";
import heart from "../images/favorite.png";
import { addFavorite } from "../actions";
import { useState } from "react";

function Card({
  image,
  id,
  name,
  temperaments,
  weight_min,
  weight_max,
  favorite,
}) {
  const dispatch = useDispatch();

  const [showHeart, setHeart] = useState(false);

  const handleFavorite = () => {
    dispatch(addFavorite(id));
    setHeart(true);
  };

  return (
    <CardStyle>
      <NavLink to={`/home/${id}`} className="link">
        <img src={image ? image : paw} alt={`${name}'s breed example`} />
      </NavLink>
      <div className="info">
        <div className="name">
          <h1>{name}</h1>
          {showHeart || favorite ? (
            <img src={heart} alt="favorite heart" />
          ) : (
            <button onClick={() => handleFavorite()}>Add to fav</button>
          )}
        </div>
        <div className="weight">
          <h4>METRICS</h4>
          <div>
            <span>Min Weight:</span> {weight_min}
          </div>
          <div>
            <span>Max Weight:</span> {weight_max}
          </div>
        </div>
      </div>
      <TemperamentsStyle>
        {typeof temperaments === "object"
          ? `${temperaments.join(", ")}`
          : `${temperaments}`}
      </TemperamentsStyle>
    </CardStyle>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions";
import { useParams } from "react-router-dom";
import Header from "./Header";
import NoDog from "./NoDog";
import paw from "../images/dog_paw_art.png";
import { DetailsStyle } from "./Styles";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams((state) => state.detail);

  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1500);
  }, []);

  const myDog = useSelector((state) => state.details);

  return (
    <div>
      <div>
        <Header />
        <DetailsStyle>
          {myDog.id ? (
            <div className="borderDetails">
              <div>
                <h1>{myDog.name}</h1>

                <div className="measures">
                  <div className="amount">
                    <h3>Height</h3>
                    <p>Minimum: {myDog.height_min}</p>
                    <p>Maximum: {myDog.height_max}</p>
                  </div>

                  <div className="amount">
                    <h3>Weight</h3>
                    <p>Minimum: {myDog.weight_min}</p>
                    <p>Maximum: {myDog.weight_max}</p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={myDog.image ? myDog.image : paw}
                  alt={`${myDog.name}'s breed example`}
                ></img>
                <p>Life Span: {myDog.span}</p>
              </div>

              <ul>
                {!myDog.createdInDb
                  ? myDog.temperaments.split(", ").map((t) => (
                      <li className="tempsList" key={t}>
                        <p>{t}</p>
                      </li>
                    ))
                  : myDog.temperaments.map((t) => (
                      <li className="tempsList" key={t}>
                        <p>{t}</p>
                      </li>
                    ))}
              </ul>
            </div>
          ) : (
            isDisplayed && <NoDog />
          )}
        </DetailsStyle>
      </div>
    </div>
  );
}

export default Details;

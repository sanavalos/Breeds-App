import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  sortDogsByWeight,
  sortDogsByName,
  filterDogsByDb,
  filterDogsByTemperament,
} from "../actions";
import Header from "./Header";
import Card from "./Card";
import Pagination from "./Pagination";
import ScrollUp from "./ScrollUp";
import NoDog from "./NoDog";
import { HomeStyle } from "./Styles";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const temperamentsApi = useSelector((state) => state.temperaments);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1500);
  }, []);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allDogs]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [order, currentPage]);

  const handleClear = (e) => {
    e.preventDefault();
    window.location.reload(true);
    setTimeout(() => {
      setOrder("All sorts and filters were cleared successfully!");
    }, 1500);
  };

  const handleSortWeight = (e) => {
    e.preventDefault();
    dispatch(sortDogsByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(
      e.target.value !== "all" ? `Sorted by ${e.target.value} weight` : null
    );
  };

  const handleSortName = (e) => {
    e.preventDefault();
    dispatch(sortDogsByName(e.target.value));
    setCurrentPage(1);
    setOrder(
      e.target.value !== "all" ? `Sorted by ${e.target.value} name` : null
    );
  };

  const handleFilterDb = (e) => {
    e.preventDefault();
    dispatch(filterDogsByDb(e.target.value));
    setOrder(
      e.target.value !== "all"
        ? `Filtered by ${e.target.value}`
        : `Showing breeds from API and DB`
    );
  };

  const handleFilterTemp = (e) => {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
    setOrder(
      e.target.value !== "all"
        ? `Filtered by ${e.target.value}`
        : `Showing dogs with all temperaments`
    );
  };

  return (
    <HomeStyle>
      <Header showSearch={true} />
      <div className="content">
        <div className="buttons">
          <button onClick={(e) => handleClear(e)} className="reset">
            Reset APP
          </button>

          <div className="section">
            <h3>SORT BY</h3>
            <select onChange={(e) => handleSortWeight(e)}>
              <option value=""> --WEIGHT-- </option>
              <option value="ascendant">Ascendant Weight</option>
              <option value="descendant">Descendant Weight</option>
            </select>

            <select onChange={(e) => handleSortName(e)}>
              <option value=""> --NAME-- </option>
              <option value="ascendant">Ascendant Name</option>
              <option value="descendant">Descendant Name</option>
            </select>
          </div>

          <div className="section">
            <h3>FILTER BY</h3>
            <select onChange={(e) => handleFilterTemp(e)}>
              <option value="all">--TEMPERAMENTS--</option>
              {temperamentsApi.map((t) => (
                <option value={t.name} key={t.name}>
                  {t.name}
                </option>
              ))}
            </select>

            <select onChange={(e) => handleFilterDb(e)}>
              <option value="all">--CREATION--</option>
              <option value="api">API Breed</option>
              <option value="db">DataBase Breed</option>
            </select>
          </div>
        </div>

        <div>
          <Pagination
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pagination={pagination}
          />
          <div className="box">
            <h3 className="setting">{order}</h3>
          </div>
          <div className="cards">
            {currentDogs.length > 0
              ? currentDogs.map((dog) => {
                  return (
                    <Card
                      key={dog.id}
                      id={dog.id}
                      image={dog.image}
                      name={dog.name}
                      temperaments={dog.temperaments}
                      weight_min={dog.weight_min}
                      weight_max={dog.weight_max}
                    />
                  );
                })
              : isDisplayed && <NoDog />}
          </div>
          <Pagination
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pagination={pagination}
          />
        </div>
      </div>
      <ScrollUp />
    </HomeStyle>
  );
}

export default Home;

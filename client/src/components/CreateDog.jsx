import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../actions";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { CreateContent, CreateStyle, CreateForm } from "./Styles";

function CreateDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperamentsApi = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    span: "",
    weight_min: "",
    weight_max: "",
    height_min: "",
    height_max: "",
    image: "",
    temperaments: [],
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (input.name === "") {
      setError("You must name the breed");
    } else if (input.temperaments.length === 0) {
      setError("You must pick at least 1 temperamnt");
    } else if (
      input.span.includes("-") && input.span.split("-")[0] === "" ? true : false
    ) {
      setError("Life span must be a positive number");
    } else if (
      input.span.includes("-")
        ? Number(input.span.split("-")[0]) > Number(input.span.split("-")[1])
        : false
    ) {
      setError("Life span is not correct");
    } else if (
      input.weight_min === "" ||
      input.weight_min < "1" ||
      input.weight_max === "" ||
      input.weight_min >= input.weight_max
    ) {
      setError("Something is wrong with the weight");
    } else if (
      input.height_min === "" ||
      input.height_min < "1" ||
      input.height_max === "" ||
      input.height_min >= input.height_max
    ) {
      setError("Something is wrong with the height");
    } else {
      setError("");
    }
  }, [input]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      temperaments: [...input.temperaments, e.target.value],
    });
  };

  const handleDelete = (t) => {
    setInput({
      ...input,
      temperaments: input.temperaments.filter(
        (temperament) => temperament !== t
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error !== "") {
      alert("Check the form for errors.");
      return true;
    }
    dispatch(postDog(input));
    setInput({
      name: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      span: "",
      image: "",
      temperaments: [],
    });
    history.push("/home");
  };

  return (
    <div>
      <Header showSearch={false} />
      <CreateContent>
        <CreateStyle>
          <div className="headForm">
            <h1>CREATE YOUR OWN BUDDY</h1>
            {error ? (
              <h3 className="error">Oops! {error}</h3>
            ) : (
              <h3 className="success">You're good to go!</h3>
            )}
            <p>Tell us a little bit more about him...</p>
          </div>
          <CreateForm onSubmit={(e) => handleSubmit(e)}>
            <div className="formBorder">
              <div className="box">
                <div>
                  <label htmlFor="name">
                    <span>*</span>Breed:{" "}
                  </label>
                  <input
                    type="text"
                    value={input.name}
                    id="name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div>
                  <label htmlFor="temperaments">
                    <span>*</span>Temperaments:{" "}
                  </label>
                  <select onChange={(e) => handleSelect(e)} id="temperaments">
                    {temperamentsApi.map((t) => (
                      <option value={t.name} key={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="span">Life Span: </label>
                  <input
                    type="text"
                    value={input.span}
                    id="span"
                    name="span"
                    onChange={(e) => handleChange(e)}
                    className="numbers"
                  />
                </div>
              </div>

              <div>
                <h4>
                  <span>*</span>Weight
                </h4>
                <div className="minMax">
                  <div>
                    <label>Min: </label>
                    <input
                      type="number"
                      value={input.weight_min}
                      name="weight_min"
                      onChange={(e) => handleChange(e)}
                      className="numbers"
                    />
                  </div>

                  <div>
                    <label>Max: </label>
                    <input
                      type="number"
                      value={input.weight_max}
                      name="weight_max"
                      onChange={(e) => handleChange(e)}
                      className="numbers"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4>
                  <span>*</span>Height
                </h4>
                <div className="minMax">
                  <div>
                    <label>Min: </label>
                    <input
                      type="number"
                      value={input.height_min}
                      name="height_min"
                      onChange={(e) => handleChange(e)}
                      className="numbers"
                    />
                  </div>

                  <div>
                    <label>Max: </label>
                    <input
                      type="number"
                      value={input.height_max}
                      name="height_max"
                      onChange={(e) => handleChange(e)}
                      className="numbers"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor="image">Image: </label>
                <input
                  type="text"
                  value={input.image}
                  id="image"
                  name="image"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {!error ? (
              <button type="submit">Create breed</button>
            ) : (
              <button className="buttonError">Complete the form!</button>
            )}
          </CreateForm>
        </CreateStyle>
        <ul>
          <li>
            {input.temperaments.map((t) => (
              <div>
                <p>{t}</p>
                <button onClick={() => handleDelete(t)}>X</button>
              </div>
            ))}
          </li>
        </ul>
      </CreateContent>
    </div>
  );
}

export default CreateDog;

import styled from "styled-components";
import background from "../images/background.jpg";
import { NavLink } from "react-router-dom";

//LANDING
export const LandingStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ffaa00;
  font-family: "Fredoka One", cursive;
  .title {
    text-align: left;
    width: fit-content;
    color: white;
  }
  h1 {
    font-size: 16.5vh;
    font-weight: 400;
    margin: 0;
    left: 0;
    display: table-caption;
  }
  .button {
    margin-top: 45vh;
    margin-left: 12vw;
    text-decoration: none;
  }
  .buttonEffect {
    list-style-type: none;
    margin: 0;
    padding: 0;
    p:hover {
      color: black;
    }
    p:hover span {
      transform: translateY(0) scale(2);
    }
    p {
      --c: #f64f00;
      color: var(--c);
      font-size: 3vh;
      border: 0.3em solid var(--c);
      border-radius: 0.5em;
      width: 12em;
      height: 3em;
      text-transform: uppercase;
      font-weight: bold;
      font-family: sans-serif;
      letter-spacing: 0.1em;
      text-align: center;
      line-height: 3em;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: 0.5s;
      margin: 1em;
      span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
      }
      span:nth-child(1) {
        --n: 1;
      }
      span:nth-child(2) {
        --n: 2;
      }
      span:nth-child(3) {
        --n: 3;
      }
      span:nth-child(4) {
        --n: 4;
      }
    }
  }
`;

//HOME
export const HomeStyle = styled.div`
  background-image: url(${background});
  font-family: "Raleway", sans-serif;
  .cards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 12.5vw;
  }
  .buttons {
    display: flex;
    width: fit-content;
    flex-direction: column;
    background-color: #ffaa00;
    height: 40vh;
    position: fixed;
    margin-left: 0.25vw;
    top: 35vh;
    left: 2vw;
    border-radius: 10px;
    justify-content: space-evenly;
  }
  .section {
    display: flex;
    flex-direction: column;
  }
  select {
    margin: 10px;
    outline-width: 0;
    text-align: center;
  }
  h3 {
    margin-bottom: 0;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 92vh;
  }
  .reset {
    padding: 0px 5px;
    margin: 0px 0.2vh;
    background-color: #f64f00;
    border-radius: 6px;
    color: white;
    font-size: 1.8vh;
    cursor: pointer;
  }
  .reset:hover {
    text-transform: uppercase;
    font-weight: 600;
  }
  .setting {
    font-size: 3vh;
    width: fit-content;
    background-color: #00000099;
    padding: 0 10px;
    color: #ffaa00;
  }
  .box {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

//HEADER
export const HeaderStyle = styled.div`
  background-color: #ffaa00;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Fredoka One", cursive;
  ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: right;
  }
`;

export const HeaderButtons = styled.span`
  background-color: #f64f00;
  border-radius: 10px;
  padding: 8px;
  margin: 0 1vw;
  font-size: 17px;
  color: white;
  font-weight: bold;
  img {
    max-height: 3vh;
  }
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
`;

//CREATE
export const CreateContent = styled.div`
  background-image: url(${background});
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  ul {
    list-style-type: none;
    border-radius: 15px;
    width: fit-content;
    font-size: 2.5vh;
    padding: 0;
    margin-left: 2vw;
    li {
      div {
        background-color: #ffaa00;
        border-radius: 10px;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1vh 0;
        padding: 0.5vh;
        width: fit-content;
        p {
          margin: 0.2vh;
        }
        button {
          background-color: #ed6a5e;
          border: 0;
          border-radius: 4px;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #fc440f;
        }
      }
    }
  }
`;

export const CreateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 2vh;
  }
  .error {
    margin: 0;
    padding: 1vh 1.5vw;
    width: 100%;
    text-decoration: underline;
    color: #de0000;
    font-weight: 900;
    font-size: 3vh;
    border: 1px solid #ff0000;
  }
  .success {
    margin: 0;
    padding: 1vh 1.5vw;
    width: 100%;
    text-decoration: underline;
    color: #1e961e;
    font-weight: 900;
    font-size: 3vh;
    border: 1px solid #1e961e;
  }
  .headForm {
    display: flex;
    flex-direction: column;
    background-color: #ffaa00;
    border-radius: 10px;
    align-items: center;
    margin: 2vh 0;
    padding: 0.5vh 2vw;
    width: fit-content;
  }
`;

export const CreateForm = styled.form`
  background-color: #ffaa00;
  border-radius: 50px 50px 0 0;
  width: fit-content;
  font-size: 3.5vh;
  .minMax {
    display: flex;
    justify-content: space-around;
  }
  label {
    text-align: left;
  }
  h3 {
    font-size: 3.25vh;
    margin: 3vh;
  }
  h4 {
    font-size: 3.5vh;
    font-weight: 500;
    margin: 3vh 0 -1vh 0;
  }
  label,
  h4 {
    span {
      color: red;
    }
  }
  .numbers {
    width: 4vw;
  }
  input {
    font-size: 2.5vh;
    border: none;
    outline-width: 0;
    border-radius: 7px;
  }
  select {
    font-size: 2.5vh;
  }
  button {
    width: 100%;
    background-color: #1e961e;
    border-radius: 6px;
    color: white;
    font-size: 3vh;
    cursor: pointer;
  }
  .buttonError {
    background-color: #fc440f;
  }
  .formBorder {
    margin: 0 2vw;
  }
  .box {
    margin: 2vh 0px 0px 0px;
    text-align: left;
  }
`;

//FAVORITES
export const FavoritesStyle = styled.div`
  background-image: url(${background});
  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 15vh 12.5vw;
  }
  .buttons {
    display: flex;
    width: fit-content;
    flex-direction: column;
    background-color: #ffaa00;
    height: 40vh;
    position: fixed;
    margin-left: 0.25vw;
    top: 35vh;
    left: 2vw;
    border-radius: 10px;
    justify-content: space-evenly;
  }
  .section {
    display: flex;
    flex-direction: column;
  }
  select {
    margin: 10px;
    outline-width: 0;
    text-align: center;
  }
  h3 {
    margin-bottom: 0;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 92vh;
  }
  .reset {
    padding: 0px 5px;
    margin: 0px 0.2vh;
    background-color: #f64f00;
    border-radius: 6px;
    color: white;
    font-size: 1.8vh;
    cursor: pointer;
  }
  .reset:hover {
    text-transform: uppercase;
    font-weight: 600;
  }
  .setting {
    font-size: 3vh;
    width: fit-content;
    background-color: #00000099;
    padding: 0 10px;
    color: #ffaa00;
  }
  .box {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

//DETAILS
export const DetailsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  height: 92vh;
  font-family: "Raleway", sans-serif;
  .borderDetails {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffaa00;
    border-radius: 2vh;
    padding: 2vh 2vh 1vh 0;
  }
  img {
    max-height: 50vh;
    max-width: 35vw;
  }
  h1 {
    font-size: 5vh;
  }
  p,
  h3 {
    margin: 0;
  }
  p {
    font-size: 3.2vh;
  }
  h3 {
    font-size: 4vh;
  }
  .measures {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .amount {
    margin: 1.2vh 2vw;
    padding: 0;
    border: 1px solid black;
    border-radius: 4px;
    p {
      font-size: 2.5vh;
    }
  }
  .tempsList {
    list-style-type: none;
    border-radius: 15px;
    width: fit-content;
    padding: 0;
    p {
      border-radius: 10px;
      font-size: 2.5vh;
      border: 1px solid black;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 1vh 0;
      padding: 0.5vh;
      width: fit-content;
      text-transform: uppercase;
    }
  }
`;

//NOT FOUND
export const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffaa00;
  height: 100vh;
  font-family: "Raleway", sans-serif;
  h1 {
    font-size: 6vh;
    margin: 0;
  }
  h1,
  h2 {
    text-align: left;
  }
  .button {
    margin-top: 45vh;
    margin-left: 12vw;
    text-decoration: none;
  }
  .buttonEffect {
    list-style-type: none;
    margin: 0;
    padding: 0;
    p:hover {
      color: black;
    }
    p:hover span {
      transform: translateY(0) scale(2);
    }
    p {
      --c: #f64f00;
      color: var(--c);
      font-size: 3vh;
      border: 0.3em solid var(--c);
      border-radius: 0.5em;
      width: 12em;
      height: 3em;
      text-transform: uppercase;
      font-weight: bold;
      font-family: sans-serif;
      letter-spacing: 0.1em;
      text-align: center;
      line-height: 3em;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: 0.5s;
      margin: 1em;
      span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
      }
      span:nth-child(1) {
        --n: 1;
      }
      span:nth-child(2) {
        --n: 2;
      }
      span:nth-child(3) {
        --n: 3;
      }
      span:nth-child(4) {
        --n: 4;
      }
    }
   }
  img {
    height: 80vh;
  }
`;

//NO DOG
export const NoDogStyle = styled.div`
  background-color: #ffaa00;
  max-width: 25vw;
  margin-top: 20vh;
  padding: 1.5vh;
  box-shadow: 6px 6px 10px 3px #190225;
  font-family: "Raleway", sans-serif;
`;

//CARD
export const CardStyle = styled.div`
  background-color: #ffaa00;
  max-width: 25vw;
  margin: 1.5vh 1vh;
  box-shadow: 6px 6px 10px 3px #190225;
  button {
    height: fit-content;
    background: none;
    color: white;
    border: none;
    padding: 3px 5px;
    margin-left: 5px;
    cursor: pointer;
    outline: inherit;
    background-color: #f64f00;
    border-radius: 5px;
  }
  .name {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 70%;
    max-height: 11vh;
    img {
      width: 1.2vw;
      height: 2.4vh;
    }
  }
  .link {
    text-decoration: none;
    color: inherit;
  }
  img {
    height: 40vh;
    width: 25vw;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .weight {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      border: black 1px solid;
      padding: 0px 5px;
      margin: 0.3vh 0.2vw;
      border-radius: 5px;
    }
    span {
      font-weight: 500;
    }
    h4 {
      margin: 0;
    }
  }
`;

export const TemperamentsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1vh;
`;

//PAGINATION
export const PaginationStyle = styled.div`
  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  li {
    list-style: none;
    height: fit-content;
    padding: 0px 5px;
    margin: 0px 0.3vh;
    font-size: 3vh;
    background-color: #f64f00;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-family: "Fredoka One", cursive;
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  }
  li:hover {
    border: 2px solid black;
    font-size: 3.2vh;
  }
`;

//SCROLL
export const ScrollStyle = styled.div`
  .container {
    width: 500px;
    text-align: center;
  }
  .goUp {
    font-family: "Fredoka One", cursive;
    position: fixed;
    bottom: 6vh;
    right: 5vw;
    font-size: 4vh;
    background: #f64f00;
    color: white;
    cursor: pointer;
    border-radius: 20%;
    border: none;
  }
  .goUp:hover {
    box-shadow: 0 10px 20px #f64f00;
  }
`;

//SEARCH
export const SearchStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
  input{
    border-radius: 15px 0px 0px 15px;
    padding: 8px;
    font-size: 15px;
    font-weight: bold;
  }
  button{
    cursor: pointer;
    border-radius: 0px 15px 15px 0px;
  }
  input, button{
    border: none;
    outline-width: 0;
  }
  span{
    margin-left: 0.5vw;
    color: red;
    align-self:center;
  }
`
import React from "react";
import { PaginationStyle } from "./Styles";

function Pagination({ dogsPerPage, allDogs, pagination }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyle>
      <ul>
        {pageNumbers &&
          pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button onClick={() => pagination(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
      </ul>
    </PaginationStyle>
  );
}

export default Pagination;

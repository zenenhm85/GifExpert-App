import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />
          {q === "" && <div className="alert alert-info animate__animated animate__fadeIn">Search a hero</div>}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger animate__animated animate__pulse">
              There is no a hero with {q}
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

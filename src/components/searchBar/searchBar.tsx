import React, { useState } from 'react';
import './searchBar.css';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setQuery } from '../../store/searchBarSlice';

function SearchBar() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);
  const [searchBarValue, setSearchBarValue] = useState(query);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchBarValue(event.target.value);
  };

  const handleClearClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setSearchBarValue('');
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(setQuery(searchBarValue));
  };

  return (
    <form className="search" onSubmit={handleFormSubmit}>
      <input
        className="input search__input"
        type="search"
        value={searchBarValue}
        placeholder="Search for..."
        onChange={handleChange}
      />
      <button className="button search-button"></button>
      <button className="button clear-button" onClick={handleClearClick}></button>
    </form>
  );
}

export default SearchBar;

import React, { useEffect, useRef, useState } from 'react';
import './searchBar.css';

type ISearchBarProps = {
  setInputValue: (text: string) => void;
};

function SearchBar({ setInputValue }: ISearchBarProps) {
  const [searchBarValue, setSearchBarValue] = useState(
    localStorage.getItem('searchBarValue') ?? ''
  );

  const searchRef = useRef('');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchBarValue', searchRef.current || '');
    };
  }, []);

  useEffect(() => {
    searchRef.current = searchBarValue;
  }, [searchBarValue]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchBarValue(event.target.value);
    localStorage.setItem('searchBarValue', event.target.value || '');
  };

  const handleClearClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setSearchBarValue('');
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    localStorage.setItem('searchBarValue', searchBarValue || '');
    setInputValue(searchBarValue);
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

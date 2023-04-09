import React from 'react';
import SearchBar from './../../components/searchBar/searchBar';
import CardsWrapper from './../../components/cardsWrapper/cardsWrapper';
import { useEffect, useState } from 'react';

function MainPage() {
  const [itemList, setItemList] = useState([]);
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchBarValue') ?? '');

  const apiKey = '7QKoTwILDJFpZGiGcz7My34rn3wjkTvrGbdBnxACmTM';

  useEffect(() => {
    if (inputValue === '') setInputValue('spring');
    const resource = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${apiKey}`;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => {
        setItemList(data.results);
        console.log(data);
      })
  }, [inputValue]);

  return (
    <main>
      <SearchBar setInputValue={setInputValue} />
      <CardsWrapper itemList={itemList} />
    </main>
  );
}

export default MainPage;

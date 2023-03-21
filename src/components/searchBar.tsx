import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component<{ text?: string }, { value: string }> {
  constructor(props: { text?: string }) {
    super(props);
    this.state = { value: localStorage.getItem('searchBarValue') || '' };
  }

  componentWillUnmount = () => {
    localStorage.setItem('searchBarValue', this.state.value);
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClearClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="search">
        <input
          className="input search__input"
          type="search"
          value={this.state.value}
          placeholder="Search for..."
          onChange={this.handleChange}
        />
        <button className="button search-button"></button>
        <button className="button clear-button" onClick={this.handleClearClick}></button>
      </div>
    );
  }
}

export default SearchBar;

import React, { useContext,useState } from "react";
import { AnimeContext } from "../context/AnimeContext";

const SearchBar = () => {
  const {value3, value5} = useContext(AnimeContext);
  const [query, setQuery] = value3
  const [input, setInput] = value5

  const handleClick = (e) => {
    e.preventDefault()    
    console.log(input)
        setQuery(input)  }
  
  return (
    <div className="search">
      

    <h1 >久し振り !<br/>Welcome to AnimDB !<br/>The best Anime dabase ever !</h1>
    <form onSubmit={handleClick}>
      <input className='inputsearch'
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="searchbutton" type='submit'>いくぞ !</button>
    </form>
    </div>
  );
};

export default SearchBar;

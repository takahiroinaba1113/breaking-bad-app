import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/UI/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';
import './App.css';


const App = () => {

  // fill this array with api
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  // calling an API in useEffect() hook
  // useEffect(func, []): func -> what to process, [] -> trigger for useEffect
  useEffect(() => {

    // defining a func to call an api and fetch data from it
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      // response data can be accessed with .data
      setItems(result.data);
      setIsLoading(false);
    }

    // calling the function defined above
    fetchItems();
    // dependnecy: whenever this 'query' changes, useEffect fires off
  }, [query])

  return (
    <div className="container">
      <Header />
      {/* passing the callback function to get query input from Search component.  */}
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

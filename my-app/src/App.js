import './App.css';
import React from 'react';
import MovieList from './MovieList';


function App() {
  return (
    <div>
            <h1>Min filmlista</h1>
            <hr></hr>
            <h4>Lägg till film</h4>
            <MovieList />
    </div>
  );
}

export default App;

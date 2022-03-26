import  { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';

import SearchIcon from './search.svg'


//9102828c

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=9102828c"

 const App = ()=> {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies]=useState([])
    const searchMovies = async (title) => {
        
         const response = await fetch(`${API_URL}&s=${title}`);

         const data = await response.json();

         setMovies(data.Search);

    }

       
        useEffect(()=>{
            
            searchMovies('Spiderman');
            
        },[]);

    return (
        <div className="app">
         
         <h1>MoviesHub</h1>

         <div className="search">
         <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}


        </div>
    );
    

 };

 export default App
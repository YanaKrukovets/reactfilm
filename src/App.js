import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=d3125e3c';

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  }


  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
   <div className="p-4 flex justify-center items-center flex-col">
      <h1 className="text-[3rem] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Movie</h1>
      
<div className="w-3/4 m-4">
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  
            onClick={() => {searchMovies(searchTerm)}}>Search</button>
    </div>

    </div>

      {movies?.length > 0 ? (
        <div className="flex justify-center items-center flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="font-normal text-gray-700 dark:text-gray-400">No movies found</h2>
        </div>
      )}

   </div>
  );
}

export default App;

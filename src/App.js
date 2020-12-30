import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import { getMoviesByTerm } from "./api/TMDB";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

const App=()=>{
  const [SearchTerm,setSerachTerm]=useState("");
  const [movies,setMovies]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [totalPages,setTotalPages]=useState(0);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    await getMoviesByTerm(SearchTerm,setMovies,currentPage,setTotalPages);
  };

  const handleChange=(event)=>{
    setSerachTerm(event.target.value);
  }

  const nextPage= async (page_number)=>{
    setCurrentPage(page_number);
    await getMoviesByTerm(SearchTerm,setMovies,currentPage,setTotalPages);
  }

  return <div>
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    <MovieList movies={movies}/>
    {totalPages>1?<Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />: ""}
    </div>;
};
export default App;

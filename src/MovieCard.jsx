import React from "react";

const MovieCard = ({ movie }) => {
    return (
 

<div className="m-4 w-[300px] h-[470px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

    <img className="h-[400px] w-[300px] rounded-t-lg" src={movie.Poster != 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="Movie poster" />

<div className="p-5">

    <p className="font-normal text-gray-700 dark:text-gray-400">{movie.Title}</p>
   
</div>
</div>


    );
}

export default MovieCard;
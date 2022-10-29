import React from 'react';
import { useParams } from 'react-router-dom';
import { movieDataMap } from '../../service/movieData';

function MovieDetails() {
  const { movieId } = useParams();
  const movie = movieDataMap.get(movieId);
  if (movie === undefined) {
    return <>Movie not found</>;
  }
  const { movieName, moviePoster, movieRate, introduction, tags } = movie;
  return (
    <>
      <h2>{movieName}</h2>
      <img src={moviePoster} alt={movieName} />
      <h2>Introduction</h2>
      {introduction}
      <h2>Rating</h2>
      {movieRate}
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
}

export default MovieDetails;

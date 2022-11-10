import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById } from '../../../redux/slices/movie';
import Container from './MovieAndAuthorContainer';
import OtherReviews from '../../ReviewColumn/OtherReviews';

const MovieContainer = Container;

function MovieCard() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-console
  // console.log(movieId);
  // useEffect(() => {
  //   async function fetchData() {
  //     await dispatch(fetchMovieById(movieId));
  //   }
  //   fetchData();
  // }, []);

  // TO DO: display movieInfo into this component
  // eslint-disable-next-line no-unused-vars
  console.log('inside movie card');
  const movieInfo = useSelector((state) => state.movie.movie);

  return (
    <MovieContainer>
      <OtherReviews />
    </MovieContainer>
  );
}

// MovieCard.propTypes = {
//   movieId: PropTypes.number.isRequired,
// };

export default MovieCard;

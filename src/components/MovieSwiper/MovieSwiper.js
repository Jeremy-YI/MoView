import React from 'react';
import styled from 'styled-components';
import movieData from '../../service/movieData';

const Container = styled.div(
  ({ theme }) => `
    padding: 10px 0 40px 0;
    background-color: ${theme.colors.background_grey};
    display: flex;
    justify-content: center;
    `
);

const SwiperBox = styled.div(
  ({ theme }) => `
    padding: 15px;
    border-radius: 25px;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.background_purple};
    @media (min-width:${theme.breakpoints.largeLaptop}) {
      padding: 30px;
  `
);

const SwiperCard = styled.a(
  ({ theme }) => `
      padding: 5px;
      border-radius: 20px;
      display: flex;
      width: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: ${theme.colors.text_light_grey};
      background-color: ${theme.colors.background_light_purple};
      border: 1px solid ${theme.colors.background_grey};
      :hover {
        border: 2px solid ${theme.colors.background_light_grey};
      }
      @media (min-width:${theme.breakpoints.largeLaptop}) {
          padding: 20px;
  `
);

function MovieSwiper() {
  return (
    <Container>
      <SwiperBox>
        {movieData.map((movie) => {
          const { movieName, movieRate, movieId } = movie;
          const movieDetailsUrl = `/movie/${movieId}`;
          return (
            <SwiperCard href={movieDetailsUrl}>
              <img width="100%" height="auto" alt="movie poster" src={movie.moviePoster} />
              {movieName}
              <br />
              {movieRate}
            </SwiperCard>
          );
        })}
      </SwiperBox>
    </Container>
  );
}

export default MovieSwiper;

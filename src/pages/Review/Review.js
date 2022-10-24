import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReviewTitle from '../../components/pages/ReviewPage/ReviewTitle';
import MovieCard from '../../components/pages/ReviewPage/MovieCard';
import AuthorCard from '../../components/pages/ReviewPage/AuthorCard';
import ReviewContent from '../../components/pages/ReviewPage/ReviewContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.background_light_gray};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

function Review() {
  // TO DO: use this id from path fetch post from backend
  // eslint-disable-next-line no-unused-vars
  const { reviewId } = useParams();

  return (
    <Container>
      <ReviewTitle title="The beginning of computer sciences during World War II" />
      <Content>
        <MovieCard movieId={1} />
        <ReviewContent />
        <AuthorCard userId={1} />
      </Content>
    </Container>
  );
}

export default Review;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { fetchAllTags } from '../../../redux/slices/tag';

import ReviewCreate from '../../../components/ReviewCreate';

function NewReviewPage() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((_state) => _state.user);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  const { movie } = state || {};

  dispatch(fetchAllTags());

  return (
    <Container maxWidth="largeLaptop">
      {(movie && <ReviewCreate />) || <p>Please create review from movie page</p>}
    </Container>
  );
}

export default NewReviewPage;

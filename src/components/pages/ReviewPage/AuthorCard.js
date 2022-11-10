import React from 'react';
import PropTypes from 'prop-types';
import Container from './MovieAndAuthorContainer';
import AuthorReviews from '../../ReviewColumn/AuthorReviews';

const AuthorContainer = Container;

function AuthorCard({ userId }) {
  return (
    <AuthorContainer>
      {userId} <AuthorReviews />
    </AuthorContainer>
  );
}
AuthorCard.propTypes = {
  userId: PropTypes.number.isRequired,
};
export default AuthorCard;

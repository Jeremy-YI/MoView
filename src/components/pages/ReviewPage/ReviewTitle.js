import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-left: 40%;
//   margin-bottom: 40px;
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
//   }
// `;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h1`
  max-width: 100%;
  font-size: 30px;
  font-weight: 700;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const Tag = styled.span`
  color: ${(props) => props.theme.palette.secondary.tag_text_blue};
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
  :hover {
    color: ${(props) => props.theme.palette.secondary.tag_hover_blue};
    cursor: pointer;
  }
`;

const IconGroup = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

// TO DO: tags should come from redux and backend
const TAG_LIST = ['The Imitation Game', 'Benedict Cumberbatch', 'World War II', 'Sciences'];

function ReviewTitle({ title }) {
  // TO DO: use reviewId to get Tags
  // eslint-disable-next-line no-unused-vars
  const { reviewId } = useParams();

  return (
    <Container>
      <Title> {title}</Title>
      <SubTitle>
        <Grid>
          {TAG_LIST.map((tag) => (
            <Tag key={tag}>#{tag} </Tag>
          ))}
        </Grid>

        <IconGroup>
          <FavoriteIcon sx={{ fontSize: { sm: 15, lg: 30 }, color: 'red' }} />
          20
          <StarIcon
            sx={{
              fontSize: { sm: 15, lg: 30 },
              color: 'yellow',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          />
          30
        </IconGroup>
      </SubTitle>
    </Container>
  );
}

ReviewTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ReviewTitle;

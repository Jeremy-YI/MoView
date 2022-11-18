import * as React from 'react';
import { useEffect } from 'react';
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Grid,
  Typography,
  Container as MuiContainer,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReviews, selectReview } from '../../redux/slices/review';

const Section = styled('section')({
  width: '70%',
  height: '100%',
});

const Heading = styled(Typography)({
  paddingLeft: '5em',
  display: 'flex',
  justifyContent: 'space-between',
});

const Container = styled(MuiContainer)(({ theme }) => ({
  marginLeft: '10%',
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(5),
  [theme.breakpoints.up('laptop')]: {
    maxWidth: '537px',
  },
  [theme.breakpoints.up('largeLaptop')]: {
    maxWidth: '716px',
  },
  [theme.breakpoints.up('desktop')]: {
    maxWidth: '1008px',
  },
}));

const Card2 = styled(MuiCard)(() => ({
  height: '220px',
  display: 'flex',
  cursor: 'pointer',
}));

const CardMedia2 = styled(MuiCardMedia)(() => ({
  width: '20%',
  height: 'auto',
}));

const CardContent = styled(MuiCardContent)(() => ({
  flexGrow: 1,
  width: '75%',
}));

const CardActions2 = styled(MuiCardActions)(() => ({
  alignSelf: 'flex-end',
  display: 'inline',
  float: 'right',
}));

const View = styled('span')(() => ({}));

export default function MovieReview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviewList = useSelector(selectReview);
  const { movieName } = useParams();

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, []);

  return (
    <Section>
      <Heading variant="h4">
        Reviews
        <View>
          <Button>Sort By</Button>
        </View>
      </Heading>

      <Container maxWidth="md">
        <Grid container spacing={2}>
          {reviewList
            .filter((review) => review.movie.name.includes(movieName))
            .map((review) => (
              <Grid item key={review.id} xs={12} sm={6} md={12}>
                <Card2 onClick={() => navigate('/review/1')}>
                  <CardMedia2 image={review.movie.posterImgUrl} title="Image title" />
                  <CardContent>
                    <Typography>
                      <Typography variant="h5" display="inline">
                        {review.movie.name}
                      </Typography>
                      <CardActions2>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="star">
                          <StarIcon sx={{ fontSize: 28 }} />
                        </IconButton>
                      </CardActions2>
                    </Typography>
                    <Typography variant="h6">{review.author.username}</Typography>
                    <Typography
                      sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}
                    >
                      {review.contents}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      display="inline"
                      float="right"
                    >
                      {review.updatedTime}
                    </Typography>
                  </CardContent>
                </Card2>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Section>
  );
}

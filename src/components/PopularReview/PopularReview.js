import * as React from 'react';
import { useState, useCallback } from 'react';
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
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridViewIcon from '@mui/icons-material/GridView';
import { useNavigate } from 'react-router-dom';

const Section = styled('section')({
  width: '80%',
  height: '55%',
});

const Heading = styled(Typography)({
  paddingLeft: '5em',
  display: 'flex',
  justifyContent: 'space-between',
});

const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  marginLeft: '10%',
}));

const Card1 = styled(MuiCard)(() => ({
  height: '300px',
  display: 'flex',
  flexDirection: 'row',
  cursor: 'pointer',
}));

const Card2 = styled(MuiCard)(() => ({
  height: '220px',
  display: 'flex',
  cursor: 'pointer',
}));

const CardMedia1 = styled(MuiCardMedia)(() => ({
  width: '40%',
  height: 'auto',
}));

const CardMedia2 = styled(MuiCardMedia)(() => ({
  width: '20%',
  height: 'auto',
}));

const CardContent = styled(MuiCardContent)(() => ({
  flexGrow: 1,
  width: '70%',
}));

const CardActions1 = styled(MuiCardActions)(() => ({
  alignSelf: 'flex-end',
  justifyContent: 'center',
}));

const CardActions2 = styled(MuiCardActions)(() => ({
  alignSelf: 'flex-end',
  display: 'inline',
}));

const View = styled('span')(() => ({}));

const cards = [
  {
    img: 'https://i.ytimg.com/vi/qHy1f0yzPVI/movieposter_en.jpg',
    desc: 'The Imitation Game',
    author: 'Akinlabi Omo-Oso',
    time: '22:30',
    date: '10/10/2022',
    comment:
      'I have watched this awesome movie four times! The characters have become like old friends, thanks to·...',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    desc: 'Inception',
    author: 'Tom Charity',
    time: '15:30',
    date: '12/10/2022',
    comment:
      "I hate my dreams. They're so ... infantile.\" Heaven knows what artist Laurie Anderson would make of Christopher Nolan's first film since ...",
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    desc: 'The Godfather',
    author: 'James Luxford',
    time: '27:20',
    date: '09/10/2022',
    comment:
      ' Even half a century since its release, it shouldn’t be difficult to convince you why The Godfather is worth catching this weekend for its anniversary...',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    desc: "Schindler's list",
    author: 'Keith Garlington',
    time: '02:50',
    date: '17/10/2022',
    comment:
      'Many movies have looked at the Jewish Holocaust from a variety of different angles. There have been films... ',
  },
];

export default function PopularReview() {
  const navigate = useNavigate();
  const [shouldDisplayList, setShouldDisplayList] = useState(false);
  const onListClicked = useCallback(() => {
    setShouldDisplayList(true);
  }, [setShouldDisplayList]);

  const onGridClicked = useCallback(() => {
    setShouldDisplayList(false);
  }, [setShouldDisplayList]);
  const isGridViewDisabled = shouldDisplayList === false;
  const isListViewDisabled = shouldDisplayList === true;
  return (
    <Section>
      <Heading variant="h4">
        Popular Reviews
        <View>
          <IconButton
            aria-label="display as grids"
            onClick={onGridClicked}
            disabled={isGridViewDisabled}
          >
            <GridViewIcon />
          </IconButton>
          <IconButton
            aria-label="display as slices"
            onClick={onListClicked}
            disabled={isListViewDisabled}
          >
            <TableRowsIcon />
          </IconButton>
          <Button>Sort By</Button>
        </View>
      </Heading>
      {shouldDisplayList === false ? (
        <Container maxWidth="80%">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card1 onClick={() => navigate('/review/1')}>
                  <CardMedia1 image={card.img} title="Image title" />
                  <CardContent>
                    <Typography variant="h5">{card.desc}</Typography>
                    <br />
                    <Typography variant="h6">Review Author: {card.author}</Typography>
                    <br />
                    <Typography>{card.comment}</Typography>
                    <CardActions1>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="star">
                        <StarIcon sx={{ fontSize: 28 }} />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {card.time} {card.date}
                      </Typography>
                    </CardActions1>
                  </CardContent>
                </Card1>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}

      {shouldDisplayList === true ? (
        <Container maxWidth="md">
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={12}>
                <Card2 onClick={() => navigate('/review/1')}>
                  <CardMedia2 image={card.img} title="Image title" />
                  <CardContent>
                    <Typography>
                      <Typography variant="h5" display="inline">
                        {card.desc}
                      </Typography>
                      <CardActions2>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="star">
                          <StarIcon sx={{ fontSize: 28 }} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" display="inline">
                          {card.time} {card.date}
                        </Typography>
                      </CardActions2>
                    </Typography>
                    <br />
                    <Typography variant="h6">Review Author: {card.author}</Typography>
                    <br />
                    <Typography>{card.comment}</Typography>
                  </CardContent>
                </Card2>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
    </Section>
  );
}

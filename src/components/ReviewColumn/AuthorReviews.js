/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography, CardMedia, Box } from '@mui/material';

function AuthorReviews({ userID }) {
  const [reviews, setReviews] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const getReviews = async () => {
    // 'https://jsonplaceholder.typicode.com/photos'
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    setReviews(await response.json());
  };

  useEffect(() => {
    getReviews();
  }, []);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  return (
    <>
      {getMultipleRandom(reviews, 3).map((curElem) => {
        const { url, id, title } = curElem;
        return (
          <div key={id}>
            <Card sx={{ backgroundColor: '#E3E3E3', maxWidth: 300, maxHeight: 250, margin: 3 }}>
              <CardContent>
                <h3>Author’s other movie review {userID}</h3>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardMedia
                    component="img"
                    height="75"
                    width="50"
                    image={url}
                    alt="pic"
                    objectFit="contain"
                  />
                  <Typography sx={{ marginLeft: 1 }}>{title.substring(0, 100)}</Typography>
                </Box>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default AuthorReviews;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectReview, selectCurrentReview } from '../../redux/slices/review';

function OtherReviews() {
  console.log('inside otherreviews');
  const review = useSelector(selectCurrentReview);
  const allReviews = useSelector(selectReview);
  // console.log('review', review);
  const movieId = review.movie.id;
  // console.log('movieid', movieId);
  const filteredList = allReviews.filter((e) => e.movie.id === movieId);
  // eslint-disable-next-line no-console
  // console.log('1111', filteredList);

  // const [reviews, setReviews] = useState([]);
  // const [count, setCount] = useState(0);
  // const getReviews = async () => {
  //   // 'https://jsonplaceholder.typicode.com/posts/1/comments'
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
  //   setReviews(await response.json());
  // };

  // useEffect(() => {
  //   getReviews();
  //   setCount(() => setCount(count + 1));
  // }, []);
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  return (
    <>
      {getMultipleRandom(filteredList, 3).map((curElem) => {
        const { title, contents, id } = curElem;
        return (
          <div key={id}>
            <Card sx={{ backgroundColor: '#E3E3E3', maxWidth: 300, maxHeight: 250, margin: 3 }}>
              <CardContent>
                <h3 fontSize="14px"> {title}</h3>
                <Typography sx={{ marginBottom: 5 }}>{contents.substring(0, 120)}</Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default OtherReviews;

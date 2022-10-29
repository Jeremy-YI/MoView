const introduction =
  'blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah';

const tags = ['SOME TAG 1', 'SOME TAG 2', 'SOME TAG 3', 'Some tag 4', 'some tag 6'];
const movieData = [
  {
    movieId: 'imitationGame',
    movieName: 'The Imitation Game',
    moviePoster:
      'https://resizing.flixster.com/BkFrnkz1SCXdNNuaYHVaFkFv6IA=/206x305/v2/https://flxt.tmsimg.com/assets/p10771057_p_v12_au.jpg',
    movieRate: '9.0',
    introduction,
    tags,
  },
  {
    movieId: 'shawShankRedemption',
    movieName: 'The Shawshank Redemption',
    moviePoster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    movieRate: '8.4',
    introduction,
    tags,
  },
  {
    movieId: 'vForVendetta',
    movieName: 'V for Vendetta',
    moviePoster:
      'https://www.themoviedb.org/t/p/w440_and_h660_face/vEkIweJt73FBH8286DBoAIIctp5.jpg',
    movieRate: '7.3',
    introduction,
    tags,
  },
  {
    movieId: 'whiplash',
    movieName: 'Whiplash',
    moviePoster: 'https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg',
    movieRate: '9.4',
    introduction,
    tags,
  },
];

export const movieDataMap = new Map(movieData.map((movie) => [movie.movieId, movie]));

export default movieData;

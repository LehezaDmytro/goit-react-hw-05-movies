import axios from 'axios';

const API_KEY = '081601e5e6af2357464de85c20034e49';

export const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=uk`
  );
};

export const getMovieId = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=uk`
  );
};

export const getCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=uk`
  );
};

export const getReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const findMovie = title => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=true`
  );
};

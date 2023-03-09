import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TrendingMovies = ({ movies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TrendingMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

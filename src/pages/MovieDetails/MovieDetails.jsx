import { getMovieId } from 'shared/Api/movies';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from 'pages/MovieDetails/MovieDetails.module.scss';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const from = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await getMovieId(movieId);
        setMovie(data);
        setGenres([...data.genres]);
      } catch (response) {}
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Link to={from}>Go back</Link>
      <div className={styles.movie}>
        {movie.poster_path && (
          <img
            className={styles.movie__poster}
            src={BASE_IMAGE_URL + movie.poster_path}
            alt={movie.title}
          />
        )}
        <div className="movie__info">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie__reting">Vote average: {movie.vote_average}</p>
          <h3>Owerviev</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <div className={styles.information}>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

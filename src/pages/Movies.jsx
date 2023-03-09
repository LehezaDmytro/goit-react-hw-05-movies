import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { findMovie } from 'shared/Api/movies';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({
      query: form.elements.movieTitle.value ?? '',
    });
    form.reset();
  };

  useEffect(() => {
    const query = searchParams.get('query');
    const fetchMovie = async () => {
      try {
        const { data } = await findMovie(query);
        setFoundMovies([...data.results]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    if (query) {
      fetchMovie();
    } else {
      setFoundMovies([]);
    }
  }, [searchParams]);

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" name="movieTitle" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {foundMovies &&
          foundMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

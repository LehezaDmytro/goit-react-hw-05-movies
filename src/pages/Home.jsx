import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/Api/movies';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const featchMovies = async () => {
      try {
        const { data } = await getTrendingMovies();
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    featchMovies();
  }, []);

  return (
    <main>
      <TrendingMovies movies={movies} />
    </main>
  );
};

export default Home;

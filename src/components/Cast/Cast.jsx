import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'shared/Api/movies';
import styles from 'components/Cast/Cast.module.scss';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getCast(movieId);
        setCast([...data.cast]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.profile_path && (
            <img
              className={styles.profileImg}
              src={BASE_IMAGE_URL + actor.profile_path}
              alt={actor.name}
            />
          )}
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

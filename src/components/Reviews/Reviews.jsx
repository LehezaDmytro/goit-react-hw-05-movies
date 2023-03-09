import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'shared/Api/movies';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { data } = await getReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchReview();
  }, [movieId]);
  return (
    <ul>
      {Boolean(!reviews.length) && "We don't have any reviews for this movie"}
      {reviews.map(review => (
        <li key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`
        );
        if (response.data.Response === 'False') {
          throw new Error(response.data.Error);
        }
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) return <div className='loading'>Загрузка...</div>;
  if (error) return <div className='error'>{error}</div>;
  if (!movie) return <div className='error'>Данные не найдены</div>;

  return (
    <div className="container">
      <div className="image-box">
        <img 
          src={movie.Poster == "N/A" ? 
            "https://avatars.mds.yandex.net/i?id=d20c70074f33b17ce2ad720acc8149b8_l-8220915-images-thumbs&n=13" 
            : movie.Poster
          }
          alt="detail" 
        />
      </div>
      <div className="detailed-info">
        <h1 className="movie-title">
          {movie.Title} <span className="movie-year">({movie.Year})</span>
        </h1>
        <ul className="movie-details">
          <li>imdb: {movie.imdbRating}</li>
          <li>{movie.Runtime}</li>
          <li>{movie.Rated}</li>
        </ul>
        <p className="movie-plot">{movie.Plot}</p>
        <div className="movie-extra">
          <div>
            <h3 className="section-title">Режиссёр</h3>
            <p className="section-content">{movie.Director}</p>
          </div>
          <div>
            <h3 className="section-title">Актёры</h3>
            <p className="section-content">{movie.Actors}</p>
          </div>
          <div>
            <h3 className="section-title">Жанр</h3>
            <p className="section-content">{movie.Genre}</p>
          </div>
        </div>
        <div>
          <Link to={'/'} className="back-link">
           ⇽Назад к поиску
          </Link>
        </div>
      </div>
    </div>
  )
}

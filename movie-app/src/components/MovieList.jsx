import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            key={movie.imdbID} 
            className='movie-card'
            aria-label={`Подробнее о фильме ${movie.Title}`}
          >
            <div className='movie-poster'>
              <img 
                src={movie.Poster !== 'N/A' 
                  ? movie.Poster 
                  : 'https://i.pinimg.com/736x/78/29/8e/78298e69a65fddccbdc1e4007a5c7784.jpg'} 
                alt={movie.Poster !== 'N/A' 
                  ? `Постер ${movie.Title}` 
                  : 'Постер отсутствует'} 
                loading='lazy' 
              />
            </div>
            <div className='movie-info'>
              <h3 className='movie-title'>{movie.Title}</h3>
              <p className='movie-meta'>
                <span>{movie.Year}</span>
                <span className="separator">&bull;</span>
                <span>{movie.Type === 'movie' ? 'Фильм' : 'Сериал'}</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className='no-results'>Фильмы не найдены. Попробуйте другой запрос</p>
      )}
    </div>
  );
}

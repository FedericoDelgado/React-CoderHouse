import { useState } from 'react';
import MovieList from '../MovieList/MovieList';
import './Container.css';


function Container(props) {

    const [moviesFetch, setMoviesFetch] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovies = () => {
        setIsLoading(true)
        fetch('https://swapi.dev/api/films')
        .then((response) =>{return response.json()})
        .then ((data) => {
            const moviesFetchOwn = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    description: movieData.opening_crawl
                }
            })
        setMoviesFetch(moviesFetchOwn)
    setIsLoading(false)})
    }

  return (
    <div className='container'>
        <button onClick={fetchMovies}>Ver Peliculas</button>
        {isLoading && <p>Loading...</p>}
        <MovieList movies={moviesFetch} />
    </div>
  );
}

export default Container;
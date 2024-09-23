// pages/index.js
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import SignIn from '../components/SignIn';
import useAuth from '../hooks/useAuth';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data, error } = await supabase.from('movies').select();
      if (error) {
        console.error('Error fetching movies:', error);
      } else {
        setMovies(data);
      }
    };
    fetchMovies();
  }, []);

  const filterByGenre = () => {
    const filtered = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    setFilteredMovies(filtered);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-md opacity-30" style={{ backgroundImage: "url('../public/Posters.jpg')" }}></div>
      
      <div className="relative p-6 max-w-md mx-auto z-10">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-black text-center drop-shadow">Movie Recommendation System</h1>

        {user ? (
          <>
            <p className="mb-4 text-black">Welcome, {user.email}!</p>
            <input
              type="text"
              placeholder="Enter Genre: Action, Drama, Sci-Fi, Crime, Fantasy"
              className="p-2 border rounded mb-4 w-full"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <button
              onClick={filterByGenre}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Search Movies
            </button>

            <div className="mt-6">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <div key={movie.id} className="p-4 border rounded mb-2 bg-white bg-opacity-80">
                    <h2 className="text-xl font-bold">{movie.title}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Rating: {movie.rating}/10</p>
                  </div>
                ))
              ) : (
                <p className="text-white">No movies found for this genre.</p>
              )}
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}

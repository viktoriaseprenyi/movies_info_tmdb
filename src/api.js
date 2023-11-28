

//BASE URL
const base_url = "https://api.themoviedb.org/3/";


//MOVIES URL
const nowPlayingMovie = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;
const topRatedMovie = `movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`;
const upComingMovie = `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`;

export const nowPlayingMovieURL = () => `${base_url}${nowPlayingMovie}`;
export const topRatedMovieURL = () => `${base_url}${topRatedMovie}`;
export const upComingMovieURL = () => `${base_url}${upComingMovie}`;

//SEARCH URL
export const searchMovieURL = (movie_name) => `${base_url}search/movie?query=${movie_name}&api_key=${process.env.REACT_APP_API_KEY}`;

//FILTER BY TYPE URL
export const filterMovieURL = (movie_type_id) => `${base_url}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${movie_type_id}`;

//MOVIE TYPE URL

export const moiveTypeURL = () => `${base_url}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;

//DETAILS URL

export const getMoviesDetailsURL = (movie_id) => `${base_url}movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`

//TRAILER URL

export const getMoviesTrailerURL = (movie_id) => `${base_url}movie/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;




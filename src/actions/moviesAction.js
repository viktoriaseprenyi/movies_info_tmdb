import axios from "axios";
import { nowPlayingMovieURL, topRatedMovieURL, upComingMovieURL, searchMovieURL } from "../api";

export const loadMovies = () => async (dispatch) => {
    const nowPlayingMovieData = await axios.get(nowPlayingMovieURL());
    const topRatedMovieData = await axios.get(topRatedMovieURL());
    const upComingMovieData = await axios.get(upComingMovieURL());
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            nowPlayingMovie: nowPlayingMovieData.data.results,
            topRatedMovie: topRatedMovieData.data.results,
            upComingMovie: upComingMovieData.data.results
        },
    });
};

export const fetchSearch = (movie_name) => async (dispatch) => {
    const searchMovieData = await axios.get(searchMovieURL(movie_name));
    dispatch({
        type: "SEARCH_MOVIES",
        payload: {
            searched: searchMovieData.data.results,
        },
    });

};




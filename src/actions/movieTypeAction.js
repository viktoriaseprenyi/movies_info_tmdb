import axios from "axios";
import { moiveTypeURL } from "../api";

export const loadMovieType = () => async (dispatch) => {
    const movieTypeData = await axios.get(moiveTypeURL());
    console.log('Movie Type Data:', movieTypeData);

    dispatch({
        type: "FETCH_MOVIE_TYPE",
        payload: {
            movieType: movieTypeData.data.genres,
        },
    });
};




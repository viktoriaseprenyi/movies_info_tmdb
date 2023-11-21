import axios from "axios";
import { getMoviesDetailsURL, getMoviesTrailerURL } from "../api";

const loadDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL"
    });

    const moviesData = await axios.get(getMoviesDetailsURL(id));
    const moviesTrailerData = await axios.get(getMoviesTrailerURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: moviesData.data,
            trailer: moviesTrailerData.data.results,
        }
    });
};

export default loadDetails;
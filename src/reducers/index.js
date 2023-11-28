//Redux
import { combineReducers } from "redux";
//Reducers
import moviesReducer from "./moviesReducer";
import detailsReducers from "./detailsReducer";
import movieTypeReducer from "./movieTypeReducer";

const rootReducers = combineReducers({
    movies: moviesReducer,
    details: detailsReducers,
    genres: movieTypeReducer,
});

export default rootReducers;


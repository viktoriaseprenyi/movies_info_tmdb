import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import detailsReducers from "./detailsReducer";

const rootReducers = combineReducers({
    movies: moviesReducer,
    details: detailsReducers,
});

export default rootReducers;


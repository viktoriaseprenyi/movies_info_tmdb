//Redux
import { combineReducers } from "redux";
//Reducers
import moviesReducer from "./moviesReducer";
import detailsReducers from "./detailsReducer";

const rootReducers = combineReducers({
    movies: moviesReducer,
    details: detailsReducers,
});

export default rootReducers;


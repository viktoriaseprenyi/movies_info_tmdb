const initialState = {
    nowPlayingMovie: [],
    topRatedMovie: [],
    upComingMovie: [],
    searched: [],
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {
                ...state,
                nowPlayingMovie: action.payload.nowPlayingMovie,
                topRatedMovie: action.payload.topRatedMovie,
                upComingMovie: action.payload.upComingMovie,
            };
        case "SEARCH_MOVIES":
            return {
                ...state,
                searched: action.payload.searched,
            };
        case "CLEAR_SEARCH":
            return {
                ...state,
                searched: [],
            };
        default:
            return { ...state }
    };
};

export default moviesReducer;
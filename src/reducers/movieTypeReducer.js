const initialState = {
    movieType: [],
};

const movieTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIE_TYPE":
            return {
                ...state, movieType: action.payload.movieType,
            };
        default:
            return { ...state }
    };
};

export default movieTypeReducer;

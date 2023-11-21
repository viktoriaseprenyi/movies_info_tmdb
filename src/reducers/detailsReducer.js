const initialState = {
    movie: [],
    trailer: [],
    isLoading: true,
};

const detailsReducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_DETAIL":
            return { ...state, isLoading: true };
        case "GET_DETAIL":
            return { ...state, movie: action.payload.movie, trailer: action.payload.trailer, isLoading: false, };
        default:
            return { ...state };
    };
};

export default detailsReducers;
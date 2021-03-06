
let initialState = {
    vote: [1, 2, 3, 4, 5],
    favoriteMovies: [],
    favoriteId: [],
    viewed: [],
    rated: []
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_FAVORITE_MOVIES": {
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.favoriteMovies]
            }
        }

        case "REMOVE_FAVORITE_MOVIES": {

            const favoriteMovies = state.favoriteMovies.filter(
                (item) => item !== action.movieImg
            )

            return {
                ...state,
                favoriteMovies: favoriteMovies,
            }
        }

        case "ADD_FAVORITE_ID": {
            return {
                ...state,
                favoriteId: [...state.favoriteId, action.favoriteId]
            }
        }

        case "REMOVE_FAVORITE_ID": {
            const favoriteId = state.favoriteId.filter(
                (item) => item !== action.movieId
            )

            return {
                ...state,
                favoriteId: favoriteId
            }
        }

        case "ADD_VIEWED": {
            return {
                ...state,
                viewed: [...state.viewed, action.viewed]
            }
        }

        case "ADD_RATED": {
            return {
                ...state,
                rated: [...state.rated, action.rated]
            }
        }

        case "ADD_ASSESSED": {
            return {
                ...state,
                assessed: [...state.assessed, action.assessed]
            }
        }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies });
export const removeFavoriteMoviesAC = (movieImg) => ({ type: "REMOVE_FAVORITE_MOVIES", movieImg });
export const addFavoriteIdAC = (favoriteId) => ({ type: "ADD_FAVORITE_ID", favoriteId });
export const removeFavoriteIdAC = (movieId) => ({ type: "REMOVE_FAVORITE_ID", movieId });
export const addViewedAC = (viewed) => ({ type: "ADD_VIEWED", viewed });
export const addRatedAC = (rated) => ({ type: "ADD_RATED", rated });

/*Add favorite movies */
export const addFavoriteMoviesThunk = (favoriteMovies, favoriteId) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(favoriteMovies));
    dispatch(addFavoriteIdAC(favoriteId));
};

/*Add viewed movies */
export const addViewedThunk = (viewed) => (dispatch) => {
    dispatch(addViewedAC(viewed));
};

/*Add rated movies */
export const addRatedThunk = (rated) => (dispatch) => {
    dispatch(addRatedAC(rated));
};


export default profileReducer;

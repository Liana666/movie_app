import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { getGenres } from "../../../api/api";
import { withRouter } from "react-router";


const MovieCardContainer = (props) => {
    const [genres, setGenres] = useState([]);


    useEffect(() => {
        getGenres()
            .then(response => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);

    console.log(props)

    return (
        <>
            <MovieCard
                title={props.title}
                overview={props.overview}
                poster_path={props.poster_path}
                release_date={props.release_date}
                vote_average={props.vote_average}
                genre_ids={props.genre_ids}
                adult={props.adult}
                genres={genres} />
        </>
    )
}


// const mapStatetoProps = (state) => {
//     return {
//         genres: state.MainPage.genres,
//     }
// }

// // const mapDispatchtoProps = (dispatch) => {
// //     return {
// //         addGenre: (genre) => {
// //             dispatch(addGenreAC(genre));
// //         },


// //         addMovies: (movies) => {
// //             dispatch(addMoviesAC(movies));
// //         },

// //         addPopular: (popular) => {
// //             dispatch(addPopularAC(popular));
// //         },

// //         getGenres: getGenresThunk

// //     }
// // }


export default withRouter(MovieCardContainer);
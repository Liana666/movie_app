import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFavoriteMoviesAC, removeFavoriteIdAC } from "../../redux/reducers/profileReducer";

import fire from "../../img/fire-abs.png";
import favorites from "../../img/favorites.png";
import check from "../../img/check.png";
import plus from "../../img/plus.png";

import PieChard from "./PieChard";

import card from "./MovieCard.module.css";


const MovieCard = ({ poster_path, addFavorite, id, favoriteMovies,
    favoriteId, adult, rated, title, single_genres,
    vote_average, release_date, overview, backdrop_path }) => {

    const dispatch = useDispatch();

    const imgSrc = 'https://image.tmdb.org/t/p/original/' + poster_path;

    const addNewFavorite = () => {
        addFavorite(imgSrc, id);
    }

    const removeFavorite = () => {
        dispatch(removeFavoriteIdAC(id));
        dispatch(removeFavoriteMoviesAC(imgSrc));
    }

    return (
        <div className={card.grid_item}>
            {favoriteId.includes(id) ?
                <div onClick={removeFavorite} className={card.favorites}>
                    <img className={card.favorite_item} src={favorites} />
                    <img className={card.favorite} src={check} />
                </div>
                : <div onClick={addNewFavorite} className={card.favorites}>
                    <img className={card.favorite_item} src={favorites} />
                    <img className={card.favorite} src={plus} />
                </div>
            }



            <img className={card.card_img} src={fire} />
            <span className={card.card_age}>
                {adult ? <span>18+</span> : null}
            </span>
            <div className={card.path_wrapper}>
                {rated.map(rate => rate.img === imgSrc ?
                    <div className={card.over}>
                        <span className={card.over_vote}>{rate.vote}/5</span>
                    </div>
                    : null
                )}

                <img src={imgSrc} className={card.movie_img} alt="" />
            </div>

            <div className={card.card_info_top}>
                <div className={card.title}>{title}</div>
                <div className={card.info_movie}>
                    <div>
                        <div>????????: <span className={card.date}>{release_date}</span></div>
                        <div className={card.genre_wrapper}><span className={card.genre_title}>??????????:</span>
                            {single_genres.length !== 0 ? single_genres.map(g => <span key={g.id} className={card.genre}>{g}</span>)
                                : null}
                        </div>
                        <div className={card.vote_mob}>??????????????: <span className={card.date}>{vote_average}</span></div>
                    </div>
                    <div className={card.chard_wrapper}>
                        <PieChard vote={vote_average} />
                        <span className={card.chard}>{vote_average}</span>
                    </div>
                </div>
            </div>

            <div className={card.card_info_bottom}>
                <div className={card.text}>
                    {overview.slice(0, 145) + '...'}
                </div>


                <Link to={{
                    pathname: '/singlemovie',
                    state:
                    {
                        title: title,
                        back: backdrop_path,
                        poster: poster_path,
                        vote_average: vote_average,
                        overview: overview,
                        id: id,
                        release_date: release_date,
                        single_genres: single_genres,
                    }
                }}>
                    <div className={card.btn}>?????????????????? ?? ????????????</div>
                </Link>
            </div>


        </div >
    )
}



export default MovieCard;
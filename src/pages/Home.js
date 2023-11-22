//React, redux
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//Action
import { loadMovies } from "../actions/moviesAction";
//Style, animation
import { motion } from "framer-motion";
import styled from "styled-components";
//Components
import Movie from "../components/Movie";
import MovieDetails from "../components/MovieDetails";


const Home = () => {
    //Location path
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    console.log(location.pathname)
    //For image URL
    const image_base_URL = "https://image.tmdb.org/t/p/original/";

    //Fecth movies
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

    const { nowPlayingMovie, topRatedMovie, upComingMovie, searched } = useSelector((state) => state.movies);

    return (
        <>
            {pathId && <MovieDetails image_base_URL={image_base_URL} pathId={pathId} />}
            <MovieList>
                {searched.length ? (<div className="searched"><h2>Searched Movies</h2>
                    <Movies>
                        {searched
                            .filter(movie => movie.backdrop_path)
                            .map(movie => (
                                <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}></Movie>
                            ))}
                    </Movies></div>) : ("")}
                <h2>Now Playing</h2>
                <Movies>
                    {nowPlayingMovie
                        .filter(movie => movie.adult === false)
                        .map(movie => (
                            <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}></Movie>
                        ))}
                </Movies>
                <h2>Top Rated</h2>
                <Movies>
                    {topRatedMovie
                        .filter(movie => movie.adult === false)
                        .map(movie => (
                            <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}></Movie>
                        ))}

                </Movies>
                <h2>Upcoming Movies</h2>
                <Movies>
                    {upComingMovie
                        .filter(movie => movie.adult === false)
                        .map(movie => (
                            <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}></Movie>
                        ))}

                </Movies>
            </MovieList>
        </>
    )
};

const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
    h2{
        padding: 2rem 0rem;
    }
`;


const Movies = styled(motion.div)`
min-height: 50vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;

`;


export default Home;

//React, redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//Action
import { loadMovies } from "../actions/moviesAction";
import { loadMovieType } from "../actions/movieTypeAction";
//Style, animation
import { motion } from "framer-motion";
import styled from "styled-components";
import {FreeMode} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
//Components
import Movie from "../components/Movie";
import MovieDetails from "../components/MovieDetails";
import MovieType from "../components/MovieType";


const Home = () => {
    //Location path
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //For image URL
    const image_base_URL = "https://image.tmdb.org/t/p/w500/";

    //Fecth movies
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies());
        dispatch(loadMovieType());
    }, [dispatch]);

    //Movies type state to h2
    const [selectedMovieType, setSelectedMovieType] = useState('');

    //Access to the store
    const { nowPlayingMovie, topRatedMovie, upComingMovie, searched, filtered } = useSelector((state) => state.movies);
    const { movieType } = useSelector((state) => state.genres)


    return (
        <>
            {pathId && <MovieDetails image_base_URL={image_base_URL} pathId={pathId} />}
            <MovieList>
                <GenresContainer>
                    {movieType.map(type => <MovieType setSelectedMovieType={setSelectedMovieType} key={type.id} id={type.id} name={type.name}></MovieType>)}
                </GenresContainer>
                {filtered.length ? (
                    <div className="filtered">
                        <h2>{selectedMovieType ? `${selectedMovieType} Movies` : "Filtered Movies"}</h2>
                        <Carousel>
                    <Swiper slidesPerView="auto"
          spaceBetween={2}
          freeMode={true}
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          style={{ height: 'auto'}}
          >

                            {filtered
                                .filter(movie => movie.backdrop_path)
                                .map(movie => (
                                    <SwiperSlide key={movie.id}
                                    style={{ width: 'auto', height: 'auto'}}
                                    className="shadow-lg animate-slideright">
                                    <Movie
                                        image_base_URL={image_base_URL}
                                        title={movie.title}
                                        id={movie.id}
                                        key={movie.id}
                                        image={movie.backdrop_path}
                                    ></Movie>
                                    </SwiperSlide>
                                ))}
</Swiper>
</Carousel>
                    </div>
                ) : ("")}
                {searched.length ? (<div className="searched"><h2>Searched Movies</h2>
                <Carousel>
                    <Swiper slidesPerView="auto"
          spaceBetween={2}
          freeMode={true}
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4">

                        {searched
                            .filter(movie => movie.backdrop_path)
                            .map(movie => (
                                <SwiperSlide key={movie.id}
                                style={{ width: 'auto', height: 'auto' }}
                                className="shadow-lg animate-slideright">
                                <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}></Movie>
                                </SwiperSlide>
                            ))}
                            </Swiper>
</Carousel>
</div>) : ("")}
                <h2>Now Playing</h2>
                <Carousel>
                    <Swiper slidesPerView="auto"
          spaceBetween={2}
          freeMode={true}
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4">
                        {nowPlayingMovie
                            .filter(movie => movie.adult === false)
                            .map(movie => (
                                <SwiperSlide key={movie.id}
                                style={{ width: 'auto', height: 'auto' }}
                                className="shadow-lg animate-slideright">
                                <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}/>
                                </SwiperSlide>
                            ))}
                            
                    </Swiper>
                </Carousel>
                <h2>Top Rated</h2>
                <Carousel>
                    <Swiper slidesPerView="auto"
          spaceBetween={2}
          freeMode={true}
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4">
                    {topRatedMovie
                        .filter(movie => movie.adult === false)
                        .map(movie => (
                            <SwiperSlide key={movie.id}
                                style={{ width: 'auto', height: 'auto' }}
                                className="shadow-lg animate-slideright">
                            <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}/>                         </SwiperSlide>
                            ))}
                    </Swiper>
                </Carousel>
                <h2>Upcoming Movies</h2>
                 <Carousel>
                    <Swiper slidesPerView="auto"
          spaceBetween={2}
          freeMode={true}
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4">
                    {upComingMovie
                        .filter(movie => movie.adult === false)
                        .map(movie => (
                            <SwiperSlide key={movie.id}
                                style={{ width: 'auto', height: 'auto' }}
                                className="shadow-lg animate-slideright">
                            <Movie image_base_URL={image_base_URL} title={movie.title} id={movie.id} key={movie.id} image={movie.backdrop_path}/>
                         </SwiperSlide>
                            ))}
                    </Swiper>
                </Carousel>
            </MovieList>
        </>
    )
};

const MovieList = styled(motion.div)`
  padding: 0rem 0rem 0rem 5rem;
    h2{
        padding: 1rem 0rem;
    }
`;

/*const Movies = styled(motion.div)`
min-height: 50vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
`;*/

const Carousel = styled(motion.div)`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

const GenresContainer = styled(motion.div)`
margin-top: 2.5rem;
`;


export default Home;
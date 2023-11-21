import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import loadDetails from "../actions/detailsAction";
import { useDispatch } from "react-redux";

const Movie = ({ title, id, image, image_base_URL, isDetailOpen, setIsDetailOpen }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();

    const openMovieDetail = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetails(stringPathId));
        setIsDetailOpen(true);
    };

    return (
        <StyledMovie onClick={openMovieDetail}>
            <h3>{title}</h3>
            <img src={`${image_base_URL}${image}`} alt="movie_image"></img>
        </StyledMovie>
    )
};

const StyledMovie = styled(motion.div)`
/* From https://css.glass */
background: linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(227, 227, 227, 0.18) 100%);
border-radius: 15px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.3px);
-webkit-backdrop-filter: blur(3.3px);
padding-top: 1rem;
min-height: 30vh;
cursor: pointer;
overflow: hidden;
img{
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
h3{
    padding-left: 1rem;
}
`;

export default Movie;
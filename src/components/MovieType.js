import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { fetchFiltered } from "../actions/moviesAction";

const MovieType = ({ id, name, setSelectedMovieType }) => {
    const dispatch = useDispatch();

    const handleFilterByType = () => {
        setSelectedMovieType(name);
        dispatch(fetchFiltered(id));
    };


    return (
        <StyledTypes>
            <button onClick={handleFilterByType}>{name}</button>
        </StyledTypes>
    );
};

const StyledTypes = styled(motion.div)` 
display: inline-grid;
grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
min-height: 5vh;
button{
    border-radius: 3rem;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: #292936;
    color: white;
    cursor:pointer;
    }
    button:hover{
    background-color: white;
    color: #292936;
    transform: scale(1.1);
    }
`;

export default MovieType;
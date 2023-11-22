//React, Redux
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//Style,animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Actions
import { fetchSearch } from "../actions/moviesAction";


const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    };

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };

    const clearSearchHandler = () => {
        dispatch({ type: "CLEAR_SEARCH" })
    };


    return (<StyledNav>
        <Logo onClick={clearSearchHandler}>
            <h1>WWWW</h1>
            <p>What would we watch?</p>
        </Logo>
        <Search>
            <form >
                <input type="text" onChange={inputHandler} value={textInput} />
                <button type="submit" onClick={searchSubmitHandler}>Search</button>
            </form>
        </Search>
    </StyledNav>)
};

const StyledNav = styled(motion.nav)`

`;

const Logo = styled(motion.div)`
text-align: center;
cursor:pointer;
p{
    font-size:0.8rem;
    text-transform: uppercase;
}
`;
const Search = styled(motion.div)`
padding: 2rem 5rem;
text-align: center;
input{
    width: 20%;
    border:none;
    border-radius: 10px;
    outline: none;
    padding: 0.4rem;
    margin-right: 1rem;
}
button{
    padding: 0.4rem 2rem;
    border-radius: 10px;
    cursor: pointer;
    border:none;
    background-color: white;
    color: #15151b;

}
`;

export default Nav;
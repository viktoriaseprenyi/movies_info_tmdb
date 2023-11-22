//React,Redux
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//Style, animation
import styled from "styled-components";
import { motion } from "framer-motion";



const MovieDetails = ({ image_base_URL }) => {
    const navigate = useNavigate();
    const exitMovieDetail = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = 'auto';
            navigate('/');

        }
    };

    const { movie, trailer, isLoading } = useSelector((state) => state.details);

    //Movie duration 
    const movieDurationHours = Math.floor(movie.runtime / 60);
    const movieDurationMinutes = movie.runtime % 60;

    return (<>{!isLoading && (<CardShadow className="shadow" onClick={exitMovieDetail}>
        <Details>
            <Info>
                <div className="title">
                    <h3>{movie.title} ({movie.release_date.slice(0, 4)})</h3>
                    <p>{movie.tagline}</p>
                </div>
                <div className="type">
                    {movie.genres.map(data => <p key={data.id}>{data.name}</p>)}</div>
                <div className="info">
                    <p>{`${movieDurationHours}h ${movieDurationMinutes}m`}</p>
                </div>
            </Info>
            <Media>
                <img src={`${image_base_URL}${movie.backdrop_path}`} alt="movie_image"></img>
            </Media>
            <Overview >
                <Description>
                    <h3>Description</h3>
                    <p>{movie.overview}</p>
                </Description>
                <Video>{trailer
                    .filter((video) => video.type === "Trailer").slice(0, 1)
                    .map((video) =>
                        <iframe title={movie.title} width="820" height="415" src={`https://www.youtube.com/embed/${video.key}`} key={movie.id}></iframe>)}
                </Video>
            </Overview>

        </Details>
    </CardShadow >)
    }</>
    )
};

const CardShadow = styled(motion.div)`
width: 100vw;
min-height: 100vh;
background-color: rgba(0,0,0,0.5);
position: fixed;
overflow-y: scroll;
top: 0;
left: 0;
z-index:5;
&::-webkit-scrollbar{
    width: 0.5rem;
}
&::-webkit-scrollbar-thumb{
    background-color: #fff;
    border-radius: 1rem;
}
&::-webkit-scrollbar-track{
    background: linear-gradient(0deg, #0f021d 0%, #15151b 100%);
}
 `;

const Details = styled(motion.div)`
 width: 90%;
 margin: 1.5rem 0rem;
  border-radius: 1rem;
  padding: 2rem 0rem;
  background-color: white;
  position: absolute;
  left: 5%;
  color: black;
  img {
    width: 100%;
  }
            `;

const Info = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
margin:0rem 2rem;
h3,p{
    padding-bottom: 1.2rem;
    padding-left: 1rem;
}
h3{
    font-size: 1.5rem;
}
.type p{
    display: inline;
    text-transform: initial;
}
            `;

const Media = styled(motion.div)`
margin-top: 1rem;
img{
    height: 100vh;
    object-fit: cover;
}
            `;
const Overview = styled(motion.div)`
display: flex;
justify-content: space-evenly;
             `;

const Description = styled(motion.div)`
padding: 3rem 0rem;
margin: 0rem 3rem;
flex:1;
h3{
    padding-bottom: 1.5rem;
    font-size: 1.5rem;
}
            `;

const Video = styled(motion.div)`
margin-top: 3rem;
margin-right: 3rem;
flex: 1;

            `;


export default MovieDetails;
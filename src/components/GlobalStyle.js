import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    width: 100%;
    background: linear-gradient(0deg, #0f021d 0%, #15151b 100%);
    color: white;
    font-family: "Lato", sans-serif;
    letter-spacing: 0.3rem;
    overflow-x: hidden;
}

html{
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
}

input{
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size:0.8rem;
    
}
button{
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: bolder;
    border:none;
}

button:hover{
    color: white;
    background-color:#292936;
}

.link{
    text-decoration: none;
    color:white;
}

h1{
    font-family: "Vina Sans", sans-serif;
    font-size: 5rem;
   
}

h2{
    font-family: "Vina Sans", sans-serif;
    font-size: 4.5rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
}

h3{
    font-size: 1.1rem;
    font-weight: bold;
}

p{
    font-size: 1.2rem;
}

.swiper-wrapper {
    gap: 2rem;
}

`;
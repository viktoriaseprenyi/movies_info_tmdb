import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (<>
    <GlobalStyle />
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Home />}></Route>
    </Routes>
  </>
  );
}

export default App;

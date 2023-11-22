//React
import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { GlobalStyle } from "./components/GlobalStyle";
import Nav from "./components/Nav";
//Page
import Home from "./pages/Home";

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

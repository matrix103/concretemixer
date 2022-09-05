import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "@mui/material";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Container >
          <Main/>
      </Container>
    </>
  );
}

export default App;

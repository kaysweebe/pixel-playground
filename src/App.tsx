import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    Grommet,
    grommet,
    Page,
} from "grommet";
import { deepMerge } from "grommet/utils";
import AppBar from "./Home/AppBar";
import HomePage from './Home/HomePage';
import TicTacToeHound from './TicTacToeHound/TicTacToeHound';


const theme = deepMerge(grommet, {
  global: {
   colors: {
       brand: '#32cd32',
     },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

function App() {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark(!dark)
  }
  return (
    <div className="App">
      <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
       <Page>
          <AppBar dark={dark} onClick={() => handleClick()}/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tic-tac-toe-hound" element={<TicTacToeHound />} />
            </Routes>
          </BrowserRouter>
      </Page>
      </Grommet>
    </div>
  );
}

export default App;

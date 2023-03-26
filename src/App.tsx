import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Grommet,
    grommet,
    Header,
    Page,
    PageContent,
    PageHeader,
    Text,
} from "grommet";
import { deepMerge } from "grommet/utils";
import { Moon, Sun } from "grommet-icons";
import AppBar from "./Home/AppBar";
import CardTemplate from './Home/CardTemplate';
import HomePage from './Home/HomePage';


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
        <HomePage />
      </Page>
      </Grommet>
    </div>
  );
}

export default App;

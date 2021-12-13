import React from "react";
import Routes from "./Routes";

import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

// IMPORT BASE STYLE
import "./styles/_base.scss";

// CREATE MATERIAL UI THEME
const theme = createTheme({
  palette: {
    primary: {
      main: '#f2aa26',
      dark: '#f09c01',
    },
    secondary: {
      main: '#11cb5f',
    },
    text: {
      primary: '#373585',
      secondary: '#a4a643'
    },
    background: {
      default: '#f7f8fc'
    }
  },
  typography: {
    fontFamily: 'Muli, sans-serif',
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    htmlFontSize: 8,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;

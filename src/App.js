import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import './App.css';
import Homepage from './Pages/homePage';
import DetailsPage from './Pages/detailsPage';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(207, 26%, 17%)',
      light: '#53636a',
      dark: '#1c2a30',
    },
    secondary: {
      main: 'hsl(209, 23%, 22%)',
      light: '#55606a',
      dark: '#1e2730',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontFamily: 'SegoeUI, Segoe UI',
  },
});

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(0, 0%, 98%)',
      light: '#53636a',
      dark: '#1c2a30',
    },
    secondary: {
      main: 'hsl(0, 0%, 100%)',
      light: '#fbfbfb',
      dark: '#afafaf',
    },
    text: {
      primary: 'hsl(200, 15%, 8%)',
    },
  },
  typography: {
    fontFamily: 'SegoeUI, Segoe UI',
  },
});

function App() {
  const mode = useSelector((state) => state.mode);
  return (
    <ThemeProvider theme={!mode.isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/countries/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

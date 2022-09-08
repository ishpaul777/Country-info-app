import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import './App.css';
import Homepage from './Pages/homePage';
import DetailsPage from './Pages/detailsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(207, 26%, 17%)',
      light: '#53636a',
      dark: '#1c2a30',
    },
    secondary: {
      main: 'hsl(209, 23%, 22%)',
    },
  },
  typography: {
    fontFamily: 'SegoeUI, Segoe UI',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/countries/:country" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

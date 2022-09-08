import React from 'react';
import { Link } from 'react-router-dom';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import NightlightIcon from '@mui/icons-material/Nightlight';
import {
  AppBar, Toolbar, Typography, Button,
} from '@mui/material';

const Navbar = () => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: 'secondary',
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="text" sx={{ color: '#fff' }}>
          <ArrowBackIosIcon />
        </Button>
      </Link>
      <Typography variant="h5" component="h1">
        Country Metrics
      </Typography>
      {/* { FOR IMPLEMENTATION OF DARK AND LIGHT MODE IGNORE THESE */}
      {/* {
        (2 === 2)
          ? (
            <Button
              variant="text"
              style={{ color: '#fff' }}
              startIcon={<WbSunnyIcon style={{ fill: '#fff' }} />}
            >
              Light
            </Button>
          )
          : (
            <Button
              variant="text"
              style={{ color: '#fff' }}
              startIcon={<NightlightIcon style={{ fill: '#fff' }} />}
            >
              Dark
            </Button>
          )
      } */}
      <Button
        variant="text"
        style={{ color: '#fff' }}
        startIcon={<WbSunnyIcon style={{ fill: '#fff' }} />}
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;

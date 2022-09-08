import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
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
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h5" component="h1">
        Covid Metrics
      </Typography>
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
      >
        Light
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;

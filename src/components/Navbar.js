/* eslint-disable no-unused-vars */
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from '@emotion/react';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {
  AppBar, Toolbar, Typography, Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../redux/toggleMode/mode';

const Navbar = () => {
  const mode = useSelector((state) => state.mode);
  // console.log(mode.isDarkMode);
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'secondary',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h1">
          Where in the world?
        </Typography>
        {
              (!mode.isDarkMode)
                ? (
                  <Button
                    variant="text"
                    style={{ color: theme.palette.text.primary }}
                    startIcon={<WbSunnyIcon style={{ fill: theme.palette.text.primary }} />}
                    onClick={() => {
                      document.body.classList.add('dark');
                      dispatch(toggleMode());
                    }}
                  >
                    Light
                  </Button>
                )
                : (
                  <Button
                    variant="text"
                    style={{ color: theme.palette.text.primary }}
                    startIcon={<NightlightIcon style={{ fill: theme.palette.text.primary }} />}
                    onClick={() => {
                      document.body.classList.remove('dark');
                      dispatch(toggleMode());
                    }}
                  >
                    Dark
                  </Button>
                )
            }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

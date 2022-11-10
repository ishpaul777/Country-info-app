import * as React from 'react';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './select.css';
import { useDispatch } from 'react-redux';
import { setContinent } from '../redux/Countries/selectedContinent';

function SelectContinent({ continent }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // setContinent(event.target.value);
    dispatch(setContinent(event.target.value));
    // console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={continent}
          label="Continent"
          onChange={handleChange}
          className="select-options-navbar-main-color"
        >
          <MenuItem
            value="all"
            sx={{
              backgroundColor: 'secondary.main',
              color: '#fff',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
              '&:focus': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            All Regions
          </MenuItem>
          <MenuItem
            value="region/asia"
            sx={{
              backgroundColor: 'secondary.main',
              color: '#fff',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
              '&:focus': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            Asia
          </MenuItem>
          <MenuItem
            value="region/america"
            sx={{
              backgroundColor: 'secondary.main',
              color: '#fff',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
              '&:focus': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            America
          </MenuItem>
          <MenuItem
            value="region/europe"
            sx={{
              backgroundColor: 'secondary.main',
              color: '#fff',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
              '&:focus': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            Europe

          </MenuItem>
          <MenuItem
            value="region/oceania"
            sx={{
              backgroundColor: 'secondary.main',
              color: '#fff',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
              '&:focus': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            Oceania
          </MenuItem>
          <MenuItem
            value="region/africa"
            sx={{
              backgroundColor: 'secondary.main',
              color: '#fff',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
              '&:focus': {
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            Africa
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

SelectContinent.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default SelectContinent;

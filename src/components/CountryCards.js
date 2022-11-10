/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CountryCards = (props) => {
  const theme = useTheme();
  const {
    name, flag, population, continents, capital,
  } = props;
  return (
    <Link
      to={`/countries/${name}`}
      state={props}
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          width: '20vw',
          textAlign: 'left',
          color: theme.palette.text.primary,
          backgroundColor: 'secondary.main',
          cursor: 'pointer',
          [theme.breakpoints.down('md')]: {
            width: '35vw',
          },
          [theme.breakpoints.down('sm')]: {
            width: '75vw',
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={flag}
          alt="flag"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 500 }}>
            Population:
            <span style={{ fontWeight: 400 }}>
              {' '}
              {population}
            </span>
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 500 }}>
            Region:
            <span style={{ fontWeight: 400 }}>
              {' '}
              {continents}
            </span>
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 500 }}>
            Capital:
            <span style={{ fontWeight: 400 }}>
              {' '}
              {capital}
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

CountryCards.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  continents: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default CountryCards;
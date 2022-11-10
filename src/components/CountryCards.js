import React from 'react';
import {
  Card, CardContent, IconButton, Typography, useTheme,
} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CountryCards = (props) => {
  const theme = useTheme();
  const {
    name, population, continents, subregion,
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
          height: '30vh',
          color: '#fff',
          backgroundColor: 'primary.main',
          cursor: 'pointer',
          [theme.breakpoints.down('md')]: {
            width: '35vw',
          },
          [theme.breakpoints.down('sm')]: {
            width: '48vw',
            height: '30vh',
            margin: '.2rem',
          },
        }}
      >
        {/* <CardMedia
          component="img"
          height="200"
          width="200"
          image={flag}
          alt="flag"
        /> */}
        <CardContent>
          <IconButton
            sx={{
              float: 'right',
              p: 0,
            }}
          >
            <ArrowCircleRightIcon />
          </IconButton>
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
            Sub Region:
            <span style={{ fontWeight: 400 }}>
              {' '}
              {subregion}
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

CountryCards.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  subregion: PropTypes.string,
  population: PropTypes.number.isRequired,
  continents: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default CountryCards;

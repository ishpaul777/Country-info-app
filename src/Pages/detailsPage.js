import React from 'react';
import {
  Box, Stack, Button, Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@emotion/react';

const DetailsPage = () => {
  const theme = useTheme();
  const location = useLocation();
  const {
    languages,
    population,
    flag,
    name,
    nativeName,
    currencies,
    capital,
    continents,
    subregion,
    topLevelDomain,
  } = (location.state);
  const languageArray = Object.values(languages);
  const nativeNameArray = Object.values(nativeName);
  const currenciesArray = Object.values(currencies);
  //   console.log();
  return (
    <div>
      <Box sx={{
        pt: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('sm')]: {
          pt: 5,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        },
      }}
      >
        <Link to="/" style={{ textDecoration: 'none', alignSelf: 'start', margin: '5px' }}>
          <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
            Home
          </Button>
        </Link>
        <Stack
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
        >
          <img
            style={{
              width: '33vw',
              height: '48vh',
              padding: '2rem',
            }}
            src={flag}
            alt={name}
          />
        </Stack>
        <Stack
          sx={{
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
          }}
        >
          <img
            style={{
              width: '90vw',
              height: '40vh',
              padding: '2rem',
            }}
            src={flag}
            alt={name}
          />
        </Stack>
        <Stack sx={{ textAlign: 'left', p: 4 }}>
          <Typography variant="h4" color="white" component="h1" sx={{ fontWeight: 700, pb: 2 }}>
            {name}
          </Typography>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '100px',
          }}
          >
            <Stack>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Native Name:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {nativeNameArray[0].official}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Population:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {population.toLocaleString()}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Region:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {continents}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Sub Region:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {subregion}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Capital:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {capital[0]}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Currency:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {currenciesArray[0].symbol}
                  {'  '}
                  {currenciesArray[0].name}
                  {' '}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Languages:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {languageArray.join(', ')}
                </span>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                component="li"
                sx={{
                  fontWeight: 600,
                  width: '80vw',
                  p: 2,
                  borderRadius: '8px',
                  listStyle: 'none',
                  background: '#ef6fa1',
                  fontSize: '1.1rem',
                  mb: 1,
                }}
              >
                Top Level Domain:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  &apos;
                  {topLevelDomain}
                  &apos;
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default DetailsPage;

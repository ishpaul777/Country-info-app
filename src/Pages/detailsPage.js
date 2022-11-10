/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box, Stack, Button, Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    borders,
  } = (location.state);
  const languageArray = Object.values(languages);
  const nativeNameArray = Object.values(nativeName);
  const currenciesArray = Object.values(currencies);
  const regionNames = new Intl.DisplayNames(
    ['en'], { type: 'region' },
  );
  return (
    <div>
      <Box sx={{
        // p: 5,
        pt: 15,
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
      >
        <Link
          to="/"
          style={{
            position: 'absolute',
            top: '6rem',
            left: '2rem',
            textDecoration: 'none',
            alignSelf: 'start',
          }}
        >
          <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon />}>
            Home
          </Button>
        </Link>
        <Stack sx={{
          width: '40vw',
          height: '50vh',
          [theme.breakpoints.down('md')]: {
            width: '70vw',
            height: '43vh',
            alignSelf: 'center',
          },
          [theme.breakpoints.down('sm')]: {
            height: '30vh',
          },
        }}
        >
          {/* (theme.breakpoints.down('md')) ? console.log('hello') : console.log('hii') */}
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={flag}
            alt={name}
          />
        </Stack>
        <Stack sx={{
          textAlign: 'left',
          width: '50%',
          p: 4,
          [theme.breakpoints.down('md')]: {
            pt: 15,
          },
          [theme.breakpoints.down('sm')]: {
            pt: 5,
          },
        }}
        >
          {/* color: theme.palette.,
          color: theme.palette.text.primary, */}
          <Typography variant="h4" component="h1" color="text.primary" sx={{ fontWeight: 700, pb: 2 }}>
            {name}
          </Typography>
          <Stack sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '100px',
            flexDirection: 'row',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              gap: '20px',
            },
          }}
          >
            <Stack>
              <Typography
                variant="h6"
                color="text.primary"
                component="li"
                sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}
              >
                Native Name:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {nativeNameArray[0].official}
                </span>
              </Typography>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Population:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {population.toLocaleString()}
                </span>
              </Typography>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Region:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {continents}
                </span>
              </Typography>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Sub Region:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {subregion}
                </span>
              </Typography>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Capital:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {capital[0]}
                </span>
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Currency:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {currenciesArray[0].name}
                  {'  '}
                  &apos;
                  {currenciesArray[0].symbol}
                  &apos;
                  {' '}
                </span>
              </Typography>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Languages:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {languageArray.join(', ')}
                </span>
              </Typography>
              <Typography variant="h6" color="text.primary" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Top Level Domain:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  &apos;
                  {topLevelDomain}
                  {' '}
                  &apos;
                </span>
              </Typography>
            </Stack>
          </Stack>
          {
            (borders)
            && (
            <Stack sx={{
              mt: 4,
              width: '60%',
              flexWrap: 'wrap',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '1rem',
            }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                component="li"
                sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}
              >
                Borders:
              </Typography>
              {
                borders.map((country) => (
                  <Button
                    variant="contained"
                    color="secondary"
                    key={country}
                    sx={{
                      p: 2,
                      pt: 1,
                      pb: 1,
                      width: 'fit-content',
                    }}
                  >
                    {country}
                  </Button>
                ))
              }

            </Stack>
            )
          }

        </Stack>
      </Box>
    </div>
  );
};

export default DetailsPage;

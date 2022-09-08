import React from 'react';
import {
  Box, Stack, Button, Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DetailsPage = () => {
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
      }}
      >
        <Stack>
          <Link to="/" style={{ textDecoration: 'none', alignSelf: 'start' }}>
            <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon />}>
              Home
            </Button>
          </Link>
          <img style={{ width: '33vw', height: '48vh', padding: '2rem' }} src={flag} alt={name} />
        </Stack>
        <Stack sx={{ textAlign: 'left', p: 5 }}>
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
                sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}
              >
                Native Name:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {nativeNameArray[0].official}
                </span>
              </Typography>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Population:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {population.toLocaleString()}
                </span>
              </Typography>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Region:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {continents}
                </span>
              </Typography>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Sub Region:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {subregion}
                </span>
              </Typography>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Capital:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {capital[0]}
                </span>
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Currency:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {currenciesArray[0].symbol}
                  {'  '}
                  {currenciesArray[0].name}
                  {' '}
                </span>
              </Typography>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
                Languages:
                <span style={{ fontWeight: 400 }}>
                  {' '}
                  {languageArray.join(', ')}
                </span>
              </Typography>
              <Typography variant="h6" color="white" component="li" sx={{ fontWeight: 600, listStyle: 'none', fontSize: '1.1rem' }}>
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

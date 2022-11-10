import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Stack, useTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SearchInput from '../components/SearchInput';
import SelectContinent from '../components/SelectContinent';
import CountryCards from '../components/CountryCards';
import { getCountriesFromServer } from '../redux/Countries/countries';
// import { RootState } from '../redux/configureStore';

const Homepage = () => {
  const theme = useTheme();
  const countries = useSelector((state) => state.countries);
  const selectedContinent = useSelector((state) => state.selectedContinent);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCountriesFromServer(selectedContinent));
  }, [selectedContinent]);
  return (
    <Box
      component="main"
      sx={{
        mt: '2rem',
        p: '2rem 4rem',
        [theme.breakpoints.down('sm')]: {
          p: '0rem',
        },
      }}
    >
      <Stack sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
        },
      }}
      >
        <SearchInput />
        <SelectContinent continent={selectedContinent} />
      </Stack>
      <Stack sx={{
        mt: '2rem',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        // gap: '3rem',
        // [theme.breakpoints.down('sm')]: {
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   gap: '2rem',
        // },
      }}
      >
        {
          countries
            ? countries.map((country) => (
              <CountryCards
                name={country.name}
                flag={country.flag}
                population={country.population}
                capital={country.capital}
                continents={country.continents}
                languages={country.languages}
                nativeName={country.nativeName}
                currencies={country.currencies}
                subregion={country.subregion}
                topLevelDomain={country.topLevelDomain}
                borders={country.borders}
                code={country.cca3}
                key={uuidv4()}
              />
            ))
            : null
        }
      </Stack>
    </Box>
  );
};

export default Homepage;

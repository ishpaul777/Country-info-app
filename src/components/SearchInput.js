// import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import { searchCountries } from '../redux/Countries/countries';

const SearchInput = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Search = styled('div')(({ theme }) => ({
    // color: 'primary',
    height: '45px',
    position: 'relative',
    alignSelf: 'center',
    borderRadius: '5px',
    background: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
    width: '20vw',
    [theme.breakpoints.down('md')]: {
      width: '75vw',
    },
  }));

  const SearchIconWrapper = styled('div')(() => ({
    padding: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'primary',
    '& .MuiInputBase-input': {
      color: theme.palette.text.primary,
      padding: '10px',
      // vertical padding + font size from searchIcon
      //   transition: theme.transitions.create('width'),
      width: '100%',
      '&::placeholder': {
        color: theme.palette.text.primary,
      },
      [theme.breakpoints.down('md')]: {
        width: '70%',
      },
    },
  }));
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchCountries(e.target.value));
    }
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon style={{ fill: theme.palette.text.primary }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        color="primary"
        inputProps={{ 'aria-label': 'search' }}
        // onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => handleSearch(e)}
      />
    </Search>
  );
};

export default SearchInput;

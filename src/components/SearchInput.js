// import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { searchCountries } from '../redux/Countries/countries';

const SearchInput = () => {
  const dispatch = useDispatch();
  const Search = styled('div')(({ theme }) => ({
    // color: 'primary',
    height: '45px',
    position: 'relative',
    alignSelf: 'center',
    borderRadius: '5px',
    background: 'hsl(209, 23%, 22%)',
    // border: '1px solid grey',
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
      color: '#fff',
      padding: '10px',
      // vertical padding + font size from searchIcon
      //   transition: theme.transitions.create('width'),
      width: '100%',
      '&::placeholder': {
        color: '#fff',
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
        <SearchIcon style={{ fill: '#fff' }} />
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

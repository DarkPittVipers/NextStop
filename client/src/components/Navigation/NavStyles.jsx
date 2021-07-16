import { makeStyles } from '@material-ui/core/styles';

const NavStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: '"Oswald", sans-serif',
    backgroundColor: '#1A535C',
    boxShadow: '0px -5px 18px 10px rgba(0,0,0,0.5)',
    padding: '10px 30px',
    margin: 0,
  },
  searchBar: {
    border: '2px solid white',
    borderRadius: '8px',
  },
  destSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  destFont: {
    fontFamily: '"Oswald", sans-serif',
    fontWeight: '500',
    fontSize: '20px',
  },
  mottoFont: {
    color: '#fff',
    marginTop: -5,
    fontFamily: '"Oswald", sans-serif',
    fontWeight: '300',
    fontSize: '12px',
  },
  searchInputBox: {
    '& .MuiInputBase-root': {
      padding: '5px',
      color: 'white',
      fontFamily: '"Oswald", sans-serif',
      fontWeight: '500',
      fontSize: '18px',
      border: '2px solid #fff',
      borderRadius: 5,
      backgroundColor: '#ffffff18',
    },
    '& .Mui-focused': {
      border: '2px solid #ccc',
      boxShadow: '0px 0px 8px -1px rgba(0,0,0,0.6)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff6b6b',
      borderRadius: 3,
    },
    '& .MuiSvgIcon-root': {
      fill: '#fff',
    },
  },
  searchIcon: {
    marginLeft: '5px',
  },
  loginCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  loginBtn: {
    color: 'white',
    border: '2px solid white',
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: '#ffffff18',
    '&:hover': {
      backgroundColor: '#ffffff28',
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

export default NavStyles;

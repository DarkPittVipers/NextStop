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
  searchInputBox: {
    padding: '5px',
    color: 'white',
    fontFamily: '"Oswald", sans-serif',
    fontWeight: '500',
    fontSize: '20px',
    marginLeft: '10px',
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
    borderRadius: '8px',
    marginLeft: '5px',
  },
}));

export default NavStyles;

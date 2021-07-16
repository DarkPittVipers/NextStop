import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  tabContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    marginTop: '4rem',
    width: '88vw',
    height: '64vh',
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    overflow: 'auto',
  },
  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '0',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '4rem',
    width: '100%',
    backgroundColor: 'white',
    zIndex: '999',
  },
}));

export default useStyles;

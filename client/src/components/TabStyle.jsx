import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    width: '88vw',
    height: '72vh',
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },
}));

export default useStyles;

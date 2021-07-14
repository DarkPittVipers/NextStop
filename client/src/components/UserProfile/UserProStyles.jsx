import { makeStyles } from '@material-ui/core/styles';

const UserProStyles = makeStyles(() => ({
  profileContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    height: 'auto',
    width: 'auto',
    padding: '10px 30px',
    margin: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: '20px',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '100%',
    height: 'auto',
  },
  profilePic: {
    backgroundColor: '#f7fff7',
    width: '90%',
    height: 'auto',
  },
  userName: {
    width: '100%',
    height: 'auto',
  },
  budget: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  budtitle: {
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0 5px 0',
    width: '100%',
    height: 'auto',
    // fontWeight: 200,
  },
  budItems: {
    border: '1px solid black',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0 5px 0',
    width: '100%',
    height: 'auto',
  },
  myTrip: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '100%',
    height: 'auto',
  },
  myTripEvents: {
    border: '1px solid black',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0 5px 0',
    width: '100%',
    height: 'auto',
  },
  myTripHotels: {
    border: '1px solid black',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0 5px 0',
    width: '100%',
    height: 'auto',
  },
  myTripFlights: {
    border: '1px solid black',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0 5px 0',
    width: '100%',
    height: 'auto',
  },
  logOutBtn: {
    border: '1px solid black',
    borderRadius: '8px',
  },
}));

export default UserProStyles;

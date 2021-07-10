import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  formField: {
    margin: '5px 0px',
  },
  linkButton: {
    backgroundColor: 'transparent',
    color: 'inherit',
    lineHeight: 1.43,
    letterSpacing: 0.01071,
    fontWeight: 400,
    textDecoration: 'underline',
    textTransform: 'none',
    minWidth: 'auto',
    padding: '6px 2px 6px 6px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#66b',
      textDecoration: 'underline',
    },
    '&:disabled': {
      textDecoration: 'none',
    },
  },
  commentInfo: {
    color: '#888',
    marginLeft: 8,
  },
  likeButton: {
    minWidth: 'auto',
    padding: 0,
  },
  username: {
    fontWeight: 1000,
    fontSize: '1.5em',
  },
}));

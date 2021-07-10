import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  formField: {
    margin: '5px 0px'
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
      textDecoration: 'underline'
    },
    '&:disabled': {
      textDecoration: 'none'
    }
  },
  commentInfo: {
    color: '#888',
    marginLeft: 8
  },
  answerContainer: {
    padding: 3,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 5px 0 rgba(0, 0, 0, 0.04)',
    margin: '0px 3px 10px',
    borderRadius: 2,
    backgroundColor: '#fbf9f8'
  },
  qaContainer: {
    padding: '50px 0px 60px',
    borderRadius: 4
  },
  questionListContainer: {
    margin: 3,
    padding: 5,
    overflow: 'auto',
    border: '1px solid #ccc',
    borderRadius: 3,
    maxHeight: '85vh',
    width: 'unset',
    backgroundColor: '#f3efed',
    boxShadow: 'inset 0 0 5px 0 rgba(0, 0, 0, 0.1)'
  },
  buttonsContainer: {
    padding: 3
  },
  offWhite: {
    backgroundColor: '#fefcfb'
  },
  answerBody: {
    whiteSpace: 'pre-line'
  },
  likeButton: {
    minWidth: 'auto',
    padding: 0
  },
  username: {
    fontWeight: 1000,
    fontSize: '1.5em'
  }
}));

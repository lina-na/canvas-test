import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(() => ({
  root: {
    margin: 5,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      color: '#ccc',
    },
  },
}));

const MediaIcon = ({ icon }) => {
  const classes = useStyles();

  return (
    <Icon className={classes.root} color='inherit' component={icon} />
  );
}

export default MediaIcon;

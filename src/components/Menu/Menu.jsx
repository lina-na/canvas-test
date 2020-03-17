import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 700,
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" className={classes.text} />
      <BottomNavigationAction label="Features" className={classes.text} />
      <BottomNavigationAction label="Pages" className={classes.text} />
      <BottomNavigationAction label="Contacts" className={classes.text} />
    </BottomNavigation>
  );
}

export default Menu;
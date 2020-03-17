import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import AppleIcon from '@material-ui/icons/Apple';
import iphone from '../../Assets/slider-iphone.png';
import townImage from '../../Assets/town.jpg';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${townImage}) no-repeat`,
    backgroundSize: 'cover',
    height: '91vh',
  },
  iphone: {
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${iphone}) no-repeat`,
    backgroundSize: '50vh',
    backgroundPosition: 'bottom',
    width: '50vw',
    minWidth: 490,
    height: '100%',
  },
  blur: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backdropFilter: 'saturate(100%) blur(3px)',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  text: {
    fontSize: 44,
    color: '#fff',
    letterSpacing: '-2px',
    fontWeight: 400,
    maxWidth: 500,
    margin: 'auto 20px',
  },
  buttonContent: {
    color: '#eee',
    fontSize: 22,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'italic',
    textTransform: 'none',
  },
  button: {
    minHeight: 100,
    marginTop: 50,
    background: 'rgba(0, 0, 0, 0)',
    border: '3px solid #fff',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
  },
  icon: {
    width: 64,
    height: 64,
  },
}));

const Iphone = () => {
  const classes = useStyles();

  const buttonContent = () => {
    return (
      <div className={classes.buttonContent}>
        <Icon className={classes.icon} color='inherit' component={AppleIcon} />
        <div>
          START YOUR FREE TRIAL
        <div className={classes.buttonLabel}>30-Days & No Credit card Required</div>
        </div>
      </div>
    )
  };

  const matches = useMediaQuery('(min-width: 850px)');

  return (
    <div className={classes.root}>
      <div className={classes.blur}>
        {matches && <div className={classes.iphone} />}
        <div className={classes.text}>
          The new way to create awesome websites. Try using <b>Canvas</b> Template.
          <Button className={classes.button}>
            {buttonContent()}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Iphone;

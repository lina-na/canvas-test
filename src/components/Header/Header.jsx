import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import image from '../../Assets/Transparent-logo.png'
import Menu from '../Menu/Menu.jsx';
import MediaIcon from '../../components/MediaIcon/MediaIcon.jsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
  },
  logoContainer: {
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    cursor: 'pointer',
    padding: '25px 35px',
    '@media (max-width: 515px)': {
      padding: '10px',
    },
  },
  logo: {
    height: 40,
    '@media (max-width: 460px)': {
      height: 20,
    },
  },
  mediaContainer: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '27px 20px',
    height: '100%',
    color: '#777',
    marginLeft: 'auto',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
}));

const Header = () => {
  const classes = useStyles();

  const isShowingMedia = useMediaQuery('(min-width: 625px)');
  const isShowingLogo = useMediaQuery('(min-width: 404px)');

  return (
    <div className={classes.root}>
      {isShowingLogo && <div className={classes.logoContainer}>
        <img src={image} alt='logo' className={classes.logo} />
      </div>}
      <div className={classes.menu}>
        <Menu />
        {isShowingMedia && <div className={classes.mediaContainer}>
          <MediaIcon icon={FacebookIcon} />
          <MediaIcon icon={InstagramIcon} />
        </div>}
      </div>
    </div>
  );
}

export default Header;

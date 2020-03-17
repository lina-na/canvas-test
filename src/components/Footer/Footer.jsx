import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MediaIcon from '../../components/MediaIcon/MediaIcon.jsx';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: '-webkit-center',
    backgroundColor: '#282828',
    color: 'rgba(255,255,255,.25)',
    fontSize: 14,
    lineHeight: 1.8,
  },
  container: {
    maxWidth: 1170,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  mediaContainer: {
    padding: '33px 30px',
    height: '100%',
    color: '#777',
    marginLeft: 'auto',
  },
  link: {
    color: '#888',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.copyright}>
          Copyrights © 2014 All Rights Reserved by Canvas Inc.
          <div>
            <Link to="#" className={classes.link}>Terms of Use</Link>
            {'  /  '} 
            <Link to="#" className={classes.link}>Privacy Policy</Link>
          </div>
        </div>
        <div className={classes.mediaContainer}>
          <MediaIcon icon={FacebookIcon} />
          <MediaIcon icon={InstagramIcon} />
          <MediaIcon icon={TwitterIcon} />
          <MediaIcon icon={PinterestIcon} />
          <MediaIcon icon={GitHubIcon} />
          <MediaIcon icon={LinkedInIcon} />
        </div>
      </div>

    </div>
  );
}

export default Footer;

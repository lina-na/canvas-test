import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import AirplayIcon from '@material-ui/icons/Airplay';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EvStationIcon from '@material-ui/icons/EvStation';
import CheckIcon from '@material-ui/icons/Check';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: '-webkit-center',
    padding: '50px 0',
    backgroundColor: '#282828',
  },
  container: {
    maxWidth: 1170,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px 20px',
  },
  icon: {
    width: 64,
    minHeight: 48,
    margin: '0 15px 0 0',
    color: '#1abc9c',
  },
  label: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '1.5',
    color: '#ccc',
    marginTop: 3,
  },
  text: {
    fontSize: 14,
    lineHeight: '1.8',
    color: '#888',
    textAlign: 'left',
  },
}));

const Advantages = () => {
  const classes = useStyles();
  const data = [
    {
      label: 'RESPONSIVE LAYOUT',
      text: 'Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.',
      icon: AirplayIcon,
    },
    {
      label: 'RETINA READY GRAPHICS',
      text: 'Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
      icon: VisibilityIcon,
    },
    {
      label: 'POWERFUL PERFORMANCE',
      text: 'Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.',
      icon: EvStationIcon,
    },
    {
      label: '12+ HEADER DESIGNS',
      text: 'We have included 12+ Header + Menu Designs for your convenience so that you can match your style.',
      icon: CheckIcon,
    },
    {
      label: 'AWESOME MEGA MENU',
      text: 'Completely Customizable 2 Columns, 3 Columns, 4 Columns & 5 Columns Mega Menus are available with Canvas.',
      icon: ThumbUpAltIcon,
    },
    {
      label: 'ATTRACTIVE STICKY MENU',
      text: 'Smooth & Stylish Sticky Menu is what will make your Website differentiate with others.',
      icon: MenuOpenIcon,
    },
  ]

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid
          className={classes.usersWrapper}
          container
          spacing={0}
          justify="flex-start"
        >
          {data.map((item) => (
            <Grid item container justify="center" key={Math.random()} xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className={classes.item}>
                <Link to="#">
                  <Icon className={classes.icon} color='inherit' component={item.icon} />
                </Link>                
                <div className={classes.text}>
                  <div className={classes.label}>{item.label}</div>
                  <p>{item.text}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Advantages;

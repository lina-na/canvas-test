import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import powerful_performance from '../../Assets/powerful_performance.png'
import responsive_layout from '../../Assets/responsive_layout.png'
import retina_ready_graphics from '../../Assets/retina_ready_graphics.png'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: '-webkit-center',
    padding: '80px 0',
  },
  container: {
    maxWidth: 1170,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
    maxWidth: 300,
  },
  image: {
    width: 128,
    height: 128,
  },
  label: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '1.5',
    color: '#444',
    margin: '30px 0',
  },
  text: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '.875rem',
    lineHeight: '1.8',
    color: '#555',
    textAlign: 'center',
  },
}));

const Features = () => {
  const classes = useStyles();

  const data = [
    {
      label: 'Responsive Layout',
      text: 'Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.',
      image: powerful_performance,
    },
    {
      label: 'Retina Ready Graphics',
      text: 'Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
      image: responsive_layout,
    },
    {
      label: 'Powerful Performance',
      text: 'Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.',
      image: retina_ready_graphics,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid
          className={classes.usersWrapper}
          container
          spacing={0}
          justify="center"
        >
          {data.map((item) => (
            <Grid item container justify="center" key={Math.random()} xs={12} sm={4}>
              <div className={classes.item}>
                <Link to="#">
                  <img src={item.image} alt={[item.image]} className={classes.image} />
                </Link>
                <div className={classes.label}>{item.label}</div>
                <div className={classes.text}>{item.text}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Features;

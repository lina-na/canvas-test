import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import iphoneSolid from '../../Assets/iphone-solid.png'
import CustomButton from '../../components/CustomButton/CustomButton.jsx'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    paddingTop: 90,
    paddingBottom: 40,
    textAlign: '-webkit-center',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px 60px 20px',
    maxWidth: 600,
    textAlign: 'left',
    fontSize: 15,
    lineHeight: 1.8,
    color: '#555',
    backdropFilter: 'saturate(180%) blur(3px)',
    backgroundColor: 'rgba(255,255,255,0.72)',
    padding: '10px 20px 15px 25px',
  },
  h2: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#333',
  },
  h3: {
    '&:after': {
      display: 'block',
      borderBottom: '2px solid #414141',
      content: '""',
      width: '50px',
      margin: '25px 0',
    },

    marginTop: 10,
    fontSize: 22,
    fontWeight: 300,
    color: '#777',
  },
  textContainer: {
    display: 'flex',
    margin: '40px 20px 0 20px',
    maxWidth: 1170,
    float: 'right',
  },
  backgroundBox: {
    maxWidth: 1170,
    width: '100%',
    background: `url(${iphoneSolid}) no-repeat`,
    backgroundSize: 'contain',
    minHeight: '45vh',
    backgroundPositionX: 'left',
    backgroundPositionY: 'top',
    alignItems: 'center',
    justifyContent: 'center',
  }

}));

const Responsive = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.backgroundBox}>
        <div className={classes.textContainer}>
          <div className={classes.textBlock}>
            <div className={classes.h2}>TYPICALLY RESPONSIVE</div>
            <div className={classes.h3}>Our App scales beautifully to different Devices.</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eveniet cumque, perferendis accusamus porro illo exercitationem molestias,
              inventore obcaecati ut omnis voluptatibus ratione odio amet magnam quidem tempore necessitatibus quaerat,
              voluptates excepturi voluptatem, veritatis qui temporibus.
            </p>
            <CustomButton
              size='medium'
              content='View gallery'
              variant="contained"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsive;

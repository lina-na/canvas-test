import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'infinite-react-carousel';
import responses from '../../Assets/responses.jpg';
import avatar from '../../Assets/avatar_1.jpg';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    background: `url(${responses}) no-repeat`,
    backgroundSize: 'cover',
  },
  blur: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backdropFilter: 'saturate(5%) blur(4px)',
    backgroundColor: 'rgba(64, 64, 64, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 0',
  },
  response: {
    width: '100%',
    minWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundSize: 'cover !important',
    margin: '10px auto',
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#eee',
  },
  slider: {
    width: '100%',
    maxWidth: 600,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#eee',
    marginBottom: 20,
  },
}));

const SliderResponses = () => {
  const classes = useStyles();
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  };

  return (
    <div className={classes.root}>
      <div className={classes.blur}>
        <div className={classes.title}>What clients say?</div>
        <Slider {...settings} className={classes.slider}>

          <div className={classes.response}>
            <div className={classes.avatar} style={{ background: `url(${avatar}) no-repeat` }} />
            <div className={classes.text}>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Illo animi ab dolorem deleniti, incidunt, recusandae tenetur eius"
              <p>- Collins</p>
            </div>
          </div>

          <div className={classes.response}>
            <div className={classes.avatar} style={{ background: `url(${avatar}) no-repeat` }} />
            <div className={classes.text}>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Illo animi ab dolorem deleniti, incidunt, recusandae tenetur eius"
              <p>- Einshtein</p>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default SliderResponses;

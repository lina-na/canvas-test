import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../../components/CustomButton/CustomButton.jsx';
import analysis from '../../Assets/analysis.jpg'
import dnaImage from '../../Assets/dna.jpg'
import performance from '../../Assets/performance.jpeg'

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
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#333',
  },
  description: {
    padding: '0 20px',
    '&:after': {
      display: 'block',
      borderBottom: '2px solid #414141',
      content: '""',
      height: '5px',
      width: '50px',
      margin: '25px auto',
    },

    marginTop: 20,
    fontSize: 22,
    fontWeight: 300,
    color: '#777',
    maxWidth: 750,

  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 20px',
    maxWidth: 400,
    fontFamily: 'Lato, sans-serif',
    fontSize: '.875rem',
    lineHeight: '1.8',
    color: '#999',
    textAlign: 'center',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },

  },
  image: {
    width: '100%',
    height: 180,
  },
  label: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '1.5',
    color: '#444',
    marginTop: 20,
  },
  text: {
    padding: '0 15px',
  },
  button: {

    marginBottom: 20,
  },
}));

const MoreFeatures = () => {
  const classes = useStyles();

  const data = [
    {
      label: 'genetic analysis',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi ab dolorem deleniti, incidunt, recusandae tenetur eius',
      image: analysis,
    },
    {
      label: 'nutrafitness DNA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi ab dolorem deleniti, incidunt, recusandae tenetur eius',
      image: dnaImage,
    },
    {
      label: 'maximum performance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi ab dolorem deleniti, incidunt, recusandae tenetur eius',
      image: performance,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          Even more feature rich
        </div>
        <div className={classes.description}>
          Philanthropy convener Livelihoods, initiative end hunger gender rights local.
          John Lennon storytelling; advocate, alturism impact catalyst.
        </div>
        <Grid
          container
          spacing={0}
          justify="center"
        >
          {data.map((item) => (
            <Grid item key={Math.random()} xs={12} md={4}>
              <div className={classes.item}>
                <div
                  className={classes.image}
                  style={{ background: `url(${item.image}) no-repeat`, backgroundSize: 'cover' }}
                />
                <div className={classes.label}>{item.label}</div>
                <p className={classes.text}>{item.text}</p>
                <CustomButton
                  className={classes.button}
                  variant="contained"
                  size="small"
                  content="Zjistit vice"
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default MoreFeatures;

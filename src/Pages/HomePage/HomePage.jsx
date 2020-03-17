import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header.jsx';
import TopBlock from './TopBlock.jsx';
import Features from './Features.jsx';
import Apps from './Apps.jsx';
import Advantages from './Advantages.jsx';
import ResponsiveInfoBlock from './ResponsiveInfoBlock.jsx';
import MoreFeatures from './MoreFeatures.jsx';
import SliderFooterPage from './SliderFooterPage';
import Footer from '../../components/Footer/Footer.jsx';

const useStyles = makeStyles(() => ({
  homeTopSection: {
    justifyContent: 'center',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeTopSection}>
      <Header />
      <TopBlock />
      <Features />
      <Apps />
      <Advantages />
      <ResponsiveInfoBlock />
      <MoreFeatures />
      <SliderFooterPage />
      <Footer />
    </div>
  );
}

export default HomePage;

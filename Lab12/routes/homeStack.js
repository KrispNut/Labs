import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home.js';
import BookDetails from '../screens/bookDetail.js';

const screens = {
  Home: {
    screen: Home,
  },
  BookDetails: {
    screen: BookDetails,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

import React from 'react';
import {creatAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Login from './../Screens/Login/index';

import Profile from './../Screens/Profile/index';
import NewsFeed from './../Screens/NewsFeed/index';
import BucketList from './../Screens/BucketList/index';

const Tab = createMaterialBottomTabNavigator();

export default function MyTaps() {
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="NewsFeed" component={NewsFeed} />
        <Tab.Screen name="BucketList" component={BucketList} />
      </Tab.Navigator>
    );
  }
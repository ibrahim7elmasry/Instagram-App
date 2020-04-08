import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '../Screens/Login/index';
import Profile from '../Screens/Profile/index';
import NewsFeed from '../Screens/NewsFeed/index';
import BucketList from '../Screens/BucketList/index';
import Icon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

  // To change the title of header in each tab 
function getHeaderTitle(route){
  const routeName= route.state ? route.state.routes[route.state.index]
  .name :'Tabs'

  switch(routeName){
    case 'NewsFeed':
      return 'NewsFeed';
    case 'BucketList':
      return 'BucketList';
      case 'Profile':
    return 'Profile';
  }

}

const TabsStack = ()=>{
  return(
    <Tab.Navigator  
       activeColor="black"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'white', }}  
       >
      
        <Tab.Screen  
           name="NewsFeed" 
           component={NewsFeed}
           options={{
             title:'NewsFeed' ,
             tabBarIcon:() => ( <Icon name="news" color={'#f95e62'} size={23} />  ),
        }} />

        <Tab.Screen name="BucketList" component={BucketList} 
          options={{
          tabBarLabel: 'BucketList',
          tabBarIcon:() => (<Icon name="list" color={'#ffbb5a'} size={23} /> ),
        }} />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon:() => (  <ProfileIcon name="account" color={'#00a7ff'} size={23} /> ),
        }} />
      </Tab.Navigator>
  )
}


const RootStack = ()=>{
  return(
    <Stack.Navigator  >
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Tabs' component={TabsStack}
      options={({route})=>({
          title: getHeaderTitle(route)
        })}
        />
    </Stack.Navigator>
  )
}

export default ()=>{
  return <NavigationContainer >
    <RootStack />
  </NavigationContainer>
}
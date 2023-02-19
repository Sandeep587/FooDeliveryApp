import React from 'react';
import {Image} from 'react-native';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import {
  HomeScreen,
  Settings,
  MyCart,
  FavouriteScreen,
  Notification
} from '../Screens';

//import styled from 'styled-components/native'

const Tabs = AnimatedTabBarNavigator();

// const Screen = styled.View`
// 	flex: 1;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: #f2f2f2;

const TabBarIcon = (props: any) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 20}
      color={props.tintColor}
    />
  );
};

const TabNav = ({navigation}: any) => {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#223322',
        activeBackgroundColor: '#ff6347',
      }}
      appearance={{
        shadow: false,
        floating: false,
        // whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        // dotSize: DotSize.SMALL
      }}>
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="mycart"
        component={MyCart}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="shopping-bag" />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="heart" />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="bell" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNav;

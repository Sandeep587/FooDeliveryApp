import React,{useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../DrawerContent/DrawerContent';
import Animated, { color } from 'react-native-reanimated';


import{
  SplashScreen,
  OnBoardingScreen,
  LoginScreen,
  SignupScreen,
  OTPAuth,
  ForgotRecovery,
  HomeScreen,
  DeliveryStatus,
  Settings,
  MapViewScreen,
  MyCart,
  MyCard,
  FoodDetail,
  AddNewCard,
  Checkout,
  Success,
  ChnagePassword,
  MyAccount,
  EditMyAccount
} from '../Screens'

import AppNavigator from '../customComponents/AppNavigator'

type RootStackParmaList = {
  Login: undefined;
  DashBoard: undefined;
  Profile: undefined;
  Settings: undefined;
  ForgotPassword: undefined;
  OTP: undefined;
  MyCart: undefined;
  MyCard: undefined;
  OrderHistory: undefined;
  MyCoupon: undefined;
  OnBoardingScreen: undefined;
  mainScreen: undefined;
  home:undefined
  appNavigator:undefined;
};

const Drawer = createDrawerNavigator<RootStackParmaList>();

const ScreenNavigation = () => {

  const [progress, setProgress] = useState(new Animated.Value(0))
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animationStyle = { borderRadius, transform: [{ scale }] }
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} initialRouteName="home" />}>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default ScreenNavigation;

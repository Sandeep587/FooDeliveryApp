import React,{useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from '../DrawerContent/DrawerContent';
import Animated, { color } from 'react-native-reanimated';
import TabNav from './TabNavigation';

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
    EditMyAccount,
    NotificationType
  } from '../Screens'

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
  TabNav:undefined;
  notificationType:undefined;
};

const Drawer = createDrawerNavigator<RootStackParmaList>();

const DrawerNav = ({navigation}:any) => {
    console.log("Nav",navigation)

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
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNav;

/*
Created By Sandeep Sharma 16/12/2021
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from './DrawerNavigation';
import {
  SplashScreen,
  OnBoardingScreen,
  LoginScreen,
  ForgotRecovery,
  DeliveryStatus,
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
  NotificationType,
  FavouriteScreen,
  MyCoupon,
  Settings,
  HelpCenter,
  HomeScreen,
  SignupScreen,
} from '../Screens';

type RootStackParmaList = {
  Splash: undefined;
  screenNavigation: undefined;
  onBoardingScreen: undefined;
  login: undefined;
  signUp: undefined;
  otp: undefined;
  passowrdRecovery: undefined;
  home: undefined;
  deliveryStatus: undefined;
  settings: undefined;
  mapViewScreen: undefined;
  myCart: undefined;
  myCard: undefined;
  foodDetail: undefined;
  addNewCard: undefined;
  checkOut: undefined;
  success: undefined;
  changePassword: undefined;
  myAccount: undefined;
  editMyAccount: undefined;
  appNavigator: undefined;
  drawerContent: undefined;
  notificationType: undefined;
  favourite: undefined;
  myCoupon: undefined;
  help: undefined;
};
const stack = createStackNavigator<RootStackParmaList>();

const StackNav = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Splash">
        <stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="onBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="passowrdRecovery"
          component={ForgotRecovery}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="signUp"
          component={SignupScreen}
          options={{headerShown: false}}
        />

        {/* <stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}

        <stack.Screen
          name="drawerContent"
          component={DrawerNav}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="deliveryStatus"
          component={DeliveryStatus}
          options={{headerShown: false}}
        />

        <stack.Screen name="mapViewScreen" component={MapViewScreen} />

        <stack.Screen
          name="myCart"
          component={MyCart}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="myCard"
          component={MyCard}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="foodDetail"
          component={FoodDetail}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="addNewCard"
          component={AddNewCard}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="checkOut"
          component={Checkout}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="success"
          component={Success}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="changePassword"
          component={ChnagePassword}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="myAccount"
          component={MyAccount}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="editMyAccount"
          component={EditMyAccount}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="notificationType"
          component={NotificationType}
         
        />
        {/*  options={{headerShown: false}} */}
        <stack.Screen
          name="myCoupon"
          component={MyCoupon}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="settings"
          component={Settings}
          options={{headerShown: false}}
        />

        <stack.Screen
          name="help"
          component={HelpCenter}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNav;

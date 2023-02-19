import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'
import { AnimatedTabBarNavigator, DotSize, TabElementDisplayOptions } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
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
  
//import styled from 'styled-components/native'


const Tabs = AnimatedTabBarNavigator()

// const Screen = styled.View`
// 	flex: 1;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: #f2f2f2;
// `

const Logo = () => (
	<Image
		source={require('../assets/images/logo.png')}
		resizeMode={'cover'}
		style={{ width: 60, height: 60 }}
	/>
)

const TabBarIcon = (props: any) => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 20}
			color={props.tintColor}
		/>
	)
}

// const Home = (props: any) => (
// 	<View>
// 		<Logo />
// 		<Text>Home</Text>
// 		<TouchableOpacity onPress={() => props.navigation.navigate("Discover")}>
// 			<Text>Go to Discover</Text>
// 		</TouchableOpacity>
// 	</View>
// )

// const Discover = (props: any) => (
// 	<View>
// 		<Logo />
// 		<Text>Discover</Text>
// 		<TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
// 			<Text>Go to Home</Text>
// 		</TouchableOpacity>
// 	</View>
// )

// const Images = () => (
// 	<View>
// 		<Logo />
// 		<Text>Images</Text>
// 	</View>
// )

// const Profile = () => (
// 	<View>
// 		<Logo />
// 		<Text>Profile</Text>
// 	</View>
// )

const AppNavigator= () => (
	<Tabs.Navigator 
	initialRouteName="home"
		tabBarOptions={{
			activeTintColor: "#ffffff",
			inactiveTintColor: "#223322",
			activeBackgroundColor: "red"
		}}
		// appearance={{
		// 	shadow: true,
		// 	floating: true,
		// 	whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
		// 	dotSize: DotSize.SMALL
		// }}
	>
		<Tabs.Screen
			name="home"
			component={HomeScreen}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="home"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="login"
			component={LoginScreen}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="search"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="signUp"
			component={SingupScreeen}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="image"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="otp"
			component={OTPAuth}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="user"
					/>
				),
			}}
		/>
	</Tabs.Navigator>
)
export default AppNavigator;

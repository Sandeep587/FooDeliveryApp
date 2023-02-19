import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native-paper';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import {StackActions} from '@react-navigation/native'
import HomeScreen from '../HomeScreen/HomeScreen';
import MyCard from '../MyCardScreen/MyCard'
import Animated, { color } from 'react-native-reanimated';

const TabButton = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}>
            <Animated.View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        width: "80%",
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25
                    }}>
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: "#808080"
                        }} />
                    {isFocused &&
                        <Text
                            numberOfLines={1}
                            style={{
                                marginLeft: 5,
                                color: "#000000"
                            }}>{label}</Text>
                    }

                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const MainScreen = ({ navigation, selectedTab, setSelectedTab }) => {

    // Reanimated Shared Value
    // const homeTabFlex=useSharedValue(1)
    // const homeTabColor=useSharedValue(Colors.white)

    // const searchTabFlex=useSharedValue(1)
    // const searchTabColor=useSharedValue(Colors.white)

    // const cartTabFlex=useSharedValue(1)
    // const cartTabColor=useSharedValue(Colors.white)

    // const favTabFlex=useSharedValue(1)
    // const favTabColor=useSharedValue(Colors.white)

    // const notificationTabFlex=useSharedValue(1)
    // const notificationTabColor=useSharedValue(Colors.white)

    // //Reanimated Animated Style

    // const homeFLexStyle=useAnimatedStyle(()=>{
    //     return{
    //         flex:homeTabFlex.value
    //     }
    // })

    // const homeColorStyle=useAnimatedStyle(()=>{
    //     return{
    //         backgroundColor:homeTabColor.value
    //     }
    // })

    // const searchFLexStyle=useAnimatedStyle(()=>{
    //     return{
    //         flex:searchTabFlex.value
    //     }
    // })

    // const searchColorStyle=useAnimatedStyle(()=>{
    //     return{
    //         backgroundColor:searchTabColor.value
    //     }
    // })
    // const cartFLexStyle=useAnimatedStyle(()=>{
    //     return{
    //         flex:cartTabFlex.value
    //     }
    // })

    // const cartColorStyle=useAnimatedStyle(()=>{
    //     return{
    //         backgroundColor:cartTabColor.value
    //     }
    // })
    // const favFLexStyle=useAnimatedStyle(()=>{
    //     return{
    //         flex:favTabFlex.value
    //     }
    // })

    // const favColorStyle=useAnimatedStyle(()=>{
    //     return{
    //         backgroundColor:favTabColor.value
    //     }
    // })

    // const notificationFLexStyle=useAnimatedStyle(()=>{
    //     return{
    //         flex:notificationTabFlex.value
    //     }
    // })

    // const notificationColorStyle=useAnimatedStyle(()=>{
    //     return{
    //         backgroundColor:notificationTabColor.value
    //     }
    // })

    useEffect(()=>{
        // <MyCard/>
       // navigation.dispatch(StackActions.replace('home'));
       //navigation.navigate('home');

    },[])
    return (
        <View style={{ flex: 1, }}>
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50
                }}>
                    {/* left */}
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#DCDCDC',
                        borderWidth: 2,
                        borderRadius: 12,
                        width: 45,
                        marginLeft: 10,
                        marginTop: 5
                    }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image style={{
                                height: 20,
                                width: 20,
                            }}
                                source={require("../../assets/icons/menu.png")} />
                        </TouchableOpacity>

                    </View>
                    {/* middle */}

                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#000000'
                        }}>HOME</Text>
                    </View>

                    {/* right */}
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image style={{
                            height: 45,
                            width: 45,
                            marginLeft: 10,
                            alignSelf: 'center'
                        }}
                            source={require("../../assets/images/logo.png")} />
                    </View>
                </View>

                {/* Search Bar */}
                

            </View>
            <View style={{
                height: 100,
                justifyContent: 'flex-end'
            }}>
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={[
                        "#00000000",
                        "#DCDCDC"
                    ]}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}/>

                {/* BottomTabs */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 12,
                    paddingBottom: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: "#ffffff"
                }}>
                    <TabButton
                        label={"Home"}
                        icon={require('../../assets/icons/home.png')}
                        isFocused={"home"}
                        onPress={() => {HomeScreen}} />
                    <TabButton
                        label={"search"}
                        icon={require('../../assets/icons/search.png')}
                        isFocused={"search"}
                        onPress={() => "search"} />
                    <TabButton
                        label={"cart"}
                        icon={require('../../assets/icons/cart.png')}
                        isFocused={"cart"}
                        onPress={() => "cart"} />
                    <TabButton
                        label={"favourite"}
                        icon={require('../../assets/icons/favourite.png')}
                        isFocused={"favourite"}
                        onPress={() => "favourite"} />
                    <TabButton
                        label={"notification"}
                        icon={require('../../assets/icons/notification.png')}
                        isFocused={"notification"}
                        onPress={() => "notification"} />
                </View>
            </View>
        </View>
    )
}
export default MainScreen; 
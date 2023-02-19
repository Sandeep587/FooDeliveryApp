import React, { useState } from 'react';
import {
    View,
    Image,
    Share
} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Colors,

} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { styles } from './styels';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { color } from 'react-native-reanimated';
//import Share from "react-native-share";


export const DrawerContent = (props) => {
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

    function callHome(){
        props.navigation.closeDrawer();
        props.navigation.navigate('drawerContent')
    }
    function callMyAccount(){
        props.navigation.closeDrawer();
        props.navigation.navigate("myAccount")
    }
    function callNotification(){
        props.navigation.closeDrawer();
        props.navigation.navigate('notificationType')
    }
    function callFavourite(){
        props.navigation.closeDrawer();
        props.navigation.navigate('TabNav',{screen:'favourite'})
    }
    function callTrackYourOrder(){
        props.navigation.closeDrawer();
        props.navigation.navigate('deliveryStatus')
    }
    function callCoupon(){
        props.navigation.closeDrawer();
        props.navigation.navigate('myCoupon')
    }
    function callSettings(){
        props.navigation.closeDrawer();
        props.navigation.navigate('settings')
    }
    function openShareOption(){
        props.navigation.closeDrawer();
        Share.share({
            message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
          }, {
            // Android only:
            dialogTitle: 'Share BAM goodness',
            // iOS only:
            excludedActivityTypes: [
              'com.apple.UIKit.activity.PostToTwitter'
            ]
          })
    }
    function callHelp(){
        props.navigation.closeDrawer();
        props.navigation.navigate('help');
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FF6347"
        }}>
            <DrawerContentScrollView {...props}
                drawerAnimationStyle={animationStyle}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20,
                                marginTop: 20
                            }}
                            source={
                                require('../assets/icons/cancel.png')
                            } />
                    </View>
                </TouchableOpacity>

                <View style={styles.drawerContent}>
                    <TouchableOpacity onPress={()=>callMyAccount()}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://i.pinimg.com/736x/a1/ad/ac/a1adacda5202af8068689d890bbb9da8.jpg'
                                }}
                                size={50} />

                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Sandeep Sharma</Title>
                                <Caption style={styles.caption}>@successive.tech</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callHome()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 20 }}
                            source={require('../assets/icons/home.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 20,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/wallet.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>My Wallet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => callNotification()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5,tintColor:"#ffffff"}}
                            source={require('../assets/icons/notification.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Notification</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => callFavourite()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/favourite.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Favourite</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 1,
                            marginVertical: 20,
                            marginLeft: 20,
                            marginRight: 20,
                            backgroundColor: Colors.white
                        }} />

                    <TouchableOpacity onPress={() => callTrackYourOrder()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                            marginVertical: 10
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/location.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Track Your Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callCoupon()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,

                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/coupon.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Coupon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callSettings()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/settings.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>openShareOption()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/add.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Invite Your Friend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callHelp()}
                        style={{
                            flexDirection: 'row',
                            heigth: 40,
                            marginBottom: 20,
                            alignItems: 'center',
                            paddingLeft: 4,
                        }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                            source={require('../assets/icons/help.png')} />

                        <Text style={{
                            color: "#ffffff",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Help Center</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>

            <TouchableOpacity onPress={() => props.navigation.navigate('login')}
                style={{
                    flexDirection: 'row',
                    heigth: 40,
                    marginBottom: 20,
                    alignItems: 'center',
                    paddingLeft: 4,
                }}>
                <Image
                    style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
                    source={require('../assets/icons/logout.png')} />

                <Text style={{
                    color: "#ffffff",
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 5,
                    alignSelf: 'center',
                    fontSize: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

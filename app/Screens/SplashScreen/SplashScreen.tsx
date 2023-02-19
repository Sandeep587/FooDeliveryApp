import React,{useEffect} from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native'
import {styles} from '../SplashScreen/style'

const SplashScreen=({navigation})=>{
    useEffect(()=>{
        setTimeout(function(){  
            navigation.navigate('onBoardingScreen');
           }, 1000);
    },[])

    return (
        <View style={styles.mainLayout}>
            <Image
                style={styles.container}
                source={require('../../assets/images/logo_01.png')}></Image>
        </View>
    )
}
export default SplashScreen; 
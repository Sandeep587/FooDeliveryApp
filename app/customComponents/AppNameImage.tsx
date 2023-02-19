import React from 'react';
import { View, Text, Image } from 'react-native';
import { customStyles } from './styles/customStyles';

const AppNameImages = () => {
    return (
        <View style={customStyles.mainLayout}>
            <Image style={customStyles.imageStyle}
            source={require('../assets/images/logo.png')} />
            <Text style={customStyles.textStyle}>Eatme</Text>
        </View>
    )
}
export default AppNameImages;


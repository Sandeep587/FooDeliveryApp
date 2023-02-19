import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { customStyles } from './styles/customStyles';

const GoogleButton = () => {
    return (
        <TouchableOpacity style={customStyles.gButton}>
            <Image style={customStyles.buttonStyle}
                source={require('../assets/icons/gicon.png')} />
            <Text style={customStyles.blackTxtStyle}>Continue With Google</Text>
        </TouchableOpacity>
    )
}
export default GoogleButton;
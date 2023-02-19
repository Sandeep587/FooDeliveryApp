import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../DrawerContent/styels';
import { customStyles } from './styles/customStyles';

const FacebookButton = () => {
    return (
        <TouchableOpacity style={ customStyles.fbButton }>
            <Image style={ customStyles.buttonStyle }
              source={require('../assets/icons/fbicon.jpg')}/>
            <Text style={ customStyles.whiteTxtStyle}>Continue With Facebook</Text>
        </TouchableOpacity>
    )
}
export default FacebookButton;
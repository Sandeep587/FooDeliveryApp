import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TextButton=({label,labelStyle,buttonContainerStyle,onPress})=>{
    return(
        <TouchableOpacity
        style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#FF6347",
            ...buttonContainerStyle
        }} 
        onPress={onPress}>

            <Text style={{
                color:"#ffffff",
                fontWeight:'600',
                ...labelStyle
            }}>{label}</Text>

        </TouchableOpacity>
    )
}
export default TextButton; 

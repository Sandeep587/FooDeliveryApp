import React from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from 'react-native';

const TextIconButton=({ContainerStyle,label,labelStyle,icon,iconStyle,onPress})=>{
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                ...ContainerStyle
            }}
            onPress={onPress}>

            <Text
             style={{
                 fontWeight:'bold',
                 ...labelStyle
             }}>{label}</Text>

             <Image
             source={icon}
             style={{
                 marginLeft:5,
                 width:20,
                 height:20,
                 tintColor:"#000000",
                 ...iconStyle
             }}/>
        </TouchableOpacity>
    )
}
export default TextIconButton;
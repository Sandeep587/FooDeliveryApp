import React from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from 'react-native';

const TextRatingButton=({ContainerStyle,label,labelStyle,icon,iconStyle,onPress})=>{
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                ...ContainerStyle
            }}
            onPress={onPress}>

          <Image
             source={icon}
             style={{
                 marginLeft:10,
                 width:20,
                 height:20,
                 tintColor:"#000000",
                 ...iconStyle
             }}/>
            <Text
             style={{
                 fontWeight:'bold',
                 ...labelStyle
             }}>{label}</Text>

             
        </TouchableOpacity>
    )
}
export default TextRatingButton;
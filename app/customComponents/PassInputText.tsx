import React from 'react';
import { View, Image, TextInput } from 'react-native';

const PassInputText = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: "#F0F0F0",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            height: 50,
            paddingLeft: 5,
            borderRadius: 6
        }}>
            <View style={{ flex: 1.8 }}>
                <TextInput></TextInput>
            </View>

            <View style={{
                flex: .2,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image style={{
                    width: 20,
                    height: 20,
                }}
                    source={
                        require('../assets/icons/eye.png')
                    } />
            </View>
        </View>
    )
}
export default PassInputText;
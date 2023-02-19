import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppNameImages from '../../customComponents/AppNameImage';
import { passRecoveryStyle } from './styles'

const ForgotRecovery = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#ffffff"
        }}>
            <ScrollView style={{ backgroundColor: "#ffffff" }}>
                <View style={{
                    flex: .8,
                    backgroundColor: "#ffffff"
                }}>
                    <StatusBar backgroundColor="#ffffff" />

                    <AppNameImages />

                    <View style={passRecoveryStyle.letsSignUpMainLayout}>

                        <Text style={
                            passRecoveryStyle.RecoveryText
                        }>Getting Started</Text>

                        <Text style={
                            passRecoveryStyle.enterEmail
                        }>Please enter your email address to</Text>
                        <Text style={
                            passRecoveryStyle.enterEmail
                        }>recover your password</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginTop: 40
                    }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={passRecoveryStyle.edtTxt}>Email</Text>
                        </View>
                        <View style={passRecoveryStyle.emailTextInput}>
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
                                        require('../../assets/icons/check.png')
                                    } />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate("login")}
            style={passRecoveryStyle.loginButton}>
                <Text style={passRecoveryStyle.buttonTxt}>Send Email</Text>
            </TouchableOpacity>
        </View>
    )
};
export default ForgotRecovery;

import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppNameImages from '../../customComponents/AppNameImage';
import { styles } from '../OTPScreen/styles';

const OTPAuth = ({navigation}) => {
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

                    <View style={styles.OtpAuthMainLayout}>

                        <Text style={
                            styles.AuthCodeTxt
                        }>OTP Authentication</Text>

                        <Text style={
                            styles.grayText
                        }>An Authentication code send to </Text>
                        <Text style={
                            styles.grayText
                        }>sandeep.sharma1@gmail.com</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 40
                    }}>

                        <View style={styles.OTPTextInput}>
                            <TextInput></TextInput>
                        </View>

                        <View style={styles.OTPTextInput}>
                            <TextInput></TextInput>
                        </View>

                        <View style={styles.OTPTextInput}>
                            <TextInput></TextInput>
                        </View>

                        <View style={styles.OTPTextInput}>
                            <TextInput></TextInput>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                    }}>
                        <Text style={styles.grayText}>Didn't receive code? </Text>
                        <Text style={styles.orangeText}>Resend(59s) </Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate("passowrdRecovery")}
            style={styles.loginButton}>
                <Text style={styles.buttonTxt}>Continue</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 10,
            }}>
                <Text style={styles.grayText}>By signing up,you agree to our </Text>
                <Text style={styles.orangeText}>Terms and Conditions</Text>
            </View>
        </View>
    );
}
export default OTPAuth;
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    OtpAuthMainLayout: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    AuthCodeTxt: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold'
    },
    grayText: {
        fontSize: 15,
        fontWeight: 'normal'
    },
    edtTxt: {
        flex: .5,
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'left',
        marginLeft: 20
    },
    loginButton: {
        backgroundColor: "#FF6347",
        height: 50,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTxt: {
        color: "#ffffff",
        fontSize: 15
    },
    OTPTextInput: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#F0F0F0",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 60,
        width: 60,
        paddingLeft: 5,
        borderRadius: 6
    },
orangeText:{
        fontSize: 15,
        color: "#FF6347",
        fontWeight: 'normal'
    },
});
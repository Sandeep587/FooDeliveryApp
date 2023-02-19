import { StyleSheet } from 'react-native';
export const singUpStyle = StyleSheet.create({
    letsSignUpMainLayout: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    letsSignUpText: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold'
    },
    createAccount: {
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
    errorMessageTxt: {
        flex: 1.5,
        fontSize: 15,
        textAlign: 'right',
        fontWeight: 'normal',
        marginRight: 20,
        color: "#FF0000"
    },
    loginButton: {
        backgroundColor: "#FF6347",
        height: 50,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTxt: {
        color: "#ffffff",
        fontSize: 15
    },
    signUpTxt: {
        fontSize: 15,
        color: "#FF6347",
        fontWeight: '800',
        marginLeft: 5
    },
});
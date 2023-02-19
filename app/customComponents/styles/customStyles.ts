import { StyleSheet } from 'react-native';

export const customStyles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 120,
        height: 120,
        marginTop: 10
    },
    textStyle: {
        color: '#FF6347',
        fontSize: 35,
        fontWeight: 'bold'
    },
    fbButton: {
        backgroundColor: "#4267B2",
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row'
    },
    buttonStyle: {
        width: 20,
        height: 20,
    },
    whiteTxtStyle: {
        color: "#ffffff",
        fontSize: 15,
        marginLeft: 10
    },
    gButton: {
        backgroundColor: "#F0F0F0",
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row'
    },
    blackTxtStyle:{
        color: "#000000",
        fontSize: 15,
        marginLeft: 10
    }
})
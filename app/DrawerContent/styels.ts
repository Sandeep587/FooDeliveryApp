import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
        color:"#ffffff"
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        color:"#ffffff"
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItem:'center',
        color:"#ffffff"
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
        color:"#ffffff"
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
        color:"#ffffff"
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
        marginTop:10
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHoriontal: 16,
        color:"#ffffff"
    }
});
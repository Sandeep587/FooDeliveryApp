import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {styles} from './styles'
 
const Success=({navigation})=>{
    return(
        <View style={{
            flex:1,
            flexDirection:'column',
        }}>
            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image style={{height:150,width:150}}
                source={require('../../assets/images/congrats.png')}/>

                <Text style={{
                    fontSize:32,
                    fontWeight: 'bold',
                    color:'#000000'
                }}>Congratulations!</Text>

                 <Text style={{
                    fontSize:16,
                    marginTop:5,
                    fontWeight: 'normal',
                }}>Payment was successfully made!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("deliveryStatus")}
                style={styles.button}>
                <Text style={styles.buttonTxt}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Success;